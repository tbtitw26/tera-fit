"use client";

import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import styles from "./Checkout.module.scss";
import {useCurrency} from "@/context/CurrencyContext";
import {CheckoutPlan, useCheckoutStore} from "@/utils/store";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";
import visa from "@/assets/cards/visa.png";
import mastercard from "@/assets/cards/mastercard.png";
import pciDss from "@/assets/cards/pci-dss-compliant-logo-vector.svg";

const TOKENS_PER_EUR = 100; // 100 tokens = 1 EUR (base)

type Plan = CheckoutPlan;

type PaymentErrorResponse = {
    message?: string;
};

type BillingDetails = {
    address: string;
    city: string;
    postalCode: string;
    country: string;
};

type ConsentField = "agreed" | "expressConsent";

const Checkout = () => {
    const {plan, setPlan, clearPlan} = useCheckoutStore();

    const [activePlan, setActivePlan] = useState<Plan | null>(plan ?? null);
    const [agreed, setAgreed] = useState(false);
    const [expressConsent, setExpressConsent] = useState(false);
    const [showExpressConsentDetails, setShowExpressConsentDetails] = useState(false);
    const [consentTouched, setConsentTouched] = useState<Record<ConsentField, boolean>>({
        agreed: false,
        expressConsent: false,
    });
    const [loading, setLoading] = useState(false);
    const [billingDetails, setBillingDetails] = useState<BillingDetails>({
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const {currency, sign, convertFromBase} = useCurrency();
    const merchantName = COMPANY_LEGAL_NAME || COMPANY_NAME || "Tera Fit";
    const expressConsentSummary = "I expressly agree that Tera Fit may begin providing the digital service immediately...";
    const expressConsentNotice = "I expressly agree that Tera Fit may begin providing the digital service immediately after my purchase. I acknowledge that once the digital content or service has been delivered or performance has begun, I may lose my right of withdrawal.";

    // hydrate plan from localStorage / store
    useEffect(() => {
        if (!plan) {
            const stored = localStorage.getItem("selectedPlan");
            if (stored) {
                const parsed = JSON.parse(stored) as Plan;
                setPlan(parsed);
                setActivePlan(parsed);
            } else {
                setActivePlan(null);
            }
        } else {
            setActivePlan(plan as Plan);
        }
    }, [plan, setPlan]);

    /**
     * UI price:
     * - activePlan.price is EUR (base)
     * - convert to selected currency for display
     */
    const basePriceInEUR = useMemo(() => activePlan?.price ?? 0, [activePlan]);

    const subtotal = useMemo(() => {
        return convertFromBase(basePriceInEUR);
    }, [basePriceInEUR, convertFromBase]);

    const vat = useMemo(() => subtotal * 0.2, [subtotal]);
    const total = useMemo(() => subtotal + vat, [subtotal, vat]);

    /**
     * Backend amount:
     * Your API /api/user/buy-tokens expects:
     *   { currency: "EUR"|"GBP", amount: number }
     * and converts amount -> EUR -> tokens.
     *
     * IMPORTANT:
     * We calculate amount from TOKENS (not from VAT),
     * so VAT does NOT increase token amount.
     */
    const amountForBackend = useMemo(() => {
        if (!activePlan) return 0;

        // tokens -> EUR amount (base)
        const amountEur = activePlan.tokens / TOKENS_PER_EUR;

        // EUR -> selected currency amount (what we send to backend)
        return convertFromBase(amountEur);
    }, [activePlan, convertFromBase]);

    const hasBillingDetails = useMemo(
        () => Object.values(billingDetails).every((value) => value.trim().length > 0),
        [billingDetails],
    );
    const hasRequiredConsents = agreed && expressConsent;
    const isPayDisabled = !hasRequiredConsents || loading;
    const showAgreedError = consentTouched.agreed && !agreed;
    const showExpressConsentError = consentTouched.expressConsent && !expressConsent;

    const markConsentTouched = (field: ConsentField) => {
        setConsentTouched((current) => ({
            ...current,
            [field]: true,
        }));
    };

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!activePlan) return;
        if (!agreed || !expressConsent || loading) {
            setConsentTouched({
                agreed: true,
                expressConsent: true,
            });
            return;
        }

        if (!hasBillingDetails) {
            alert("Please complete all billing address fields.");
            return;
        }

        // backend currently supports only EUR/GBP
        if (currency !== "EUR" && currency !== "GBP") {
            alert("Unsupported currency. Please select EUR or GBP.");
            return;
        }

        // guard
        if (!amountForBackend || amountForBackend <= 0) {
            alert("Invalid amount");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    currency,                 // ✅ required by backend
                    amount: amountForBackend, // ✅ required by backend
                    digitalServiceImmediateConsent: expressConsent,
                }),
            });

            const data = await res.json().catch((): PaymentErrorResponse => ({}));

            if (!res.ok) {
                throw new Error(data?.message ?? "Payment failed");
            }

            localStorage.removeItem("selectedPlan");
            clearPlan();
            window.location.href = "/profile";
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Payment failed";
            alert(message);
        } finally {
            setLoading(false);
        }
    };

    // ✅ ранній return тільки ПІСЛЯ всіх хуків
    if (!activePlan) {
        return (
            <div className={styles.checkoutEmpty}>
                <p>
                    No plan selected. Please go back to <a href="/pricing">Pricing</a>.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.checkout}>
            <div className={styles.header}>
                <h1>Checkout</h1>
                <p>Secure Payment</p>
            </div>

            <div className={styles.main}>
                <div className={styles.summary}>
                    <h2>Order Summary</h2>

                    <div className={styles.itemRow}>
                        <div className={styles.itemInfo}>
                            <h3>{activePlan.title}</h3>
                            <p>{activePlan.tokens.toLocaleString()} tokens</p>
                        </div>
                        <span>
              {sign}
                            {subtotal.toFixed(2)} {currency}
            </span>
                    </div>

                    <div className={styles.line}/>

                    <div className={styles.itemRow}>
                        <p>Subtotal</p>
                        <span>
              {sign}
                            {subtotal.toFixed(2)} {currency}
            </span>
                    </div>

                    <div className={styles.itemRow}>
                        <p>VAT (20%)</p>
                        <span>
              {sign}
                            {vat.toFixed(2)} {currency}
            </span>
                    </div>

                    <div className={styles.totalRow}>
                        <h3>Total</h3>
                        <h3>
                            {sign}
                            {total.toFixed(2)} {currency}
                        </h3>
                    </div>

                    <div className={styles.merchant}>
                        <h2>Merchant of Record</h2>
                        <dl>
                            <div>
                                <dt>Seller</dt>
                                <dd>{merchantName}</dd>
                            </div>
                            {COMPANY_NUMBER && (
                                <div>
                                    <dt>Company number</dt>
                                    <dd>{COMPANY_NUMBER}</dd>
                                </div>
                            )}
                            {COMPANY_ADDRESS && (
                                <div>
                                    <dt>Address</dt>
                                    <dd>{COMPANY_ADDRESS}</dd>
                                </div>
                            )}
                            {COMPANY_EMAIL && (
                                <div>
                                    <dt>Email</dt>
                                    <dd>
                                        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                                    </dd>
                                </div>
                            )}
                            {COMPANY_PHONE && (
                                <div>
                                    <dt>Phone</dt>
                                    <dd>
                                        <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>{COMPANY_PHONE}</a>
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>

                <div className={styles.payment}>
                    <h2>Payment Details</h2>

                    <form onSubmit={handlePay}>
                        <input type="text" placeholder="Card number"/>
                        <div className={styles.row}>
                            <input type="text" placeholder="MM/YY"/>
                            <input type="text" placeholder="CVV"/>
                        </div>
                        <input type="text" placeholder="Cardholder name"/>

                        <div className={styles.billingDetails}>
                            <h3>Billing Address</h3>
                            <input
                                type="text"
                                placeholder="Address"
                                value={billingDetails.address}
                                onChange={(e) => setBillingDetails((current) => ({
                                    ...current,
                                    address: e.target.value,
                                }))}
                                required
                            />
                            <div className={styles.row}>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={billingDetails.city}
                                    onChange={(e) => setBillingDetails((current) => ({
                                        ...current,
                                        city: e.target.value,
                                    }))}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Postal code"
                                    value={billingDetails.postalCode}
                                    onChange={(e) => setBillingDetails((current) => ({
                                        ...current,
                                        postalCode: e.target.value,
                                    }))}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Country"
                                value={billingDetails.country}
                                onChange={(e) => setBillingDetails((current) => ({
                                    ...current,
                                    country: e.target.value,
                                }))}
                                required
                            />
                        </div>

                        <div className={styles.agreement}>
                            <label className={styles.agreementLabel}>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    required
                                    aria-invalid={showAgreedError}
                                    aria-describedby={showAgreedError ? "checkout-terms-error" : undefined}
                                    onBlur={() => markConsentTouched("agreed")}
                                    onChange={(e) => {
                                        setAgreed(e.target.checked);
                                        markConsentTouched("agreed");
                                    }}
                                />{" "}
                                I agree to the{" "}
                                <a href="/terms-and-conditions" target="_blank" rel="noreferrer">
                                    terms & conditions
                                </a>
                            </label>
                            {showAgreedError && (
                                <p id="checkout-terms-error" className={styles.agreementError}>
                                    You must agree to the terms & conditions.
                                </p>
                            )}
                        </div>

                        <div className={styles.agreement}>
                            <label className={styles.agreementLabel}>
                                <input
                                    type="checkbox"
                                    checked={expressConsent}
                                    required
                                    aria-invalid={showExpressConsentError}
                                    aria-describedby={
                                        showExpressConsentError
                                            ? "express-consent-details express-consent-error"
                                            : "express-consent-details"
                                    }
                                    onBlur={() => markConsentTouched("expressConsent")}
                                    onChange={(e) => {
                                        setExpressConsent(e.target.checked);
                                        markConsentTouched("expressConsent");
                                    }}
                                />
                                <span className={styles.agreementText}>
                                    {expressConsentSummary}
                                </span>
                            </label>
                            <div
                                className={`${styles.consentDisclosure} ${showExpressConsentDetails ? styles.consentDisclosureOpen : ""}`}
                            >
                                <button
                                    type="button"
                                    className={styles.agreementToggle}
                                    aria-expanded={showExpressConsentDetails}
                                    aria-controls="express-consent-details"
                                    onClick={() => setShowExpressConsentDetails((current) => !current)}
                                    onBlur={() => markConsentTouched("expressConsent")}
                                    onKeyDown={(e) => {
                                        if (e.key === "Escape") {
                                            setShowExpressConsentDetails(false);
                                        }
                                    }}
                                >
                                    Read full consent
                                </button>
                                <div
                                    id="express-consent-details"
                                    className={styles.agreementPopover}
                                    role="tooltip"
                                >
                                    {expressConsentNotice}
                                </div>
                            </div>
                            {showExpressConsentError && (
                                <p id="express-consent-error" className={styles.agreementError}>
                                    You must confirm immediate digital service delivery before purchase.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isPayDisabled}
                            className={styles.payButton}
                        >
                            {loading ? "Processing..." : `Pay ${sign}${total.toFixed(2)} ${currency}`}
                        </button>

                        <div className={styles.paymentSecurity} aria-label="Accepted cards and PCI DSS compliance">
                            <Image
                                src={visa}
                                alt="Visa"
                                placeholder="blur"
                                className={styles.paymentLogo}
                            />
                            <Image
                                src={mastercard}
                                alt="Mastercard"
                                placeholder="blur"
                                className={styles.paymentLogo}
                            />
                            <Image
                                src={pciDss}
                                alt="PCI DSS compliant"
                                className={styles.paymentLogo}
                            />
                        </div>

                        {/* optional debug */}
                        {/* <pre>{JSON.stringify({ currency, amountForBackend }, null, 2)}</pre> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
