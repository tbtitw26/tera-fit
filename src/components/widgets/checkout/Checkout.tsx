"use client";

import React, {useEffect, useMemo, useState} from "react";
import styles from "./Checkout.module.scss";
import {useCurrency} from "@/context/CurrencyContext";
import {useCheckoutStore} from "@/utils/store";

const TOKENS_PER_EUR = 100; // 100 tokens = 1 EUR (base)

type Plan = {
    title: string;
    price: number; // EUR (base)
    tokens: number;
    variant?: string;
    currency?: string;
};

const Checkout = () => {
    const {plan, setPlan, clearPlan} = useCheckoutStore();

    const [activePlan, setActivePlan] = useState<Plan | null>(plan ?? null);
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);

    const {currency, sign, convertFromBase} = useCurrency();

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
     * and converts amount -> GBP -> tokens.
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

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!activePlan) return;
        if (!agreed || loading) return;

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
                }),
            });

            const data = await res.json().catch(() => ({} as any));

            if (!res.ok) {
                throw new Error(data?.message ?? "Payment failed");
            }

            localStorage.removeItem("selectedPlan");
            clearPlan();
            window.location.href = "/profile";
        } catch (err: any) {
            alert(err?.message ?? "Payment failed");
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
                        <input type="text" placeholder="Billing address"/>

                        <div className={styles.agreement}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />{" "}
                                I agree to the{" "}
                                <a href="/terms" target="_blank" rel="noreferrer">
                                    terms & conditions
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed || loading}
                            className={styles.payButton}
                        >
                            {loading ? "Processing..." : `Pay ${sign}${total.toFixed(2)} ${currency}`}
                        </button>

                        {/* optional debug */}
                        {/* <pre>{JSON.stringify({ currency, amountForBackend }, null, 2)}</pre> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;