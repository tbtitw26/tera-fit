"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./PromoFeatureCard.module.scss";
import { media } from "@/resources/media";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";

interface PromoFeatureCardProps {
    icon?: IconKey;
    title: string;
    description: string;
    actionText?: string;
    actionLink?: string;
    image: keyof typeof media;
    imagePosition?: "left" | "right";
}

const PromoFeatureCard: React.FC<PromoFeatureCardProps> = ({
                                                               icon,
                                                               title,
                                                               description,
                                                               actionText,
                                                               actionLink,
                                                               image,
                                                               imagePosition = "left",
                                                           }) => {
    const img = media[image];
    const Icon = icon ? ICONS[icon] : null;

    return (
        <div className={clsx(styles.card, styles[imagePosition])}>
            {/* IMAGE SECTION */}
            <div className={styles.imageContainer}>
                {img && (
                    <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 900px) 100vw, 300px"
                        className={styles.image}
                    />
                )}
                {/* Легкий оверлей для глибини */}
                <div className={styles.imageOverlay} />
            </div>

            {/* CONTENT SECTION */}
            <div className={styles.content}>
                <div className={styles.header}>
                    {Icon && (
                        <div className={styles.iconBox}>
                            <Icon />
                        </div>
                    )}
                    <h3 className={styles.title}>{title}</h3>
                </div>

                <p className={styles.description}>{description}</p>

                {actionText && actionLink && (
                    <Link href={actionLink} className={styles.actionButton}>
                        <span>{actionText}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PromoFeatureCard;