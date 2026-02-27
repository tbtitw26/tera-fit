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
    title: `${COMPANY_NAME} — Coach-Led Fitness Programs`,
    description:
        "Buy tokens, fill out a short form, choose a certified coach (primary) or AI (faster), and receive a personalized training program as a PDF.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <HeroSection
                title={
                    <>
                        Your Training Program, Built by a <span>Coach</span>
                    </>
                }
                description="Token-based platform for personalized training plans. Log in, buy tokens, complete a short form, and get a coach-made PDF program. AI is available when you need it faster."
                primaryCta={{ text: "Get Started", link: "/get-started" }}
                secondaryCta={{ text: "Start Training", link: "/dashboard" }}
                image="image1"
                badge={{
                    label: "Coach-Led",
                    title: "Programs Made by Specialists",
                }}
            />

            {/* WHY CHOOSE US */}
            <ValuesIcons
                tagline="WHY FIT PLATFORM"
                title="Programs You Can Trust"
                description="Real specialists first. Clear process. Results-focused plans."
                values={[
                    {
                        title: "Token Payments",
                        description: "Buy tokens once and use them when you need a plan.",
                        icon: "wallet",
                    },
                    {
                        title: "Coach-Made PDF",
                        description: "A specialist designs your program and delivers it as a PDF.",
                        icon: "zap",
                    },
                    {
                        title: "Expert Training Design",
                        description: "Structured progressions built for your goals and level.",
                        icon: "community",
                    },
                    {
                        title: "Secure & Private",
                        description: "Your answers and training data stay protected.",
                        icon: "shield",
                    },
                ]}
            />

            {/* AI vs TRAINER */}
            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="Personal Specialist"
                    badge="PRIMARY"
                    icon="community"
                    description="More time. More detail. Best results."
                    bullets={[
                        "Manually built program from your form",
                        "Exercise selection tailored to you",
                        "Higher quality structure and progression",
                    ]}
                    buttonText="Choose Specialist"
                    buttonLink="/extra/chefs"
                />
                <InfoBlock
                    variant="light"
                    title="AI Program"
                    icon="brain"
                    description="Fast option when you need it now."
                    bullets={[
                        "Quick plan generation",
                        "Simple progression logic",
                        "Good for a rapid start",
                    ]}
                    buttonText="Generate with AI"
                    buttonLink="/dashboard"
                />
            </Grid>

            <HowItWorksSection
                label="PROCESS"
                title="How It Works"
                description="Get your personal program in a few simple steps."
                steps={[
                    {
                        icon: "login",
                        title: "Create Account",
                        description: "Log in to access your dashboard and plan history.",
                    },
                    {
                        icon: "coins",
                        title: "Buy Tokens",
                        description: "Pick a token package and pay only when you need a plan.",
                    },
                    {
                        icon: "brain",
                        title: "Fill the Form & Choose Creator",
                        description: "Answer key questions and choose a specialist (recommended) or AI (faster).",
                    },
                    {
                        icon: "calendar",
                        title: "Receive Your PDF Program",
                        description: "Download your personalized plan and start training with confidence.",
                    },
                ]}
            />

            <PromoFeatureCard
                icon="settings"
                title="AI Is a Fast Alternative"
                description="When you need a quick start, AI can generate a basic plan using your goals, schedule, experience, and recovery. For the most detailed program, choose a specialist."
                actionText="Try AI"
                actionLink="/dashboard"
                image="image2"
                imagePosition="right"
            />

            {/* PRICING */}
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
                    tokens={2500}
                    badgeTop="Popular"
                    description="Great for regular updates and specialist-made programs when your goals change."
                    buttonText="Get Started"
                />

                <PricingCard
                    variant="premium"
                    title="Pro"
                    price="€49"
                    tokens={7000}
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

            {/* NO SUBSCRIPTION MODEL */}
            <ValuesIcons
                tagline="NO SUBSCRIPTIONS"
                title="Pay Only When You Need a New Program"
                description="Get a specialist-made plan without monthly fees or long-term commitments."
                values={[
                    {
                        title: "No Monthly Payments",
                        description: "Tokens replace subscriptions and recurring charges.",
                        icon: "subscriptions",
                    },
                    {
                        title: "Choose Your Approach",
                        description: "Specialist-first, with AI available as a faster option.",
                        icon: "settings",
                    },
                    {
                        title: "Clear Value",
                        description: "You know exactly what you’re paying for each time.",
                        icon: "priceTag",
                    },
                ]}
            />

            {/* TESTIMONIALS */}
            <TestimonialsSlider
                title="People Trust Our Specialists"
                description="Coach-made programs are the #1 choice on the platform."
                testimonials={[
                    {
                        name: "Mark T.",
                        image: "review1",
                        rating: 5,
                        text: "The specialist plan was super detailed and realistic. It fit my schedule and fixed my weak points.",
                    },
                    {
                        name: "Anna R.",
                        image: "review3",
                        rating: 5,
                        text: "My coach adjusted exercise selection for my knees and technique. Training finally feels safe and effective.",
                    },
                    {
                        name: "David L.",
                        image: "review2",
                        rating: 4.7,
                        text: "No subscription is perfect. I bought tokens and ordered a specialist plan when I actually needed it.",
                    },
                    {
                        name: "Chris M.",
                        image: "review5",
                        rating: 5,
                        text: "I like that specialists are the main option. The program I got looked like real coaching, not a template.",
                    },
                    {
                        name: "Elena S.",
                        image: "review4",
                        rating: 4.8,
                        text: "Clear weekly structure and progression. I stopped guessing and started improving consistently.",
                    },
                    {
                        name: "Tom K.",
                        image: "review9",
                        rating: 4.9,
                        text: "The PDF is easy to follow and print. I’ve made steady progress for the first time in years.",
                    },
                    {
                        name: "Sophie W.",
                        image: "review7",
                        rating: 4.6,
                        text: "AI is useful when I’m in a rush, but the specialist plan is on another level for detail.",
                    },
                    {
                        name: "Daniel P.",
                        image: "review8",
                        rating: 4.8,
                        text: "Simple flow: form → specialist → PDF. Clean and professional.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <Cta
                title="Get Your Coach-Made Program"
                description="Create an account, buy tokens, and order a specialist plan today. AI is available if you need it faster."
                buttonText="Create Account"
                link="/dashboard"
            />

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        question: "What’s the difference between a Specialist and AI program?",
                        answer:
                            "Specialist programs are manually created by a coach and are the main service. AI programs are faster and simpler, best when you need a quick start.",
                    },
                    {
                        question: "Do tokens expire?",
                        answer: "No, tokens never expire.",
                    },
                    {
                        question: "How fast do I receive my program?",
                        answer:
                            "AI programs are generated quickly. Specialist programs take longer because they’re made manually for higher quality and detail.",
                    },
                    {
                        question: "Can I use both options?",
                        answer:
                            "Yes. You can spend tokens on specialist programs or AI anytime, depending on your needs.",
                    },
                ]}
            />
        </>
    );
}