import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME} Training Platform`,
        description: `Frequently asked questions about ordering training programs with ${COMPANY_NAME} — specialist coaches, PDF delivery, and payments.`,
        keywords: [
            "fitness program FAQ",
            "personal training program online",
            "coach-made workout program",
            "fitness PDF program",
            "specialist training plan",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} — Training FAQ`,
            description:
                "Answers to common questions about specialist-made training programs and PDF delivery.",
            bg: "#111827",
            color: "#ffffff",
        },
    },

    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is an online platform where you can order personalized training programs from certified specialists. You fill out a short form, choose a trainer, and receive your workout as a structured PDF.`,
                },
                {
                    question: "How does the process work?",
                    answer:
                        "You create an account, top up your balance, fill out a short form about your goals and level, and choose a certified specialist to build your program. Your plan is delivered as a downloadable PDF within 12–24 hours.",
                },
                {
                    question: "How does the balance work?",
                    answer:
                        "Your balance is stored in EUR and used to pay for specialist-made programs and add-ons. Top up anytime — your balance never expires.",
                },
                {
                    question: "How are the programs created?",
                    answer:
                        "Every program is manually created by a certified trainer based on your goals, experience, schedule, equipment, and limitations. You receive a detailed, structured plan with exercises, sets, reps, and progression.",
                },
                {
                    question: "How long does it take to receive my program?",
                    answer:
                        "Your trainer prepares your program within 12–24 hours. You'll receive an email notification when it's ready to download.",
                },
                {
                    question: "What do I receive after ordering?",
                    answer:
                        "You receive a structured PDF training program that includes weekly split, exercises, sets, reps, rest times, and progression guidance.",
                },
                {
                    question: "Can the program be adapted for injuries or limitations?",
                    answer:
                        "Yes. You can specify injuries, limitations, or equipment constraints in the form. Your specialist adjusts the plan accordingly.",
                },
                {
                    question: "Can I choose a specific trainer?",
                    answer:
                        "Yes. Browse our certified trainers, check their specialties, ratings, and experience, and choose the one that best fits your goals.",
                },
                {
                    question: "Does my balance expire?",
                    answer:
                        "No. Your balance stays in your account and can be used anytime without expiration.",
                },
                {
                    question: "Is my payment secure?",
                    answer:
                        `${COMPANY_NAME} uses trusted payment providers and industry-standard encryption to ensure all transactions are secure.`,
                },
                {
                    question: "How can I contact support?",
                    answer:
                        `You can reach our support team anytime via the contact page or by email at ${COMPANY_EMAIL}. We typically respond within 24 hours.`,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Still Have Questions?",
            description:
                "Our support team is happy to help you choose the right specialist and plan for your goals.",
            buttonText: "Contact Support",
            buttonLink: "/contact-us",
        },
    ],
};

export default faqSchema;
