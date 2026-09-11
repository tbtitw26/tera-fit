"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type Currency = "EUR" | "GBP" | "USD";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (val: Currency) => void;
    sign: string;
    rateToBase: number;
    convertFromBase: (eur: number) => number;
    convertToBase: (val: number) => number;
}

const CURRENCY_SIGNS: Record<Currency, string> = {
    EUR: "€",
    GBP: "£",
    USD: "$",
};

// Base currency — EUR
const RATES: Record<Currency, number> = {
    EUR: 1,
    GBP: 0.84,   // 1 EUR = 0.84 GBP
    USD: 1.09,   // 1 EUR = 1.09 USD
};

const CurrencyContext = createContext<CurrencyContextType>({
    currency: "EUR",
    setCurrency: () => {},
    sign: "€",
    rateToBase: 1,
    convertFromBase: (v) => v,
    convertToBase: (v) => v,
});

export const useCurrency = () => useContext(CurrencyContext);

const STORAGE_KEY = "preferred_currency";

const getInitialCurrency = (): Currency => {
    if (typeof window === "undefined") return "EUR";
    const stored = localStorage.getItem(STORAGE_KEY) as Currency | null;
    return stored && stored in RATES ? stored : "EUR";
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrencyState] = useState<Currency>("EUR");

    // Hydrate from localStorage after mount (avoids SSR mismatch)
    useEffect(() => {
        setCurrencyState(getInitialCurrency());
    }, []);

    const setCurrency = useCallback((val: Currency) => {
        setCurrencyState(val);
        localStorage.setItem(STORAGE_KEY, val);
    }, []);

    const rateToBase = RATES[currency];
    const sign = CURRENCY_SIGNS[currency];

    return (
        <CurrencyContext.Provider
            value={{
                currency,
                setCurrency,
                sign,
                rateToBase,
                convertFromBase: (eur) => eur * rateToBase,
                convertToBase: (val) => val / rateToBase,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};