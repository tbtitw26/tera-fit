"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./AllOrders.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import { downloadUniversalPDF } from "@/pdf-creator/PdfCreator";
import { UniversalOrderUI } from "@/types/universal-order";

const AllOrders: React.FC = () => {
    const { aiOrders, loading, refreshOrders } = useAllOrders();
    const { sign, convertFromBase } = useCurrency();
    const orders = aiOrders as unknown as UniversalOrderUI[];

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    const formatId = (id: string) => id.slice(-6);

    const handleDownload = async (order: UniversalOrderUI) => {
        try {
            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                await downloadUniversalPDF(order as any);
                return;
            }

            const res = await fetch(`/api/universal/get-order?id=${order._id}`);
            const data = await res.json();

            if (data?.order) {
                await downloadUniversalPDF(data.order);
            }
        } catch (e) {
            console.error("❌ Download error", e);
        }
    };

    if (loading) {
        return <p className={styles.loading}>Loading orders…</p>;
    }

    if (orders.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No orders yet.</p>
                <Link href="/dashboard">
                    <ButtonUI size="md" color="primary">
                        Create your first order
                    </ButtonUI>
                </Link>
            </div>
        );
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div>
                    <h3>Your Orders</h3>
                    <p>Generated content and downloads</p>
                </div>

                <ButtonUI size="sm" onClick={refreshOrders}>
                    Refresh
                </ButtonUI>
            </header>

            <div className={styles.table}>
                {/* TABLE HEAD */}
                <div className={styles.head}>
                    <span>ID</span>
                    <span>Email</span>
                    <span>Date</span>
                    <span>Cost</span>
                    <span>Status</span>
                    <span className={styles.actionsHead}>Actions</span>
                </div>

                {/* TABLE ROWS */}
                {orders.map((order) => (
                    <div className={styles.row} key={order._id}>
                        <span className={styles.id}>
                            #{formatId(order._id)}
                        </span>

                        <span className={styles.email}>
                            {order.email}
                        </span>

                        <span className={styles.date}>
                            {formatDate(order.createdAt)}
                        </span>

                        <span className={styles.tokens}>
                            -{sign}{convertFromBase(order.totalTokens / 100).toFixed(2)}
                        </span>

                        <span className={order.status === "ready" ? styles.statusReady : styles.statusPending}>
                            {order.status === "ready"
                                ? "Ready"
                                : order.readyAt && new Date(order.readyAt).getTime() > Date.now()
                                    ? `~${Math.ceil((new Date(order.readyAt).getTime() - Date.now()) / 3600000)}h left`
                                    : "Processing"
                            }
                        </span>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={styles.download}
                                disabled={order.status !== "ready"}
                                onClick={() => handleDownload(order)}
                            >
                                {order.status === "ready" ? "Download" : "Pending"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllOrders;