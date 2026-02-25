"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./TeamGrid.module.scss";
import { media } from "@/resources/media";
import ButtonUI from "@/components/ui/button/ButtonUI";

interface TeamMember {
    name: string;
    role: string;
    image: keyof typeof media;
}

interface TeamGridProps {
    title?: string;
    description?: string;
    members: TeamMember[];
    viewAllText?: string;
    viewAllLink?: string;
}

const TeamGrid: React.FC<TeamGridProps> = ({
                                               title,
                                               description,
                                               members,
                                               viewAllText = "View all chefs",
                                               viewAllLink = "/extra/chefs",
                                           }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleStack}>
                        {title && <h2 className={styles.mainTitle}>{title}</h2>}
                        {description && <p className={styles.subTitle}>{description}</p>}
                    </div>

                    {viewAllLink && (
                        <Link href={viewAllLink} passHref legacyBehavior>
                            <ButtonUI
                                variant="solid"
                                color="primary"
                                shape="default"
                                size="md"
                                hoverEffect="scale"
                            >
                                {viewAllText}
                            </ButtonUI>
                        </Link>
                    )}
                </div>

                <div className={styles.gallery}>
                    {members.map((m, i) => {
                        const img = media[m.image] as StaticImageData;

                        return (
                            <motion.div
                                key={`${m.name}-${i}`}
                                className={styles.memberCard}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={img}
                                        alt={m.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={styles.chefImage}
                                    />
                                    <div className={styles.overlay}>
                                        <div className={styles.glassInfo}>
                                            <span className={styles.chefRole}>{m.role}</span>
                                            <h3 className={styles.chefName}>{m.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;