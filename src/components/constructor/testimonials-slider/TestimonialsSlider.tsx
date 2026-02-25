"use client";

import React, { useState } from "react";
import styles from "./TestimonialsSlider.module.scss";
import Image from "next/image";
import { media } from "@/resources/media";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { PiStarFill } from "react-icons/pi";

interface Testimonial {
    name: string;
    image: keyof typeof media;
    text: string;
    rating?: number;
}

interface Props {
    label?: string;
    title: string;
    description?: string;
    testimonials: Testimonial[];
}

// Окремий компонент для рендерингу зірок з підтримкою дробових значень
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className={styles.stars}>
            {[...Array(5)].map((_, idx) => {
                // Вираховуємо рівень заповнення конкретної зірки (від 0 до 1)
                const fillLevel = Math.max(0, Math.min(1, rating - idx));

                return (
                    <div key={idx} className={styles.starWrapper}>
                        {/* Фонова порожня зірка */}
                        <PiStarFill className={styles.star} />

                        {/* Активна зірка, що накладається зверху з обрізкою по ширині */}
                        <div
                            className={styles.starFilledWrapper}
                            style={{ width: `${fillLevel * 100}%` }}
                        >
                            <PiStarFill className={styles.starActive} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default function TestimonialsSlider({
                                               label,
                                               title,
                                               description,
                                               testimonials,
                                           }: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {label && <span className={styles.label}>{label}</span>}
                    <h2 className={styles.title}>{title}</h2>
                    {description && <p className={styles.description}>{description}</p>}
                </div>

                <div className={styles.gridWrapper}>
                    <div className={`${styles.grid} ${!expanded ? styles.collapsed : ""}`}>
                        {testimonials.map((item, i) => {
                            const img = media[item.image] as StaticImageData;
                            const rating = item.rating ?? 5;

                            return (
                                <motion.div
                                    key={i}
                                    className={styles.card}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.cardHeader}>
                                        <StarRating rating={rating} />
                                        <span className={styles.verified}>
                                            Verified Student
                                        </span>
                                    </div>

                                    <p className={styles.quote}>“{item.text}”</p>

                                    <div className={styles.userInfo}>
                                        <div className={styles.avatarWrap}>
                                            <Image
                                                src={img}
                                                alt={item.name}
                                                fill
                                                className={styles.avatar}
                                            />
                                        </div>
                                        <div className={styles.userMeta}>
                                            <span className={styles.userName}>
                                                {item.name}
                                            </span>
                                            <span className={styles.userStatus}>
                                                Completed 5+ Courses
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {!expanded && <div className={styles.fadeOverlay} />}
                </div>

                <div className={styles.buttonWrap}>
                    <button
                        className={styles.showMoreBtn}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Show less" : "Show more"}
                    </button>
                </div>
            </div>
        </section>
    );
}