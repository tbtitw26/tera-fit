"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "./InfoBlock.module.scss";
import {media} from "@/resources/media";
import {renderIcon} from "@/utils/renderIcon";
import {IconKey} from "@/resources/icons";
import Link from "next/link";

// Проста галочка для списку (bullets)
const CheckIcon = () => (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface InfoBlockProps {
    title: string;
    description?: string; // Курсивний підзаголовок

    // Медіа
    image?: keyof typeof media;
    icon?: IconKey | string | React.ReactNode; // Тепер підтримує ваші IconKey

    bullets?: string[];

    // Дизайн
    variant?: "light" | "dark";
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
                                                 title,
                                                 description,
                                                 image,
                                                 icon,
                                                 bullets,
                                                 variant = "light",
                                                 badge,
                                                 buttonText,
                                                 buttonLink
                                             }) => {
    const imageSrc = image ? media[image] : null;

    return (
        <motion.div
            className={`${styles.infoBlock} ${styles[variant]} ${imageSrc ? styles.hasImage : ''}`}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
        >
            {/* Рендер великого фото (якщо передано) */}
            {imageSrc && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}

            <div className={styles.content}>

                {/* Рендер фонової іконки справа зверху (якщо немає фото) */}
                {!imageSrc && icon && (
                    <div className={styles.backgroundIcon}>
                        {renderIcon(icon)}
                    </div>
                )}

                <div className={styles.header}>
                    <div className={styles.titleRow}>
                        <h3 className={styles.title}>{title}</h3>
                        {badge && <span className={styles.badge}>{badge}</span>}
                    </div>
                    {description && (
                        <p className={styles.description}>{description}</p>
                    )}
                </div>

                {bullets && (
                    <ul className={styles.bullets}>
                        {bullets.map((item, i) => (
                            <li key={i}>
                                <span className={styles.checkWrapper}>
                                    <CheckIcon/>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {buttonText && buttonLink && (
                    <Link href={buttonLink}>
                        <button className={styles.actionButton}>
                            {buttonText}
                        </button>
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export default InfoBlock;