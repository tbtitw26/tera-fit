import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { transactionService } from "@/backend/services/transaction.service";
import { emailService } from "@/backend/services/email.service";

export const userController = {
    async buyTokens(userId: string, amount: number): Promise<UserType> {
        await connectDB();

        const user = await userService.addTokens(userId, amount);

        console.log("💳 Adding tokens for user:", userId);
        await transactionService.record(user._id, user.email, amount, "add", user.tokens);
        console.log("✅ Transaction created successfully");

        try {
            await emailService.sendOrderConfirmationEmail({
                email: user.email,
                firstName: user.firstName,
                subject: "Token purchase confirmation",
                summaryTitle: "Payment summary",
                summaryLines: [
                    `Order: Token purchase`,
                    `Tokens added: ${amount}`,
                    `Balance after payment: ${user.tokens}`,
                ],
                amountLabel: "Tokens purchased",
                amountValue: String(amount),
                transactionDate: new Date(),
            });
        } catch (error) {
            console.error("❌ Token purchase email failed:", {
                userId,
                email: user.email,
                amount,
                error,
            });
        }

        return formatUser(user);
    },

    async spendTokens(userId: string, amount: number, reason?: string): Promise<UserType> {
        await connectDB();

        const user = await userService.getUserById(userId);
        if (!user) throw new Error("User not found");
        if ((user.tokens || 0) < amount) throw new Error("Not enough tokens");

        user.tokens -= amount;
        await user.save();

        await transactionService.record(user._id, user.email, amount, "spend", user.tokens);

        return formatUser(user);
    },
};

function formatUser(user: any): UserType {
    return {
        _id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber || user.phone,
        phone: user.phoneNumber || user.phone,
        dateOfBirth: user.dateOfBirth || user.birthDate,
        birthDate: user.dateOfBirth || user.birthDate,
        address: {
            street: user.address?.street,
            city: user.address?.city,
            country: user.address?.country,
            postCode: user.address?.postCode || user.address?.zip,
            zip: user.address?.postCode || user.address?.zip,
        },
        role: user.role,
        tokens: user.tokens,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
