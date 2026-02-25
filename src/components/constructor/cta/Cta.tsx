"use client";
import React from "react";
import styles from "./Cta.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";

interface MissionBannerProps {
    title: string;
    description: string;
    buttonText?: string;
    link?: string;
}

const Cta: React.FC<MissionBannerProps> = ({
                                                         title,
                                                         description,
                                                         buttonText = "Claim Free Tokens",
                                                         link="/",
                                                     }) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>

                <Link href={link} >
                    <ButtonUI size="lg" color="tertiary" textColor="primary" hoverColor="tertiary">
                        {buttonText}
                    </ButtonUI>
                </Link>
            </div>
        </section>
    );
};

export default Cta;