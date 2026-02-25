import type { Metadata } from "next";
import { COMPANY_NAME } from "@/resources/constants";

import HeroSection from "@/components/constructor/hero/Hero";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import Grid from "@/components/constructor/grid/Grid";
import FAQ from "@/components/constructor/faq/FAQ";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import TestimonialsSlider from "@/components/constructor/testimonials-slider/TestimonialsSlider";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import Cta from "@/components/constructor/cta/Cta";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";

export const metadata: Metadata = {
    title: `${COMPANY_NAME} — AI & Coach Based Fitness Platform`,
    description:
        "Buy tokens. Choose AI or a real trainer. Get a personalized fitness program based on your goals.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <HeroSection
                title={
                    <>
                        Train Smarter with <span>AI</span> or Real Coaches
                    </>
                }
                description="Token-based fitness platform. Buy tokens, choose your path and receive a personalized training plan."
                primaryCta={{ text: "Get Started", link: "/" }}
                secondaryCta={{ text: "How It Works", link: "/" }}
                image="image1"
                badge={{
                    label: "New",
                    title: "AI Adaptive Training System",
                }}
            />

            {/* WHY CHOOSE US */}
            <ValuesIcons
                tagline="WHY FIT PLATFORM"
                title="Built for Modern Athletes"
                description="No subscriptions. No contracts. Just performance."
                values={[
                    {
                        title: "Flexible Payments",
                        description: "Buy tokens once. Use whenever you want.",
                        icon: "wallet",
                    },
                    {
                        title: "Instant AI Plans",
                        description: "Generate a structured workout in under 60 seconds.",
                        icon: "zap",
                    },
                    {
                        title: "Human Expertise",
                        description: "Certified trainers available anytime.",
                        icon: "community",
                    },
                    {
                        title: "Secure & Private",
                        description: "Your fitness data stays protected.",
                        icon: "shield",
                    },
                ]}
            />

            {/* AI vs TRAINER */}
            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="Personal Coach"
                    badge="PREMIUM"
                    icon="community"
                    description="Precision. Strategy. Accountability."
                    bullets={[
                        "Manual workout design",
                        "Technique corrections",
                        "Direct communication",
                    ]}
                    buttonText="Choose Coach"
                />
                <InfoBlock
                    variant="light"
                    title="AI Training"
                    icon="brain"
                    description="Fast. Smart. Adaptive."
                    bullets={[
                        "Instant workout generation",
                        "Auto progression system",
                        "Optimized load balancing",
                    ]}
                    buttonText="Start with AI"
                />
            </Grid>

            {/* HOW SYSTEM WORKS */}
            <HowItWorksSection
                label="PROCESS"
                title="How It Works"
                description="Start your transformation in minutes."
                steps={[
                    {
                        icon: "login",
                        title: "Create Account",
                        description: "Sign up and receive free starter tokens.",
                    },
                    {
                        icon: "coins",
                        title: "Buy Tokens",
                        description: "Choose the token package that fits your goals.",
                    },
                    {
                        icon: "brain",
                        title: "Generate Plan",
                        description: "Select AI or a real coach to build your program.",
                    },
                    {
                        icon: "calendar",
                        title: "Track Progress",
                        description: "Monitor workouts and improvements weekly.",
                    },
                ]}
            />

            {/* AI EXPLANATION */}
            <PromoFeatureCard
                icon="settings"
                title="How Our AI Builds Your Program"
                description="AI analyzes your goals, training frequency, experience level and recovery capacity. It structures weekly splits, intensity and progression automatically."
                actionText="Try AI Now"
                actionLink="/"
                image="image1"
                imagePosition="right"
            />

            {/* PRICING */}
            <Grid
                title="Token Packages"
                description="No monthly payments. No hidden fees."
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    variant="starter"
                    title="Starter"
                    price="€5"
                    tokens={500}
                    badgeTop="Try It"
                    description="Great for testing AI workouts and exploring the platform. Enough tokens to generate multiple training plans and see how everything works."
                    buttonText="Buy Tokens"
                />

                <PricingCard
                    variant="pro"
                    title="Athlete"
                    price="€19"
                    tokens={2500}
                    badgeTop="Popular"
                    description="Perfect for consistent training. Combine AI plans with coach feedback and update your program regularly."
                    buttonText="Get Started"
                />

                <PricingCard
                    variant="premium"
                    title="Pro"
                    price="€49"
                    tokens={7000}
                    badgeTop="Best Value"
                    description="Best choice for serious progress. Ideal for long-term programs and deeper work with personal trainers."
                    buttonText="Choose Plan"
                />

                <PricingCard
                    variant="custom"
                    title="Custom"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Select the exact token balance you need. Flexible option for advanced users or teams."
                    buttonText="Continue"
                />
            </Grid>

            {/* NO SUBSCRIPTION MODEL */}
            <ValuesIcons
                tagline="NO SUBSCRIPTIONS"
                title="Train Without Monthly Fees"
                description="Traditional fitness apps lock you into €30–€60 monthly payments. We don’t."
                values={[
                    {
                        title: "No Contracts",
                        description: "Use tokens anytime without obligations.",
                        icon: "subscriptions",
                    },
                    {
                        title: "Full Control",
                        description: "Decide when and how you train.",
                        icon: "settings",
                    },
                    {
                        title: "Transparent Pricing",
                        description: "You always know what you pay for.",
                        icon: "priceTag",
                    },
                ]}
            />

            {/* TESTIMONIALS */}
            <TestimonialsSlider
                title="Athletes Love It"
                description="4.9/5 average rating from real users."
                testimonials={[
                    {
                        name: "Mark T.",
                        image: "image1",
                        rating: 5,
                        text: "AI adapts my plan weekly based on performance and recovery. It actually feels personal, not generic.",
                    },
                    {
                        name: "Anna R.",
                        image: "image1",
                        rating: 5,
                        text: "Coach feedback improved my squat technique drastically. I gained confidence under the bar.",
                    },
                    {
                        name: "David L.",
                        image: "image1",
                        rating: 4.4,
                        text: "Finally a fitness app without subscriptions. Pay once, train smart, repeat.",
                    },
                    {
                        name: "Chris M.",
                        image: "image1",
                        rating: 5,
                        text: "The token system is genius. I only pay for what I actually use.",
                    },
                    {
                        name: "Elena S.",
                        image: "image1",
                        rating: 4.5,
                        text: "I love how structured the plans are. No more guessing what to do in the gym.",
                    },
                    {
                        name: "Tom K.",
                        image: "image1",
                        rating: 4.9,
                        text: "Progress tracking keeps me accountable. I’ve added 15kg to my deadlift in 3 months.",
                    },
                    {
                        name: "Sophie W.",
                        image: "image1",
                        rating: 5,
                        text: "The AI adjusts volume when I feel fatigued. That alone saved me from burnout.",
                    },
                    {
                        name: "Daniel P.",
                        image: "image1",
                        rating: 4.8,
                        text: "Clean interface, clear workouts, zero fluff. Exactly what athletes need.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <Cta
                title="Ready to Level Up?"
                description="Create your account today and receive free starter tokens."
                buttonText="Create Account"
                link="/"
            />

            {/* FAQ */}
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
