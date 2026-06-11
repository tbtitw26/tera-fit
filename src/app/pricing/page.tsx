"use client";

import Grid from "@/components/constructor/grid/Grid";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import FAQ from "@/components/constructor/faq/FAQ";
import PromoSection from "@/components/sections/promo-section/PromoSection";

export default function PricingPage() {
    return (
        <>
            <PromoSection
                eyebrow="Pricing"
                title="Flexible Pricing for"
                highlight="Specialist Training"
                description="Top up your balance once and use it for specialist-made programs. No subscriptions. No hidden fees. Pay only when you need a plan."
            />

            <Grid
                title="Top Up Your Balance"
                description="No subscriptions. Add funds and order a specialist plan anytime."
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    variant="starter"
                    title="Starter"
                    price="€5"
                    tokens={500}
                    badgeTop="Start"
                    description="Ideal to test the platform or cover part of a specialist order."
                    buttonText="Top Up €5"
                />

                <PricingCard
                    variant="pro"
                    title="Athlete"
                    price="€19"
                    tokens={1900}
                    badgeTop="Popular"
                    description="Great for regular updates and specialist-made programs when your goals change."
                    buttonText="Top Up €19"
                />

                <PricingCard
                    variant="premium"
                    title="Pro"
                    price="€49"
                    tokens={4900}
                    badgeTop="Best Value"
                    description="Best choice for serious progress with detailed specialist programming and periodic revisions."
                    buttonText="Top Up €49"
                />

                <PricingCard
                    variant="custom"
                    title="Custom"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Choose the exact amount you need for your next plan or upgrade."
                    buttonText="Continue"
                />
            </Grid>

            <ValuesIcons
                tagline="WHY THIS MODEL"
                title="Simple, Transparent Pricing"
                description="No recurring charges. Your balance stays until you use it."
                values={[
                    {
                        title: "No Subscriptions",
                        description: "Pay once. Use your balance whenever you need a new program.",
                        icon: "subscriptions",
                    },
                    {
                        title: "Instant Top-Up",
                        description: "Funds are added to your account immediately after payment.",
                        icon: "zap",
                    },
                    {
                        title: "Specialist Quality",
                        description: "Every program is designed by a certified trainer.",
                        icon: "community",
                    },
                ]}
            />

            <FAQ
                items={[
                    {
                        question: "What is my balance used for?",
                        answer:
                            "Your balance is used to order specialist-made training programs. You only pay when you need a plan — no subscriptions.",
                    },
                    {
                        question: "Does my balance expire?",
                        answer: "No, your balance never expires.",
                    },
                    {
                        question: "How fast do I receive my plan?",
                        answer:
                            "Your trainer prepares your program within 12–24 hours. You'll receive an email when it's ready to download.",
                    },
                    {
                        question: "Can I top up with different currencies?",
                        answer:
                            "Yes, we support EUR and GBP. You can switch currencies at checkout.",
                    },
                ]}
            />
        </>
    );
}
