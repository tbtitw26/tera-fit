"use client";

import React, { useState } from "react";
import { useField } from "formik";
import { ChevronDown } from "lucide-react";
import styles from "./CountrySelect.module.scss";
import { getAllowedCountries } from "@/utils/countries";

interface Props {
    name: string;
    placeholder?: string;
}

const CountrySelect: React.FC<Props> = ({ name, placeholder }) => {
    const [field, meta, helpers] = useField(name);
    const [focused, setFocused] = useState(false);
    const countries = getAllowedCountries();
    const showError = Boolean(meta.touched && meta.error);
    const hasValue = Boolean(field.value);
    const isActive = focused || hasValue;

    return (
        <div
            className={`${styles.field} ${isActive ? styles.active : ""} ${showError ? styles.error : ""} ${focused ? styles.focused : ""}`}
        >
            <label className={styles.label}>{placeholder || "Country"}</label>

            <select
                {...field}
                className={styles.select}
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                    setFocused(false);
                    field.onBlur(e);
                    helpers.setTouched(true);
                }}
            >
                <option value="" disabled />
                {countries.map((country) => (
                    <option key={country.alpha2} value={country.alpha2}>
                        {country.name}
                    </option>
                ))}
            </select>

            <ChevronDown className={styles.chevron} size={18} aria-hidden />

        </div>
    );
};

export default CountrySelect;
