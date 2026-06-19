"use client";

import React from "react";
import { Currency, useCurrency } from "@/context/CurrencyContext";
import styles from "./CurrencySwitch.module.scss";

const CURRENCIES: { code: Currency; label: string }[] = [
    { code: "EUR", label: "EUR €" },
    { code: "GBP", label: "GBP £" },
    { code: "USD", label: "USD $" },
    { code: "KZT", label: "KZT ₸" },
];

const CurrencySwitch: React.FC = () => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className={styles.wrapper}>
            <select
                className={styles.select}
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                aria-label="Select currency"
            >
                {CURRENCIES.map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                ))}
            </select>
            <svg
                className={styles.chevron}
                viewBox="0 0 12 8"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default CurrencySwitch;