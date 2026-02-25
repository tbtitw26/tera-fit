"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./MissionBanner.module.scss";
import { media } from "@/resources/media";
import { renderIcon } from "@/utils/renderIcon";
import { IconKey } from "@/resources/icons";

interface MissionCardData {
    icon: IconKey | string;
    title: string;
    description: string;
}

interface MissionBannerProps {
    cards: readonly MissionCardData[];
    image: keyof typeof media;
}

const MissionBanner: React.FC<MissionBannerProps> = ({ cards, image }) => {
    const imageSrc = media[image];

    return (
        <section className={styles.container}>
            <div className={styles.contentSide}>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper}>
                            {renderIcon(card.icon)}
                        </div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className={styles.imageSide}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Тепер Image рендериться без абсолютного позиціювання */}
                <Image
                    src={imageSrc}
                    alt="Mission Image"
                    className={styles.mainImage}
                    width={600} // Базові розміри для Next.js
                    height={500}
                    style={{ height: 'auto' }} // Щоб зберігати пропорції
                />
            </motion.div>
        </section>
    );
};

export default MissionBanner;