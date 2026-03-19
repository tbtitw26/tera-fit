"use client";

import React from "react";
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
    const countries = getAllowedCountries();
    const showError = Boolean(meta.touched && meta.error);

    return (
        <div className={styles.wrapper}>
            <div className={styles.selectWrap}>
                <select
                    {...field}
                    className={styles.control}
                    data-error={showError ? "true" : "false"}
                    onBlur={(event) => {
                        field.onBlur(event);
                        helpers.setTouched(true);
                    }}
                >
                    <option value="" disabled>
                        {placeholder || "Select your country"}
                    </option>
                    {countries.map((country) => (
                        <option key={country.alpha2} value={country.alpha2}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <ChevronDown className={styles.chevron} size={18} aria-hidden />
            </div>

            {showError && (
                <div className={styles.error}>{meta.error}</div>
            )}
        </div>
    );
};

export default CountrySelect;
