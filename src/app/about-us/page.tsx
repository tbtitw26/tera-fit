"use client";

import PromoSection from "@/components/sections/promo-section/PromoSection";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TeamGrid from "@/components/constructor/team-grid/TeamGrid";
import TestimonialsSlider from "@/components/constructor/testimonials-slider/TestimonialsSlider";
import Cta from "@/components/constructor/cta/Cta";
import MissionBanner from "@/components/constructor/mission-banner/MissionBanner";
import FAQ from "@/components/constructor/faq/FAQ";

export default function AboutPage() {
    return (
        <>
            <PromoSection
                eyebrow="About Us"
                title="Crafting Culinary Experiences for the"
                highlight="Modern World"
                description="We combine tradition, innovation, and world-class chefs to redefine how people learn, cook, and connect through food."
                image="image11"
                imageText="Where Passion Meets Precision."
            />

            <MissionBanner
                image="image11"
                cards={[
                    {
                        icon: "zap",
                        title: "The Mission",
                        description: "To make high-performance coaching accessible to every athlete regardless of location."
                    },
                    {
                        icon: "bulb",
                        title: "The Vision",
                        description: "A world where effort is quantifiable, rewarded, and optimized by intelligence."
                    }
                ] as const}
            />

            <ValuesIcons
                tagline="Our Core Values"
                title="What Drives Us Every Day"
                description="Our foundation is built on passion, integrity, and relentless innovation."
                theme={"dark"}
                values={[
                    {
                        icon: "path",
                        title: "Excellence",
                        description: "We aim for Michelin-level standards in every course.",
                    },
                    {
                        icon: "globe",
                        title: "Global Perspective",
                        description: "Authentic techniques from every corner of the world.",
                    },
                    {
                        icon: "shield",
                        title: "Passion",
                        description: "Cooking is emotion, creativity, and connection.",
                    },
                    {
                        icon: "brain",
                        title: "Innovation",
                        description: "We merge culinary art with modern technology.",
                    },
                ]}
                backgroundColor="surface-muted"
            />

            {/* 4️⃣ HOW WE WORK */}
            <HowItWorksSection
                label="Our Process"
                title="How We Build Every Course"
                description="Every program goes through a rigorous creative and technical process."
                steps={[
                    {
                        title: "Concept & Research",
                        description:
                            "We collaborate with chefs to design authentic learning experiences.",
                    },
                    {
                        title: "Hands-on Production",
                        description:
                            "Each lesson is professionally filmed and tested in real kitchens.",
                    },
                    {
                        title: "Platform Optimization",
                        description:
                            "We refine delivery, structure, and learning flow for maximum clarity.",
                    },
                    {
                        title: "Global Launch",
                        description:
                            "Courses are released to thousands of aspiring chefs worldwide.",
                    },
                ]}
                note="Every course is built with real chefs, real kitchens, and real passion."
            />

            {/* 5️⃣ TEAM */}
            <TeamGrid
                title="Meet Our Culinary Experts"
                description="The masters behind every recipe and technique."
                viewAllText="View All Trainers"
                members={[
                    { name: "Luca Romano", role: "Italian Cuisine", image: "team1" },
                    { name: "Sophie Laurent", role: "French Pastry", image: "team2" },
                    { name: "Kenji Tanaka", role: "Japanese Cuisine", image: "team3" },
                    { name: "Maria Alvarez", role: "Spanish Cuisine", image: "team4" },
                    { name: "James Carter", role: "Modern Fusion", image: "team5" },
                    { name: "Elena Petrova", role: "Eastern European", image: "team6" },
                ]}
            />

            {/* 6️⃣ TESTIMONIALS */}
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

            <Cta
                title="Join Our Culinary Movement"
                description="Discover world-class cooking techniques and elevate your skills today."
                buttonText="Explore Courses"
                link="/courses"
            />

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