"use client";

import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { initialValues, validationSchema, sendJoinTeamRequest } from "./schema";
import styles from "./JoinTeamForm.module.scss";

import { FaUsers, FaClock } from "react-icons/fa";

export default function JoinTeamForm() {
    const { showAlert } = useAlert();
    const [success, setSuccess] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.shell}>
                {/* HEADER */}
                <motion.header
                    className={styles.header}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.kicker}>Coach Application</span>
                    <h2 className={styles.heading}>Join as a Fitness Trainer</h2>
                    <p className={styles.subheading}>
                        Share your coaching experience, specialties, and languages. We’ll review your application
                        and reach out with next steps.
                    </p>
                </motion.header>

                {/* MAIN */}
                <motion.div
                    className={styles.main}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {success ? (
                        <div className={styles.success}>
                            <div className={styles.successIcon}>✓</div>
                            <div className={styles.successText}>
                                <strong>Application sent.</strong>
                                <span>We’ll get back to you shortly.</span>
                            </div>
                        </div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                try {
                                    await sendJoinTeamRequest(values);
                                    resetForm();
                                    setSuccess(true);
                                    showAlert("Success", "Application sent", "success");
                                } catch {
                                    showAlert("Error", "Failed to send application", "error");
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ values, isSubmitting }) => (
                                <Form className={styles.form}>
                                    {/* SECTION: BASICS */}
                                    <div className={styles.block}>
                                        <div className={styles.blockHeader}>
                                            <h3>Basics</h3>
                                            <span className={styles.blockHint}>Contact & location</span>
                                        </div>

                                        <div className={styles.grid2}>
                                            <Field className={styles.input} name="firstName" placeholder="First name" />
                                            <Field className={styles.input} name="lastName" placeholder="Last name" />
                                        </div>

                                        <div className={styles.grid2}>
                                            <Field
                                                className={styles.input}
                                                name="email"
                                                type="email"
                                                placeholder="Coach email"
                                            />
                                            <Field
                                                className={styles.input}
                                                name="phone"
                                                placeholder="Phone / WhatsApp (optional)"
                                            />
                                        </div>

                                        <Field
                                            className={styles.input}
                                            name="country"
                                            placeholder="Country / Time zone"
                                        />
                                    </div>

                                    {/* SECTION: PROFILE */}
                                    <div className={styles.block}>
                                        <div className={styles.blockHeader}>
                                            <h3>Profile</h3>
                                            <span className={styles.blockHint}>Languages & specialties</span>
                                        </div>

                                        {/* Languages */}
                                        <FieldArray name="languages">
                                            {({ push, remove }) => (
                                                <div className={styles.builder}>
                                                    <div className={styles.builderTop}>
                                                        <label className={styles.builderLabel}>Languages you coach in</label>
                                                        <button
                                                            type="button"
                                                            className={styles.add}
                                                            onClick={() => push("")}
                                                        >
                                                            + Add
                                                        </button>
                                                    </div>

                                                    <div className={styles.builderList}>
                                                        {values.languages.map((_, i) => (
                                                            <div key={i} className={styles.builderRow}>
                                                                <Field
                                                                    className={styles.input}
                                                                    name={`languages.${i}`}
                                                                    placeholder="e.g. English, Ukrainian, Polish"
                                                                />
                                                                {values.languages.length > 1 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(i)}
                                                                        className={styles.remove}
                                                                        aria-label="Remove language"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </FieldArray>

                                        {/* Skills */}
                                        <FieldArray name="skills">
                                            {({ push, remove }) => (
                                                <div className={styles.builder}>
                                                    <div className={styles.builderTop}>
                                                        <label className={styles.builderLabel}>Coaching specialties</label>
                                                        <button
                                                            type="button"
                                                            className={styles.add}
                                                            onClick={() => push("")}
                                                        >
                                                            + Add
                                                        </button>
                                                    </div>

                                                    <div className={styles.builderList}>
                                                        {values.skills.map((_, i) => (
                                                            <div key={i} className={styles.builderRow}>
                                                                <Field
                                                                    className={styles.input}
                                                                    name={`skills.${i}`}
                                                                    placeholder="e.g. Strength, Hypertrophy, Fat loss, Mobility, Rehab"
                                                                />
                                                                {values.skills.length > 1 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(i)}
                                                                        className={styles.remove}
                                                                        aria-label="Remove skill"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className={styles.actions}>
                                        <ButtonUI
                                            type="submit"
                                            fullWidth
                                            loading={isSubmitting}
                                            text="Send application →"
                                            color="primary"
                                        />
                                        <span className={styles.policy}>
                      By submitting this form you agree to our Privacy Policy.
                    </span>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>

                {/* FOOTER INFO */}
                <motion.aside
                    className={styles.footerInfo}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.noteCard}>
                        <div className={styles.noteItem}>
                            <FaUsers />
                            <div>
                                <strong>Work remotely</strong>
                                <span>Coach athletes online worldwide</span>
                            </div>
                        </div>

                        <div className={styles.noteItem}>
                            <FaClock />
                            <div>
                                <strong>Flexible workload</strong>
                                <span>Choose how many athletes you take</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.smallPrint}>
                        We partner with coaches who value clarity, athlete safety, and measurable progress.
                    </p>
                </motion.aside>
            </div>
        </section>
    );
}