"use client";

import React from "react";
import ProfileHead from "@/components/features/profile-head/ProfileHead";
import BalanceCard from "@/components/features/balance-card/BalanceCard";
import Dashboard from "@/components/features/dashboard/Dashboard";
import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <section className={styles.topSection}>
                <div className={styles.topGrid}>
                    <ProfileHead />
                    <BalanceCard />
                </div>
            </section>

            <section className={styles.dashboardSection}>
                <Dashboard />
            </section>
        </div>
    );
};

export default Profile;
