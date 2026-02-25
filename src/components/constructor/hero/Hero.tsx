"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media } from "@/resources/media";
import {COMPANY_NAME} from "@/resources/constants";

interface HeroSectionProps {
    title: React.ReactNode;
    description?: string;

    primaryCta?: {
        text: string;
        link: string;
    };

    secondaryCta?: {
        text: string;
        link: string;
    };

    image: keyof typeof media;

    badge?: {
        label: string;
        title: string;
    };

    features?: boolean;
}

export default function HeroSection({
                                        title,
                                        description,
                                        primaryCta,
                                        secondaryCta,
                                        image,
                                        badge,
                                        features = true
                                    }: HeroSectionProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const selectedMedia = media[image];

    const isVideo = useMemo(() => {
        if (typeof selectedMedia === "string") {
            return selectedMedia.endsWith(".mp4");
        }
        return false;
    }, [selectedMedia]);

    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setPlaying(true);
    };

    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>{title}</h1>

                    {description && (
                        <p className={styles.description}>{description}</p>
                    )}

                    {(primaryCta || secondaryCta) && (
                        <div className={styles.actions}>
                            {primaryCta && (
                                <Link href={primaryCta.link}>
                                    <ButtonUI size="lg">
                                        {primaryCta.text}
                                    </ButtonUI>
                                </Link>
                            )}

                            {secondaryCta && (
                                <Link href={secondaryCta.link}>
                                    <ButtonUI variant="outlined" size="lg" hoverColor="none">
                                        {secondaryCta.text}
                                    </ButtonUI>
                                </Link>
                            )}
                        </div>
                    )}

                    {features && (
                        <div className={styles.socialProof}>
                            <div className={styles.avatars}>
                                <img src={media.team1.src} alt="user1" />
                                <img src={media.team2.src} alt="user2" />
                                <img src={media.team3.src} alt="user3" />
                                <img src={media.team4.src} alt="user4" />
                                <img src={media.team5.src} alt="user5" />
                            </div>

                            <div className={styles.proofText}>
                                <strong>1,000+ athletes</strong>
                                <span> already training smarter with {COMPANY_NAME}</span>
                            </div>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    className={styles.mediaCard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {!isVideo && (
                        <Image
                            src={selectedMedia as StaticImageData}
                            alt="Hero media"
                            fill
                            priority
                            className={styles.media}
                        />
                    )}

                    {isVideo && (
                        <>
                            <video
                                ref={videoRef}
                                className={styles.media}
                                playsInline
                                preload="metadata"
                            >

                            <source src={selectedMedia as string} type="video/mp4" />
                            </video>

                            {!playing && (
                                <button
                                    className={styles.playButton}
                                    onClick={handlePlay}
                                >
                                    ▶
                                </button>
                            )}
                        </>
                    )}

                    {badge && (
                        <div className={styles.overlay}>
                            <div className={styles.badgeContent}>
                <span className={styles.badgeLabel}>
                  {badge.label}
                </span>
                                <span className={styles.badgeTitle}>
                  {badge.title}
                </span>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}