"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import styles from "./BalanceCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";

export default function BalanceCard() {
    const user = useUser();

    if (!user) return null;

    const balanceEur = (user.tokens / 100).toFixed(2);

    return (
        <section className={styles.card}>
            <div className={styles.top}>
                <p className={styles.label}>YOUR BALANCE</p>
                <div className={styles.badge}>Available</div>
            </div>

            <div className={styles.amountRow}>
                <h3 className={styles.amount}>€{balanceEur}</h3>
            </div>

            <p className={styles.desc}>Use your balance to order specialist-made training programs.</p>

            <div className={styles.actions}>
                <Link href="/pricing">
                    <ButtonUI variant="solid" color="primary" size="lg">
                        Top up
                    </ButtonUI>
                </Link>
                <div className={styles.hint}>Instantly applied to your account.</div>
            </div>

            <div className={styles.icon} aria-hidden>
                €
            </div>
        </section>
    );
}
