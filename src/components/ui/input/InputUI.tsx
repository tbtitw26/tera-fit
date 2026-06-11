"use client";

import React, { useState, useRef } from "react";
import { useField } from "formik";
import styles from "./InputUI.module.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputUIProps = {
    name: string;
    type?: string;
    placeholder?: string;
    formik?: boolean;
};

const InputUI: React.FC<InputUIProps> = ({ formik, name, type = "text", placeholder, ...rest }) => {
    const [field, meta] = useField(name);
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const showError = Boolean(meta.touched && meta.error);
    const hasValue = Boolean(field.value);
    const isDate = type === "date";
    const isActive = focused || hasValue || isDate;
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div
            className={`${styles.field} ${isActive ? styles.active : ""} ${showError ? styles.error : ""} ${focused ? styles.focused : ""}`}
            onClick={() => inputRef.current?.focus()}
        >
            <label className={styles.label}>{placeholder}</label>
            <input
                ref={inputRef}
                {...field}
                type={inputType}
                className={`${styles.input} ${hasValue ? styles.hasValue : ""}`}
                autoComplete={type === "email" ? "email" : type === "password" ? "current-password" : "off"}
                onFocus={() => {
                    setFocused(true);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    field.onBlur(e);
                }}
            />

            {isPassword && (
                <button
                    type="button"
                    className={styles.toggle}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowPassword((v) => !v);
                        inputRef.current?.focus();
                    }}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
            )}

        </div>
    );
};

export default InputUI;
