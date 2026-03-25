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
                description="We connect athletes with certified specialists who design personalized training programs. AI is available as a faster option, but expert coaching is what we’re built around."
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
                            "A world where every athlete can train with a clear plan, built by experts and supported by smart tools."
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
                        icon: "brain",
                        title: "Smart Support",
                        description: "AI helps you start faster, while specialists deliver the best result.",
                    },
                ]}
                backgroundColor="surface-muted"
            />

            {/* 4️⃣ HOW WE WORK */}
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
                        title: "Choose Who Builds It",
                        description:
                            "Pick a specialist (recommended) for maximum quality, or AI when you need it faster.",
                    },
                    {
                        title: "Program Design",
                        description:
                            "Your plan is structured into weeks with exercises, sets, reps, intensity, and progression.",
                    },
                    {
                        title: "Receive Your PDF",
                        description:
                            "Download your personalized training program and start immediately.",
                    },
                ]}
                note="Specialist-made programs are our primary service. AI is available as a faster alternative."
            />

            {/* 5️⃣ TEAM */}
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

            {/* 6️⃣ TESTIMONIALS */}
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

            <Cta
                title="Get Your Coach-Made Program"
                description="Create an account, buy tokens, and order a specialist plan today. Use AI anytime for a faster start."
                buttonText="Get Started"
                link="/get-started"
            />

            <FAQ
                items={[
                    {
                        question: "What’s the difference between Specialist and AI programs?",
                        answer:
                            "Specialist programs are manually created by certified coaches and are our primary service. AI programs are faster and simpler, designed as a secondary option when you need a quick start.",
                    },
                    {
                        question: "Do tokens expire?",
                        answer: "No, tokens never expire.",
                    },
                    {
                        question: "How fast do I receive my program?",
                        answer:
                            "AI programs are generated quickly. Specialist programs take longer because they’re built manually with higher quality and detail.",
                    },
                    {
                        question: "Can I switch between Specialist and AI?",
                        answer:
                            "Yes. You can use tokens for either option anytime, depending on your needs.",
                    },
                ]}
            />
        </>
    );
}