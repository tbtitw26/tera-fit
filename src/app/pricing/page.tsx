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
                title="Flexible Token Pricing for"
                highlight="Specialist Training"
                description="Buy tokens once and use them for specialist-made programs (primary service) or AI-generated plans (faster option). No subscriptions. No hidden fees."
            />

            <Grid columns={4} gap="2rem">
                <PricingCard
                    index={0}
                    variant="starter"
                    title="Starter Pack"
                    price="€5"
                    tokens={500}
                    badgeTop="Start"
                    description="Perfect to explore the platform or generate a quick AI program."
                    features={[
                        "Ideal for 1 AI program",
                        "Can be used toward a specialist plan",
                        "No expiration",
                        "Full platform access",
                    ]}
                    buttonText="Buy Tokens"
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title="Athlete Pack"
                    price="€19"
                    tokens={1900}
                    badgeTop="Most Popular"
                    description="Best for consistent training and ordering specialist-made programs."
                    features={[
                        "Covers 1 full specialist program",
                        "Option to use AI anytime",
                        "Tokens never expire",
                        "Better value per token",
                    ]}
                    buttonText="Get Started"
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title="Pro Progress Pack"
                    price="€49"
                    tokens={4900}
                    badgeTop="Best Value"
                    description="Designed for serious athletes who want long-term progress with specialist support."
                    features={[
                        "Multiple specialist programs",
                        "Use for revisions or updates",
                        "AI access included",
                        "Maximum token value",
                    ]}
                    buttonText="Choose Pack"
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title="Custom Token Pack"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Choose the exact number of tokens you need for your goals."
                    features={[
                        "Custom token amount",
                        "Spend on Specialist or AI",
                        "No expiration",
                        "Scalable for advanced users",
                    ]}
                    buttonText="Build My Pack"
                />
            </Grid>

            <FAQ
                items={[
                    {
                        question: "What are tokens used for?",
                        answer:
                            "Tokens are used to order a specialist-made training program (our primary service) or generate an AI plan (faster alternative). You only pay when you need a plan.",
                    },
                    {
                        question: "Do tokens expire?",
                        answer: "No, tokens never expire.",
                    },
                    {
                        question: "How fast do I receive my plan?",
                        answer:
                            "AI programs are generated quickly. Specialist programs take longer because they are manually created for higher quality and personalization.",
                    },
                    {
                        question: "Can I switch between Specialist and AI?",
                        answer:
                            "Yes, you can use your tokens for either option anytime depending on your needs.",
                    },
                ]}
            />
        </>
    );
}