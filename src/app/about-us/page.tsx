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
                title="Coach-Built Training for the"
                highlight="Real World"
                description="We connect athletes with certified specialists who design personalized training programs. AI is available as a faster option, but expert coaching is what we’re built around."
                image="image1"
                imageText="Real coaches. Real programs."
            />

            <MissionBanner
                image="image1"
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
                members={[
                    { name: "Luca Romano", role: "Strength & Hypertrophy", image: "image1" },
                    { name: "Sophie Laurent", role: "Mobility & Injury Prevention", image: "image1" },
                    { name: "Kenji Tanaka", role: "Athletic Performance", image: "image1" },
                    { name: "Maria Alvarez", role: "Endurance & Conditioning", image: "image1" },
                ]}
            />

            {/* 6️⃣ TESTIMONIALS */}
            <TestimonialsSlider
                title="Athletes Trust Our Coaches"
                description="Real feedback from people following specialist-made programs."
                testimonials={[
                    {
                        name: "Mark T.",
                        image: "image1",
                        rating: 5,
                        text: "The specialist plan was extremely detailed and matched my schedule perfectly. No filler, just smart training.",
                    },
                    {
                        name: "Anna R.",
                        image: "image1",
                        rating: 5,
                        text: "My coach fixed my squat pattern and built progressions around my weak points. Huge difference in confidence.",
                    },
                    {
                        name: "David L.",
                        image: "image1",
                        rating: 4.6,
                        text: "Tokens make sense: I pay when I need a new plan. The PDF is clear and easy to follow.",
                    },
                    {
                        name: "Chris M.",
                        image: "image1",
                        rating: 5,
                        text: "Specialist-first is the right approach. AI is handy, but the coach plan feels professional and personalized.",
                    },
                    {
                        name: "Elena S.",
                        image: "image1",
                        rating: 4.7,
                        text: "Structured weeks, clear progression, and realistic volume. I stopped guessing and started progressing.",
                    },
                    {
                        name: "Tom K.",
                        image: "image1",
                        rating: 4.9,
                        text: "I printed the PDF and used it in the gym. Progress tracking became effortless and consistent.",
                    },
                    {
                        name: "Sophie W.",
                        image: "image1",
                        rating: 4.6,
                        text: "AI is fast, but the specialist program was on another level for detail and exercise selection.",
                    },
                    {
                        name: "Daniel P.",
                        image: "image1",
                        rating: 4.8,
                        text: "Clean platform, simple process, and a real coach-designed plan. Exactly what I wanted.",
                    },
                ]}
            />
ы
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