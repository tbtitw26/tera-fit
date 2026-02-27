"use client";

import React, { useState } from "react";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";
import styles from "./Dashboard.module.scss";

type TabKey = "orders" | "transactions";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<TabKey>("orders");

    return (
        <section className={styles.dashboard}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Activity</h2>
                    <p className={styles.subtitle}>Track your orders and token transactions.</p>
                </div>

                <nav className={styles.tabs} aria-label="Dashboard tabs">
                    <button
                        type="button"
                        className={activeTab === "orders" ? styles.tabActive : styles.tab}
                        onClick={() => setActiveTab("orders")}
                    >
                        Orders
                    </button>
                    <button
                        type="button"
                        className={activeTab === "transactions" ? styles.tabActive : styles.tab}
                        onClick={() => setActiveTab("transactions")}
                    >
                        Transactions
                    </button>
                </nav>
            </div>

            <div className={styles.content}>{activeTab === "orders" ? <AllOrders /> : <TransactionHistory />}</div>
        </section>
    );
}