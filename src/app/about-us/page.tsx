"use client";

import PromoSection from "@/components/sections/promo-section/PromoSection";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TeamGrid from "@/components/constructor/team-grid/TeamGrid";
import TestimonialsSlider from "@/components/constructor/testimonials-slider/TestimonialsSlider";
import Cta from "@/components/constructor/cta/Cta";
import MissionBanner from "@/components/constructor/mission-banner/MissionBanner";
import FAQ from "@/components/constructor/faq/FAQ";
import {experts} from "@/data/experts";

export default function AboutPage() {
    return (
        <>
            <PromoSection
                eyebrow="About Us"
                title="Coach-Built Training for the"
                highlight="Real World"
                description="We connect athletes with certified specialists who design personalized training programs. Expert coaching is what we're built around — every plan is crafted with real training logic."
                image="image3"
                imageText="Real coaches. Real programs."
            />

            <MissionBanner
                image="image4"
                cards={[
                    {
                        icon: "zap",
                        title: "The Mission",
                        description:
                            "Make high-quality, specialist-made training programs accessible to anyone, anywhere."
                    },
                    {
                        icon: "bulb",
                        title: "The Vision",
                        description:
                            "A world where every athlete can train with a clear plan, built by experts who understand the science of programming."
                    }
                ] as const}
            />

            <ValuesIcons
                tagline="Our Core Values"
                title="What We Stand For"
                description="We prioritize real coaching, clear systems, and measurable progress."
                theme={"dark"}
                values={[
                    {
                        icon: "path",
                        title: "Quality First",
                        description: "Specialists build your program with detail, logic, and purpose.",
                    },
                    {
                        icon: "globe",
                        title: "Access Anywhere",
                        description: "Order your plan online and train from any gym or home setup.",
                    },
                    {
                        icon: "shield",
                        title: "Trust & Privacy",
                        description: "Your data is protected and your answers stay confidential.",
                    },
                    {
                        icon: "community",
                        title: "Expert-Driven",
                        description: "Every program reflects years of coaching experience and proven methodology.",
                    },
                ]}
                backgroundColor="surface-muted"
            />

            {/* HOW WE WORK */}
            <HowItWorksSection
                label="Our Process"
                title="How Your Program Is Created"
                description="A simple flow designed to deliver a plan you can follow with confidence."
                steps={[
                    {
                        title: "Tell Us Your Goal",
                        description:
                            "Fill out a short form about your experience, schedule, equipment, and preferences.",
                    },
                    {
                        title: "Choose Your Trainer",
                        description:
                            "Pick a certified specialist based on their expertise, rating, and specialty.",
                    },
                    {
                        title: "Program Design",
                        description:
                            "Your trainer creates a plan with exercises, sets, reps, intensity, and progression.",
                    },
                    {
                        title: "Receive Your PDF",
                        description:
                            "Download your personalized training program and start immediately.",
                    },
                ]}
                note="Programs are prepared by your chosen specialist within 12–24 hours."
            />

            {/* TEAM */}
            <TeamGrid
                title="Meet Our Specialists"
                description="Certified coaches who build programs with real training logic."
                viewAllText="View All Trainers"
                members={experts.slice(0, 4).map((expert) => ({
                    name: expert.fullName,
                    role: expert.subtitle,
                    image: expert.avatar,
                }))}
            />

            <Cta
                title="Get Your Coach-Made Program"
                description="Create an account, top up your balance, and order a specialist plan today."
                buttonText="Get Started"
                link="/get-started"
            />

            <FAQ
                items={[
                    {
                        question: "How are the programs created?",
                        answer:
                            "Every program is designed by a certified specialist based on your goals, experience, schedule, and equipment. You receive a detailed PDF within 12–24 hours.",
                    },
                    {
                        question: "Does my balance expire?",
                        answer: "No, your balance never expires.",
                    },
                    {
                        question: "How fast do I receive my program?",
                        answer:
                            "Your trainer prepares your plan within 12–24 hours. You'll receive an email when it's ready to download.",
                    },
                    {
                        question: "Can I choose a specific trainer?",
                        answer:
                            "Yes. Browse our team, check their specialties and ratings, and select the trainer that best fits your goals.",
                    },
                ]}
            />
        </>
    );
}
