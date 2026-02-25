"use client";

import Grid from "@/components/constructor/grid/Grid";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import StoryGridSection from "@/components/sections/story-grid-section/StoryGridSection";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import FAQ from "@/components/constructor/faq/FAQ";
import PromoSection from "@/components/sections/promo-section/PromoSection";

export default function PricingPage() {
    return (
        <>
            <PromoSection
                eyebrow="Pricing"
                title="Crafting Culinary Experiences for the"
                highlight="Modern World"
                description="We combine tradition, innovation, and world-class chefs to redefine how people learn, cook, and connect through food."
            />

            <Grid
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    index={0}
                    variant="starter"
                    title="Kitchen Warm-Up"
                    price="€5"
                    tokens={500}
                    badgeTop="Starter"
                    description="A gentle entry into smart cooking with AI guidance."
                    features={[
                        "1 week AI-guided learning",
                        "Personalized recipe adjustments",
                        "Skill-level adaptation",
                        "Instant feedback",
                    ]}
                    buttonText="Start Cooking"
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title="AI Chef Boost"
                    price="€15"
                    tokens={1500}
                    badgeTop="Most Popular"
                    description="Fast results with intelligent coaching and daily guidance."
                    features={[
                        "Up to 3 weeks with AI Chef",
                        "Daily cooking challenges",
                        "Instant taste & technique feedback",
                        "Adaptive learning speed",
                    ]}
                    buttonText="Train with AI"
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title="Master Chef Week"
                    price="€50"
                    tokens={5000}
                    badgeTop="Best Value"
                    description="Learn directly from a professional chef — deeper, slower, transformational."
                    features={[
                        "1 full week with real chef",
                        "Structured curriculum",
                        "Professional techniques",
                        "Chef-reviewed progress",
                    ]}
                    buttonText="Learn with a Chef"
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title="Flexible Token Pack"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Mix AI and Chef programs exactly how you want."
                    features={[
                        "Custom token amount",
                        "Spend on AI or Chef paths",
                        "No expiration",
                        "Bulk discounts",
                    ]}
                    buttonText="Build My Plan"
                />
            </Grid>

            <FAQ
                items={[
                    {
                        question: "What is the difference between AI and Coach plans?",
                        answer:
                            "AI plans are instant and cost fewer tokens. Coach plans are manually created and more detailed.",
                    },
                    {
                        question: "Do tokens expire?",
                        answer: "No, tokens never expire.",
                    },
                    {
                        question: "How fast do I receive my plan?",
                        answer:
                            "AI plans are instant. Coach plans are delivered within 24–48 hours.",
                    },
                    {
                        question: "Can I switch between AI and Coach?",
                        answer:
                            "Yes, you can use tokens for either option anytime.",
                    },
                ]}
            />
        </>
    );
}
