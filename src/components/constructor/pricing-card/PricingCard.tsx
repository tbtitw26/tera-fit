"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Input from "@mui/joy/Input";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useRouter } from "next/navigation";
import { useCheckoutStore } from "@/utils/store";
import { PiPencilSimpleLineBold } from "react-icons/pi";

const TOKENS_PER_UNIT = 100;

interface PricingCardProps {
    variant?: "starter" | "pro" | "premium" | "custom";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features?: string[];
    buttonText: string;
    badgeTop?: string;
    index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "starter",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features = [],
                                                     buttonText,
                                                     badgeTop,
                                                     index = 0,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { sign, convertFromBase, currency } = useCurrency();
    const router = useRouter();
    const { setPlan } = useCheckoutStore();

    const isCustom = variant === "custom";
    const [customTokenAmount, setCustomTokenAmount] = useState<string>("");
    const [customEurAmount, setCustomEurAmount] = useState<string>("");

    const effectiveTokens = useMemo(() => {
        if (isCustom) {
            const val = parseFloat(customEurAmount);
            return isNaN(val) ? 0 : Math.round(val * TOKENS_PER_UNIT);
        }
        return tokens;
    }, [customEurAmount, isCustom, tokens]);

    const basePriceEUR = useMemo(() => {
        if (isCustom) return effectiveTokens / TOKENS_PER_UNIT;
        const num = parseFloat(price.replace(/[^0-9.]/g, ""));
        return isNaN(num) ? 0 : num;
    }, [price, isCustom, effectiveTokens]);

    const convertedPrice = useMemo(() => {
        return convertFromBase(basePriceEUR);
    }, [basePriceEUR, convertFromBase]);

    const handleBuy = () => {
        if (!user) {
            showAlert("Sign in required", "Please sign in to continue", "info");
            setTimeout(() => router.push("/sign-in"), 1200);
            return;
        }

        const finalTokens = effectiveTokens;
        if (isCustom && finalTokens < 100) {
            showAlert("Minimum amount", `Please enter at least ${sign}1.00`, "warning");
            return;
        }

        const plan = {
            title,
            price: basePriceEUR,
            tokens: finalTokens,
            variant,
            currency,
        };
        setPlan(plan);
        localStorage.setItem("selectedPlan", JSON.stringify(plan));
        router.push("/checkout");
    };

    return (
        <motion.div
            className={`${styles.card} ${styles[variant]}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
        >
            {badgeTop && (
                <div className={styles.badgeWrapper}>
                    <span className={styles.badgeTop}>{badgeTop}</span>
                </div>
            )}

            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.priceContainer}>
                    <span className={styles.priceValue}>
                        {sign}
                        {convertedPrice.toFixed(isCustom && effectiveTokens === 0 ? 2 : isCustom ? 2 : 0)}
                    </span>
                    <span className={styles.oneTime}>one-time</span>
                </div>
                <div className={styles.tokenHighlight}>
                    Balance top-up
                </div>
            </div>

            <div className={styles.content}>
                {isCustom ? (
                    <div className={styles.customSection}>
                        <div className={styles.divider} />
                        <label className={styles.inputLabel}>AMOUNT ({sign})</label>
                        <Input
                            type="number"
                            variant="plain"
                            placeholder="10.00"
                            value={customEurAmount}
                            onChange={(e) => setCustomEurAmount(e.target.value)}
                            endDecorator={<PiPencilSimpleLineBold size={18} />}
                            className={styles.tokenInput}
                            slotProps={{
                                input: {
                                    min: 1,
                                    step: 1,
                                },
                            }}
                        />
                        <div className={styles.totalRow}>
                            <span>Total Price</span>
                            <span className={styles.totalValue}>
                                {sign}
                                {convertedPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>
                ) : (
                    <p className={styles.description}>{description}</p>
                )}
            </div>

            <div className={styles.cta}>
                <ButtonUI fullWidth variant="soft" onClick={handleBuy}>
                    {isCustom ? "Calculate Price" : user ? `Top Up ${sign}${convertedPrice.toFixed(0)}` : "Sign in to top up"}
                </ButtonUI>
            </div>
        </motion.div>
    );
};

export default PricingCard;
