import HeroSection from "@/components/constructor/hero/Hero";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import Grid from "@/components/constructor/grid/Grid";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import FeatureStep from "@/components/constructor/feature-step/FeatureStep";
import FeatureStepsWrapper from "@/components/constructor/feature-step/wrapper/FeatureStepsWrapper";
import FAQ from "@/components/constructor/faq/FAQ";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";

export default function GetStartedPage() {
    return (
        <>
            {/* HERO */}
            <HeroSection
                title={
                    <>
                        Get a Training Plan — from a <span>Specialist</span>
                    </>
                }
                description="Log in, buy tokens, fill out a quick form, and choose a certified specialist to build your program. Need it faster? Use AI as a quick alternative and receive a structured PDF plan."
                primaryCta={{ text: "Start My Order", link: "/dashboard" }}
                secondaryCta={{ text: "Meet the Specialists", link: "/extra/chefs" }}
                image="image5"
                badge={{
                    label: "PDF Program",
                    title: "Specialist-made",
                }}
            />

            {/* VALUES / WHY */}
            <ValuesIcons
                tagline="WHY THIS WORKS"
                title="Built for Real Progress"
                description="Coach-led programming with a simple, token-based flow."
                values={[
                    {
                        title: "Flexible Tokens",
                        description: "Buy once. Use anytime. Tokens never expire.",
                        icon: "wallet",
                    },
                    {
                        title: "Specialist Quality",
                        description: "Manual program design based on your answers.",
                        icon: "zap",
                    },
                    {
                        title: "AI When You Need Speed",
                        description: "A faster option for a quick start.",
                        icon: "community",
                    },
                    {
                        title: "PDF You Keep",
                        description: "Download, print, and re-open anytime.",
                        icon: "shield",
                    },
                ]}
            />

            {/* HOW IT WORKS */}
            <HowItWorksSection
                label="PROCESS"
                title="How It Works"
                description="Get your program in four simple steps."
                highlights={[
                    {
                        title: "No subscriptions",
                        description: "Pay per plan with tokens — full control.",
                    },
                    {
                        title: "Specialist-first",
                        description: "Choose a coach for the highest quality plan.",
                    },
                    {
                        title: "PDF stored in your account",
                        description: "Re-download anytime.",
                    },
                ]}
                steps={[
                    {
                        icon: "login",
                        title: "Create Account",
                        description:
                            "Log in and complete a short setup about your goal, level, equipment, and limitations.",
                    },
                    {
                        icon: "coins",
                        title: "Buy Tokens",
                        description:
                            "Choose a token pack based on how often you want a new program or updates.",
                    },
                    {
                        icon: "brain",
                        title: "Choose Specialist or AI",
                        description:
                            "Specialist is the main option for maximum detail. AI is a faster alternative when you need it now.",
                    },
                    {
                        icon: "calendar",
                        title: "Receive Your PDF Plan",
                        description:
                            "Download a clear weekly split with exercises, sets/reps/rest, and progression.",
                    },
                ]}
                note={
                    <>
                        Specialist programs take longer because they’re created manually.
                        AI programs are generated faster for a quick start.
                    </>
                }
            />

            {/* AI vs COACH */}
            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="Specialist Program"
                    badge="PRIMARY"
                    icon="community"
                    description="More detail. Better decisions. Better outcomes."
                    bullets={[
                        "Manual program design from your form",
                        "Adjustments for injuries & limitations",
                        "Extra coaching notes and rationale",
                    ]}
                />

                <InfoBlock
                    variant="light"
                    title="AI Program"
                    icon="brain"
                    description="Fast option for a structured start."
                    bullets={[
                        "Plan generated quickly",
                        "Built around your schedule & equipment",
                        "Basic progression logic included",
                    ]}
                />
            </Grid>

            {/* DEEPER EXPLANATION */}
            <FeatureStepsWrapper>
                <FeatureStep
                    step={1}
                    title="We Start With Your Details"
                    description="The program is built around what actually matters for you."
                    bullets={[
                        "Goal: fat loss, muscle gain, strength, endurance",
                        "Schedule: 2–6 training days/week",
                        "Equipment: gym, home, or minimal setup",
                    ]}
                    image="image10"
                    badge="Personalization"
                    buttonText="Start Setup"
                    buttonLink="/dashboard"
                    imagePosition="left"
                />

                <FeatureStep
                    step={2}
                    title="A Clear Weekly Structure"
                    description="No randomness — a real split with progression."
                    bullets={[
                        "Weekly split based on your training frequency",
                        "Exercise selection matched to your equipment",
                        "Sets/reps/rest + intensity guidance",
                    ]}
                    image="image8"
                    badge="Structure"
                    imagePosition="right"
                />

                <FeatureStep
                    step={3}
                    title="Delivered as a Clean PDF"
                    description="Easy to follow on your phone and ready to print."
                    bullets={[
                        "Exercises, sets, reps, rest times",
                        "Warm-up + main work + accessories",
                        "Progression rules week-to-week",
                    ]}
                    image="image9"
                    badge="PDF Output"
                    imagePosition="left"
                />
            </FeatureStepsWrapper>

            {/* FAQ */}
            <FAQ
                title="Frequently Asked Questions"
                description="Quick answers before you get your program."
                items={[
                    {
                        question: "What are tokens used for?",
                        answer:
                            "Tokens are used to order a specialist-made program (primary service) or generate an AI program (faster option). No subscriptions — you pay only when you need a plan.",
                    },
                    {
                        question: "Do tokens expire?",
                        answer: "No. Tokens never expire and can be used anytime.",
                    },
                    {
                        question: "How fast will I receive my program?",
                        answer:
                            "AI programs are generated quickly. Specialist programs take longer because they’re built manually with more detail and higher quality.",
                    },
                    {
                        question: "Can you adapt the plan for injuries or limitations?",
                        answer:
                            "Yes. Add your limitations in the setup form. Specialists can tailor the program manually, and AI can also account for basic constraints.",
                    },
                    {
                        question: "Can I switch between Specialist and AI later?",
                        answer:
                            "Yes. You can use tokens for either option anytime — switch depending on what you need.",
                    },
                    {
                        question: "Is the PDF downloadable and printable?",
                        answer:
                            "Absolutely. Your plan is provided as a PDF you can download, print, and access from your account anytime.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <TextWithButton
                title="Ready to Get Your Program?"
                description="Create your account, choose a specialist (recommended) or AI, and receive your PDF plan."
                buttonText="Get Started"
                buttonLink="/dashboard"
            />
        </>
    );
}