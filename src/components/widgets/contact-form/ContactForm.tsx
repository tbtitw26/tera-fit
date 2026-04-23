"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { validationSchema, initialValues, sendContactRequest } from "./schema";

import { FaBuilding, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";
import styles from "./ContactForm.module.scss";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message?: string;
}

const ContactSupport: React.FC = () => {
    const { showAlert } = useAlert();
    const [successMsg, setSuccessMsg] = useState("");
    const companyName = COMPANY_NAME || "Tera Fit";

    const handleSubmit = async (
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
    ) => {
        try {
            const payload = {
                ...values,
                phone: values.phone.replace(/\D/g, ""),
            };

            await sendContactRequest(payload);
            resetForm();
            setSuccessMsg(
                "Your message has been sent. Our team will get back to you shortly."
            );
            showAlert("Success", "Message sent successfully", "success");
        } catch {
            showAlert("Error", "Something went wrong. Try again.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                {/* LEFT */}
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>Contact Details</span>

                    <h2>
                        Contact {companyName}
                    </h2>

                    <p>
                        Find the main company information below or send us a message
                        and our support team will respond during business hours.
                    </p>

                    <div className={styles.extra}>
                        <strong>Company information</strong>

                        {COMPANY_LEGAL_NAME && (
                            <div className={styles.contactItem}>
                                <FaBuilding />
                                <span>{COMPANY_LEGAL_NAME}</span>
                            </div>
                        )}

                        {COMPANY_NUMBER && (
                            <div className={styles.contactItem}>
                                <FaBuilding />
                                <span>Company number: {COMPANY_NUMBER}</span>
                            </div>
                        )}

                        {COMPANY_ADDRESS && (
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt />
                                <span>{COMPANY_ADDRESS}</span>
                            </div>
                        )}

                        {COMPANY_EMAIL && (
                            <div className={styles.contactItem}>
                                <FaEnvelope />
                                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                            </div>
                        )}

                        {COMPANY_PHONE && (
                            <div className={styles.contactItem}>
                                <FaPhoneAlt />
                                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>{COMPANY_PHONE}</a>
                            </div>
                        )}

                        <div className={styles.contactItem}>
                            <FaClock />
                            <span>Business hours: Monday to Friday, 9:00-18:00</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {successMsg ? (
                        <div className={styles.success}>{successMsg}</div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            validateOnBlur
                            validateOnChange
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, isValid }) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <Field name="name" placeholder="First name" />
                                            <ErrorMessage name="name" component="div" className={styles.error} />
                                        </div>

                                        <div className={styles.field}>
                                            <Field name="secondName" placeholder="Second name" />
                                            <ErrorMessage name="secondName" component="div" className={styles.error} />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="email" type="email" placeholder="Email address" />
                                        <ErrorMessage name="email" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="phone" type="tel" placeholder="+380 67 123 45 67" />
                                        <ErrorMessage name="phone" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Tell us how we can help you today..."
                                            rows={5}
                                        />
                                        <ErrorMessage name="message" component="div" className={styles.error} />
                                    </div>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        disabled={!isValid || isSubmitting}
                                        text="Send Message →"
                                        color="primary"
                                    />

                                    <span className={styles.policy}>
                    By submitting this form, you agree to our <b>Privacy Policy</b>.
                  </span>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSupport;
