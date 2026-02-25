"use client";

import Image from "next/image";
import { Expert } from "@/types/expert";
import { media } from "@/resources/media";
import styles from "./ExpertProfile.module.scss";

type Props = {
    expert: Expert;
};

export default function ExpertProfile({ expert }: Props) {
    const img = media[expert.avatar];

    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerMain}>
                        <p className={styles.kicker}>Coach profile</p>
                        <h1 className={styles.title}>{expert.fullName}</h1>
                        <p className={styles.subtitle}>{expert.subtitle}</p>
                        <p className={styles.bio}>{expert.bio}</p>

                        <div className={styles.pills}>
                            {expert.categories.map((c) => (
                                <span key={c} className={styles.pill}>{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.headerMedia}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src={img}
                                alt={expert.fullName}
                                fill
                                priority
                                className={styles.avatar}
                            />
                        </div>
                    </div>
                </header>

                <div className={styles.layout}>
                    {/* LEFT: STICKY META */}
                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h2 className={styles.cardTitle}>Overview</h2>

                            <dl className={styles.meta}>
                                <div className={styles.metaRow}>
                                    <dt>Rating</dt>
                                    <dd>{expert.rating.toFixed(1)}/5</dd>
                                </div>
                                <div className={styles.metaRow}>
                                    <dt>Experience</dt>
                                    <dd>{expert.experience}</dd>
                                </div>
                                <div className={styles.metaRow}>
                                    <dt>Education</dt>
                                    <dd>{expert.education}</dd>
                                </div>
                                <div className={styles.metaRow}>
                                    <dt>Level</dt>
                                    <dd>
                                        <span className={styles.level}>
                                            {expert.experienceLevel.toUpperCase()}
                                        </span>
                                    </dd>
                                </div>
                                <div className={styles.metaRow}>
                                    <dt>Programs</dt>
                                    <dd>{expert.itemsCount}</dd>
                                </div>
                                <div className={styles.metaRow}>
                                    <dt>Slug</dt>
                                    <dd className={styles.mono}>{expert.slug}</dd>
                                </div>
                            </dl>

                            <div className={styles.divider} />

                            <h3 className={styles.sectionTitle}>Specialties</h3>
                            <div className={styles.tags}>
                                {expert.specialties.map((s) => (
                                    <span key={s} className={styles.tag}>{s}</span>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT: DETAILS */}
                    <main className={styles.content}>
                        <section className={styles.block}>
                            <h2 className={styles.blockTitle}>{expert.profile.headline}</h2>
                        </section>

                        <section className={styles.block}>
                            <h3 className={styles.sectionTitle}>About</h3>
                            <div className={styles.prose}>
                                {expert.profile.about.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                            </div>
                        </section>

                        <section className={styles.block}>
                            <h3 className={styles.sectionTitle}>Philosophy</h3>
                            <blockquote className={styles.quote}>{expert.profile.philosophy}</blockquote>
                        </section>

                        <section className={styles.block}>
                            <h3 className={styles.sectionTitle}>Achievements</h3>
                            <ul className={styles.list}>
                                {expert.profile.achievements.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </section>
    );
}