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

            <Grid
                title="Token Packages"
                description="No subscriptions. Tokens let you choose specialist work or AI anytime."
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    variant="starter"
                    title="Starter"
                    price="€5"
                    tokens={500}
                    badgeTop="Start"
                    description="Ideal to test the platform, generate an AI plan, or cover part of a specialist order."
                    buttonText="Buy Tokens"
                />

                <PricingCard
                    variant="pro"
                    title="Athlete"
                    price="€19"
                    tokens={1900}
                    badgeTop="Popular"
                    description="Great for regular updates and specialist-made programs when your goals change."
                    buttonText="Get Started"
                />

                <PricingCard
                    variant="premium"
                    title="Pro"
                    price="€49"
                    tokens={4900}
                    badgeTop="Best Value"
                    description="Best choice for serious progress with detailed specialist programming and periodic revisions."
                    buttonText="Choose Plan"
                />

                <PricingCard
                    variant="custom"
                    title="Custom"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Choose the exact amount of tokens you need for your next plan or upgrade."
                    buttonText="Continue"
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