import { connectDB } from "../config/db";
import { Transaction } from "@/backend/models/transaction.model";
import mongoose from "mongoose";

type RecordTransactionOptions = {
    digitalServiceImmediateConsent?: boolean;
};

export const transactionService = {
    async record(
        userId: mongoose.Types.ObjectId,
        email: string,
        amount: number,
        type: "add" | "spend",
        balanceAfter: number,
        options?: RecordTransactionOptions,
    ) {
        await connectDB();
        const tx = await Transaction.create({
            userId,
            email,
            amount,
            type,
            balanceAfter,
            digitalServiceImmediateConsent: options?.digitalServiceImmediateConsent,
        });
        console.log("🧾 Transaction saved:", tx);
        return tx;
    },
};
