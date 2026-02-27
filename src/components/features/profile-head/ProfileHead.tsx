"use client";

import {FaUserCircle} from "react-icons/fa";
import {useUser} from "@/context/UserContext";
import styles from "./ProfileHead.module.scss";
import {LogoutButton} from "@/components/ui/logout-button/LogoutButton";

const ProfileHead = () => {
    const user = useUser();

    const createdDate = user?.createdAt
        ? new Date(user.createdAt).toISOString().split('T')[0]
        : null;

    const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ') || "User";

    return (
        <header className={styles.card}>
            <div className={styles.left}>
                <div className={styles.avatarWrap} aria-hidden>
                    <FaUserCircle className={styles.avatarIcon}/>
                </div>

                <div className={styles.meta}>
                    <div className={styles.titleRow}>
                        <h1 className={styles.title}>{fullName}</h1>
                        <span className={styles.pill}>Profile</span>
                    </div>

                    <div className={styles.subRows}>
                        <div className={styles.subRow}>
                            <span className={styles.subLabel}>Member since</span>
                            <span className={styles.subValue}>{createdDate ?? "—"}</span>
                        </div>
                        <div className={styles.subRow}>
                            <span className={styles.subLabel}>Email</span>
                            <span className={styles.subValue}>{user?.email ?? "—"}</span>
                        </div>
                        <div className={styles.subRow}>
                            <span className={styles.subLabel}>Location</span>
                            <span className={styles.subValue}>
                                {[user?.address?.country, user?.address?.city].filter(Boolean).join(", ") || "—"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <LogoutButton/>
            </div>
        </header>
    );
};

export default ProfileHead;
