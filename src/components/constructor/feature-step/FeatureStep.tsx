"use client";

import React from "react";
import styles from "./FeatureStep.module.scss";
import Image from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media } from "@/resources/media";
import { IoIosArrowRoundForward } from "react-icons/io";

interface FeatureStepProps {
    step: number;
    title: string;
    description?: string;
    bullets?: string[];
    image: keyof typeof media;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    imagePosition?: "left" | "right";
}

const FeatureStep: React.FC<FeatureStepProps> = ({
                                                     step,
                                                     title,
                                                     description,
                                                     bullets,
                                                     image,
                                                     badge,
                                                     buttonText,
                                                     buttonLink,
                                                     imagePosition = "left",
                                                 }) => {
    return (
        <article className={styles.card}>
            <div
                className={`${styles.contentRow} ${
                    imagePosition === "right" ? styles.right : ""
                }`}
            >
                <div className={styles.media}>
                    {badge && <span className={styles.badge}>{badge}</span>}
                    <Image
                        src={media[image]}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.stepPill}>
                        <span className={styles.stepLabel}>Step</span>
                        <span className={styles.stepNumber}>{String(step).padStart(2, "0")}</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h3 className={styles.title}>{title}</h3>
                        {description && <p className={styles.description}>{description}</p>}

                        {bullets && (
                            <ul className={styles.list}>
                                {bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        )}

                        {buttonText && buttonLink && (
                            <ButtonUI
                                variant="plain"
                                shape="default"
                                hoverEffect="none"
                                hoverColor="none"
                                endIcon={<IoIosArrowRoundForward style={{ fontSize: 28 }} />}
                                onClick={() => (window.location.href = buttonLink)}
                            >
                                {buttonText}
                            </ButtonUI>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FeatureStep;