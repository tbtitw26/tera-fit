"use client";

import { pdf } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import {renderTrainingPDF} from "@/pdf-creator/training-plan/TrainingRenderer";

function safeFilePart(val: unknown, fallback = "training-plan") {
    const raw = String(val ?? fallback).trim();
    return raw
        .replace(/[^\w\-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase()
        .slice(0, 80);
}

export async function downloadUniversalPDF(order: UniversalOrderType) {
    if (order.fields?.domain !== "fitness" && order.category !== "training") {
        throw new Error("Unsupported PDF domain/category");
    }

    const doc = renderTrainingPDF(order);
    const blob = await pdf(doc).toBlob();

    const goal = safeFilePart(order.fields?.goal, "training");
    const weeks = safeFilePart(order.fields?.durationWeeks, "plan");
    const fileName = `training-plan-${goal}-${weeks}w.pdf`;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}