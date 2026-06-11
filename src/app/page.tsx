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
        "Top up your balance, fill out a short form, choose a certified trainer, and receive a personalized training program as a PDF.",
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
                description="Choose a certified trainer, fill out a short form, and get a personalized PDF program designed specifically for your goals, schedule, and experience level."
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
                        title: "Flexible Balance",
                        description: "Top up once and use your balance when you need a plan.",
                        icon: "pay",
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

            {/* WHAT YOU GET */}
            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="Personal Specialist"
                    badge="COACH-LED"
                    icon="community"
                    description="Your program is crafted by a real trainer with coaching experience."
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
                    title="Delivered as PDF"
                    badge="CONVENIENT"
                    icon="path"
                    description="Easy to follow on your phone and ready to print."
                    bullets={[
                        "Exercises, sets, reps, rest times",
                        "Weekly structure with warm-ups",
                        "Progression rules and deload guidance",
                    ]}
                    buttonText="Order a Plan"
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
                        icon: "pay",
                        title: "Top Up Balance",
                        description: "Add funds to your account and pay only when you need a plan.",
                    },
                    {
                        icon: "community",
                        title: "Choose a Trainer",
                        description: "Pick a certified specialist and fill out a short form about your goals.",
                    },
                    {
                        icon: "calendar",
                        title: "Receive Your PDF Program",
                        description: "Your trainer prepares the plan within 12–24 hours. Download and start training.",
                    },
                ]}
            />

            <PromoFeatureCard
                icon="community"
                title="Certified Trainers, Real Results"
                description="Every program is created by a qualified specialist who reviews your goals, limitations, equipment, and schedule. You get a detailed plan with exercise selection rationale, intensity guidance, and progression logic."
                actionText="Meet Trainers"
                actionLink="/extra/chefs"
                image="image2"
                imagePosition="right"
            />

            {/* PRICING */}
            <Grid
                title="Top Up Your Balance"
                description="No subscriptions. Add funds and order a specialist plan when you need one."
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

            {/* NO SUBSCRIPTION MODEL */}
            <ValuesIcons
                tagline="NO SUBSCRIPTIONS"
                title="Pay Only When You Need a New Program"
                description="Get a specialist-made plan without monthly fees or long-term commitments."
                values={[
                    {
                        title: "No Monthly Payments",
                        description: "Your balance stays until you use it — no recurring charges.",
                        icon: "subscriptions",
                    },
                    {
                        title: "Specialist-Made",
                        description: "Every program is built by a certified trainer for maximum quality.",
                        icon: "community",
                    },
                    {
                        title: "Clear Value",
                        description: "You know exactly what you're paying for each time.",
                        icon: "priceTag",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <Cta
                title="Get Your Coach-Made Program"
                description="Create an account, top up your balance, and order a specialist plan today."
                buttonText="Create Account"
                link="/dashboard"
            />

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        question: "How does it work?",
                        answer:
                            "Create an account, top up your balance, fill out a short form about your goals and preferences, choose a trainer, and receive your program as a PDF within 12–24 hours.",
                    },
                    {
                        question: "Does my balance expire?",
                        answer: "No, your balance never expires.",
                    },
                    {
                        question: "How fast do I receive my program?",
                        answer:
                            "Your trainer prepares the program within 12–24 hours. You'll receive an email notification when it's ready to download.",
                    },
                    {
                        question: "Can I choose a specific trainer?",
                        answer:
                            "Yes. Browse our certified trainers, see their specialties and ratings, and choose the one that fits your goals.",
                    },
                ]}
            />
        </>
    );
}
