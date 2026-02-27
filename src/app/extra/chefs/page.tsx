"use client";

import { useMemo, useState } from "react";
import ExpertCard from "@/components/extra/experts/expert-card/Card";
import { experts } from "@/data/experts";
import ExpertsFilterBar from "@/components/extra/experts/expert-filter-bar/ExpertFilterBar";
import HeroSection from "@/components/constructor/hero/Hero";
import styles from "./ChefsPage.module.scss";

export default function Page() {
    const [search, setSearch] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [level, setLevel] = useState("");
    const [rating, setRating] = useState(""); // окремий стан рейтингу

    const specialties = useMemo(() => {
        return Array.from(new Set(experts.flatMap((e) => e.specialties))).sort();
    }, []);

    const filteredExperts = useMemo(() => {
        return experts.filter((e) => {
            const byName =
                e.fullName.toLowerCase().includes(search.toLowerCase()) ||
                e.specialties.some((s) =>
                    s.toLowerCase().includes(search.toLowerCase())
                );

            const bySpecialty = !specialty || e.specialties.includes(specialty);

            const byLevel = !level || e.experienceLevel === level;

            const byRating =
                !rating ||
                (rating === "4.5" && e.rating >= 4.5) ||
                (rating === "4.0" && e.rating >= 4.0);

            return byName && bySpecialty && byLevel && byRating;
        });
    }, [search, specialty, level, rating]);

    return (
        <>
            <HeroSection
                title={
                    <>
                        Find your <span>personal trainer</span> and reach your goals
                    </>
                }
                description="Browse professional trainers by specialty, experience level, and rating. Learn directly from experts who match your fitness goals."
                image="image7"
            />

            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <ExpertsFilterBar
                        search={search}
                        onSearchChange={setSearch}
                        specialty={specialty}
                        onSpecialtyChange={setSpecialty}
                        level={level}
                        onLevelChange={setLevel}
                        rating={rating}             // передали рейтинг
                        onRatingChange={setRating}  // передали функцію
                        specialties={specialties}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.grid}>
                        {filteredExperts.map((expert) => (
                            <ExpertCard key={expert.id} expert={expert} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}