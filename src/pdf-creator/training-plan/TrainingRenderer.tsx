"use client";

import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import { trainingTheme as styles } from "./trainingTheme";

/* ================= CLEANERS ================= */

function cleanText(raw?: string) {
    if (!raw) return "";

    return String(raw)
        .normalize("NFKC")
        .replace(/\uFEFF/g, "")
        .replace(/�/g, "")
        .replace(/\u00AD/g, "")
        .replace(/\u200B/g, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/^---$/gm, "")
        .replace(/^=h$/gm, "")
        .replace(/•/g, "-")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function preprocessLists(text: string) {
    return text
        .replace(/:\s*-\s+/g, ":\n- ")
        .replace(/\.\s*-\s+/g, ".\n- ");
}

/* ================= INLINE MARKDOWN ================= */

function renderInlineMarkdown(text: string) {
    if (!/\*\*/.test(text)) return text;

    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text))) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
            <Text key={parts.length} style={styles.boldInline}>
                {match[1]}
            </Text>
        );
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
}

/* ================= PARSER ================= */

type Block =
    | { type: "h"; level: 1 | 2 | 3; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] };

function parseBlocks(raw: string): Block[] {
    const prepared = preprocessLists(cleanText(raw));
    const lines = prepared.split(/\r?\n/);
    const blocks: Block[] = [];

    let i = 0;

    while (i < lines.length) {
        const current = lines[i].trim();

        if (!current) {
            i++;
            continue;
        }

        // HEADINGS
        const heading = current.match(/^(#{1,3})\s*(.+)$/);
        if (heading) {
            blocks.push({
                type: "h",
                level: heading[1].length as 1 | 2 | 3,
                text: heading[2],
            });
            i++;
            continue;
        }

        // BULLET LIST
        if (/^- /.test(current)) {
            const items: string[] = [];

            while (i < lines.length && lines[i].trim().startsWith("- ")) {
                items.push(lines[i].trim().slice(2));
                i++;
            }

            blocks.push({ type: "ul", items });
            continue;
        }

        // PARAGRAPH
        const paragraph: string[] = [current];
        i++;

        while (
            i < lines.length &&
            lines[i].trim() &&
            !lines[i].trim().startsWith("#") &&
            !lines[i].trim().startsWith("- ")
            ) {
            paragraph.push(lines[i].trim());
            i++;
        }

        blocks.push({ type: "p", text: paragraph.join(" ") });
    }

    return blocks;
}

function renderContent(text: string) {
    return parseBlocks(text).map((block, idx) => {
        if (block.type === "h") {
            return (
                <Text key={`h-${idx}`} style={styles.sectionTitle}>
                    {block.text}
                </Text>
            );
        }

        if (block.type === "p") {
            return (
                <Text key={`p-${idx}`} style={styles.paragraph}>
                    {renderInlineMarkdown(block.text)}
                </Text>
            );
        }

        if (block.type === "ul") {
            return (
                <View key={`ul-${idx}`} style={styles.list}>
                    {block.items.map((item, i) => (
                        <Text key={`li-${idx}-${i}`} style={styles.bulletItem}>
                            • {renderInlineMarkdown(item)}
                        </Text>
                    ))}
                </View>
            );
        }

        return null;
    });
}

/* ================= HELPERS ================= */

function titleCase(val?: string) {
    if (!val) return "";
    return val
        .split(/[_\s]+/g)
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

function formatFocusAreas(focusAreas: unknown) {
    if (!Array.isArray(focusAreas)) return "";
    return focusAreas.filter(Boolean).join(", ");
}

function humanizeKey(key: string) {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .trim();
}

/* ================= MAIN PDF ================= */

export function renderTrainingPDF(order: UniversalOrderType) {
    const { fields, response, extrasData = {} } = order;

    const isExpert = fields?.deliveryMode === "expert";

    const goal = titleCase(fields?.goal);
    const experience = titleCase(fields?.experience);
    const durationWeeks = fields?.durationWeeks ?? "";
    const coach = fields?.coach ? String(fields.coach) : "";
    const limitations = fields?.limitations ? String(fields.limitations) : "";
    const focusAreas = formatFocusAreas(fields?.focusAreas);

    const schedule = fields?.schedule ?? {};
    const daysPerWeek = schedule?.daysPerWeek ?? "";
    const sessionMinutes = schedule?.sessionMinutes ?? "";
    const equipment = titleCase(schedule?.equipment);

    // “Coach Notes” — під твої дані найкраще підходить warmupCooldown
    const coachNotes =
        (extrasData as any)?.coachNotes ||
        (extrasData as any)?.warmupCooldown ||
        "";

    // які extrasData показувати окремими секціями (крім coachNotes)
    const extraEntries = Object.entries(extrasData).filter(([k]) => {
        const key = String(k);
        if (key === "coachNotes") return false;
        if (key === "warmupCooldown") return false; // щоб не дублювати, бо йде в coachNotes
        return true;
    });

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>🏋️ Training Plan</Text>
                    <Text style={styles.meta}>
                        Goal: {goal || "—"} • Level: {experience || "—"} • Duration:{" "}
                        {durationWeeks ? `${durationWeeks} weeks` : "—"}
                        {coach ? ` • Coach: ${coach}` : ""}
                    </Text>

                    <View style={styles.chipsRow}>
                        <Text style={styles.chip}>Days/Week: {daysPerWeek || "—"}</Text>
                        <Text style={styles.chip}>Session: {sessionMinutes ? `${sessionMinutes} min` : "—"}</Text>
                        <Text style={styles.chip}>Equipment: {equipment || "—"}</Text>
                        {focusAreas ? <Text style={styles.chip}>Focus: {focusAreas}</Text> : null}
                        {limitations ? <Text style={styles.chip}>Limitations: {limitations}</Text> : null}
                    </View>
                </View>

                {/* MAIN PROGRAM */}
                {renderContent(response)}

                {/* COACH NOTES (expert) */}
                {isExpert && coachNotes ? (
                    <View style={styles.coachNoteBox}>
                        <Text style={styles.coachNoteTitle}>🧑‍🏫 Coach Notes</Text>
                        {renderContent(String(coachNotes))}
                    </View>
                ) : null}

                {/* EXTRAS (exerciseLibrary, progressionAuto, etc.) */}
                {extraEntries.map(([key, val]) => (
                    <View key={key}>
                        <Text style={styles.sectionTitle}>
                            {humanizeKey(key).toUpperCase()}
                        </Text>
                        {renderContent(String(val))}
                    </View>
                ))}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Generated from your Training Order • Domain: fitness • Category: training
                    </Text>
                </View>
            </Page>
        </Document>
    );
}