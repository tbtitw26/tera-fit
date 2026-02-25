"use client";

import styles from "./ExpertFilterBar.module.scss";

type Props = {
    search: string;
    onSearchChange: (v: string) => void;
    specialty: string;
    onSpecialtyChange: (v: string) => void;
    level: string;
    onLevelChange: (v: string) => void;
    rating: string; // додано
    onRatingChange: (v: string) => void; // додано
    specialties: string[];
};

export default function ExpertsFilterBar({
                                             search,
                                             onSearchChange,
                                             specialty,
                                             onSpecialtyChange,
                                             level,
                                             onLevelChange,
                                             rating,           // додано
                                             onRatingChange,   // додано
                                             specialties,
                                         }: Props) {
    return (
        <aside className={styles.sidebar}>
            <h3 className={styles.title}>Filters</h3>

            {/* SEARCH */}
            <div className={styles.section}>
                <p className={styles.label}>Search Name</p>
                <input
                    className={styles.search}
                    placeholder="Search trainers..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            {/* SPECIALITY */}
            <div className={styles.section}>
                <p className={styles.label}>Specialty</p>
                <div className={styles.checkboxGroup}>
                    <label>
                        <input
                            type="checkbox"
                            checked={!specialty}
                            onChange={() => onSpecialtyChange("")}
                        />
                        All Trainers
                    </label>
                    {specialties.map((s) => (
                        <label key={s}>
                            <input
                                type="checkbox"
                                checked={specialty === s}
                                onChange={() => onSpecialtyChange(s)}
                            />
                            {s}
                        </label>
                    ))}
                </div>
            </div>

            {/* LEVEL */}
            <div className={styles.section}>
                <p className={styles.label}>Experience Level</p>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="level"
                            checked={!level}
                            onChange={() => onLevelChange("")}
                        />
                        All Levels
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="level"
                            checked={level === "beginner"}
                            onChange={() => onLevelChange("beginner")}
                        />
                        Beginner
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="level"
                            checked={level === "intermediate"}
                            onChange={() => onLevelChange("intermediate")}
                        />
                        Intermediate
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="level"
                            checked={level === "advanced"}
                            onChange={() => onLevelChange("advanced")}
                        />
                        Advanced
                    </label>
                </div>
            </div>

            {/* RATING */}
            <div className={styles.section}>
                <p className={styles.label}>Rating</p>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            checked={!rating}
                            onChange={() => onRatingChange("")}
                        />
                        All Ratings
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            checked={rating === "4.5"}
                            onChange={() => onRatingChange("4.5")}
                        />
                        4.5 & Above
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            checked={rating === "4.0"}
                            onChange={() => onRatingChange("4.0")}
                        />
                        4.0 & Above
                    </label>
                </div>
            </div>
        </aside>
    );
}