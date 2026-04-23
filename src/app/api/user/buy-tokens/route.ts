import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

const TOKENS_PER_EUR = 100;
const RATES_FROM_EUR = { EUR: 1, GBP: 0.84 };

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = await req.json();

        if (body.currency && body.amount) {
            const { currency, amount } = body;
            if (!["GBP", "EUR"].includes(currency)) {
                return NextResponse.json({ message: "Unsupported currency" }, { status: 400 });
            }

            const eurEquivalent = amount / RATES_FROM_EUR[currency as "GBP" | "EUR"];
            if (eurEquivalent < 0.01) {
                return NextResponse.json({ message: "Minimum is 0.01" }, { status: 400 });
            }

            const tokens = Math.round(eurEquivalent * TOKENS_PER_EUR);

            // 🧾 запис транзакції вже всередині userController.buyTokens()
            const user = await userController.buyTokens(payload.sub, tokens);

            return NextResponse.json({ user, info: `Converted ${amount} ${currency} → ${tokens} tokens` });
        }

        const { amount } = body;
        if (!amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid token amount" }, { status: 400 });
        }

        const user = await userController.buyTokens(payload.sub, amount);
        return NextResponse.json({ user });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Payment failed";
        return NextResponse.json({ message }, { status: 400 });
    }
}
