"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PromoSection.module.scss";
import { media } from "@/resources/media";
import {underline} from "next/dist/lib/picocolors";

interface PromoSectionProps {
    eyebrow?: string;
    title: string;
    highlight?: string;
    description?: string;
    image?: keyof typeof media
    imageText?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
                                                         eyebrow,
                                                         title,
                                                         highlight,
                                                         description,
                                                         image,
                                                         imageText,
                                                     }) => {
    const imageSrc = image ? media[image] : null;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {title}{" "}
                    {highlight && (
                        <span className={styles.highlight}>{highlight}</span>
                    )}
                </motion.h2>

                {description && (
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>
                )}

                {image && (
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />

                        {imageText && (
                            <div className={styles.imageOverlay}>
                                {imageText}
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default PromoSection;