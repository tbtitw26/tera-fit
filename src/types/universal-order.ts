export interface UniversalOrderUI {
    _id: string;
    userId: string;

    email: string;
    category: string;

    fields: Record<string, any>;
    extras: string[];

    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;
    consents?: Record<string, any>;

    response: string;
    extrasData?: Record<string, string>;

    status: "pending" | "ready";
    readyAt?: string;
    notified?: boolean;
    createdAt: string;
}