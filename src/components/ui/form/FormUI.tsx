"use client";

import React from "react";
import { Form, Field, useFormikContext } from "formik";
import clsx from "clsx";

import styles from "./FormUI.module.scss";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";
import CountrySelect from "@/components/ui/country-select/CountrySelect";

interface FieldConfig {
    name: string;
    type: string;
    placeholder?: string;
}

interface FormUIProps {
    title: string;
    description?: string;
    isSubmitting?: boolean;
    fields: FieldConfig[];
    submitLabel?: string;
    showTerms?: boolean;

    variant?: "auth" | "register";
    size?: "sm" | "md" | "lg";
    aside?: React.ReactNode;
}

const FormUI: React.FC<FormUIProps> = ({
                                           title,
                                           description,
                                           isSubmitting,
                                           fields,
                                           submitLabel = "Submit",
                                           showTerms = false,
                                           variant = "auth",
                                           size = "md",
                                           aside,
                                       }) => {
    const { values } = useFormikContext<any>();

    const isButtonDisabled =
        isSubmitting || (showTerms ? !values.terms : false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgGlow} aria-hidden />

            <div className={clsx(styles.formContainer, styles[size], styles[variant])}>
                {variant === "register" && aside}

                <div className={styles.formBlock}>
                    <header className={styles.header}>
                        <div className={styles.headerIcon}>
                            {variant === "auth" ? (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    <polyline points="10 17 15 12 10 7" />
                                    <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                            ) : (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <line x1="19" y1="8" x2="19" y2="14" />
                                    <line x1="22" y1="11" x2="16" y2="11" />
                                </svg>
                            )}
                        </div>
                        <h2 className={styles.title}>{title}</h2>
                        {description && (
                            <p className={styles.description}>{description}</p>
                        )}
                    </header>

                    <Form className={styles.formContent}>
                        <div className={styles.fieldsGrid}>
                            {fields.map((field) => {
                                if (field.name === "country") {
                                    return (
                                        <CountrySelect
                                            key={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                        />
                                    );
                                }

                                return (
                                    <InputUI
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        formik
                                    />
                                );
                            })}
                        </div>

                        {showTerms && (
                            <div className={styles.termsBlock}>
                                <label className={styles.termsLabel}>
                                    <Field type="checkbox" name="terms" className={styles.checkbox} />
                                    <span>
                                        I agree to the{" "}
                                        <a href="/terms-and-conditions" target="_blank">
                                            Terms & Conditions
                                        </a>
                                    </span>
                                </label>

                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isButtonDisabled}
                        >
                            {isSubmitting ? (
                                <span className={styles.spinner} />
                            ) : (
                                <>
                                    <span>{submitLabel}</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {variant === "auth" && (
                            <p className={styles.switchLink}>
                                Don't have an account?{" "}
                                <a href="/sign-up">Create one</a>
                            </p>
                        )}
                        {variant === "register" && (
                            <p className={styles.switchLink}>
                                Already have an account?{" "}
                                <a href="/sign-in">Sign in</a>
                            </p>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FormUI;
