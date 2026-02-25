"use client";

import React from "react";
import styles from "./HowItWorksSection.module.scss";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";
import { motion } from "framer-motion";

interface Step {
    icon?: IconKey;
    title?: string;
    description?: string;
}

interface Highlight {
    title: string;
    description?: string;
}

interface HowItWorksSectionProps {
    label?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    steps?: Step[];
    highlights?: Highlight[];
    note?: React.ReactNode;
}

export default function HowItWorksSection({
                                              label,
                                              title,
                                              description,
                                              steps,
                                              highlights,
                                              note,
                                          }: HowItWorksSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    {label && <span className={styles.label}>{label}</span>}
                    {title && <h2 className={styles.title}>{title}</h2>}
                    {description && <div className={styles.description}>{description}</div>}

                    {highlights?.length && (
                        <div className={styles.highlightsContainer}>
                            {highlights.map((item, i) => (
                                <div key={i} className={styles.highlightItem}>
                                    <div className={styles.checkIcon}>✓</div>
                                    <div className={styles.highlightText}>
                                        <strong>{item.title}</strong>
                                        {item.description && <p>{item.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.right}>
                    <div className={styles.processCard}>
                        {steps?.map((step, i) => {
                            const Icon = step.icon ? ICONS[step.icon] : null;
                            return (
                                <motion.div
                                    key={i}
                                    className={styles.stepRow}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.iconColumn}>
                                        <div className={styles.iconCircle}>
                                            {Icon ? <Icon /> : <span>{i + 1}</span>}
                                        </div>
                                        {i !== steps.length - 1 && <div className={styles.connectorLine} />}
                                    </div>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTag}>Step 0{i + 1}</span>
                                        <h4 className={styles.stepTitle}>{step.title}</h4>
                                        <p className={styles.stepDescription}>{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {note && (
                            <div className={styles.modernNote}>
                                <div className={styles.noteIndicator} />
                                <p>{note}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}