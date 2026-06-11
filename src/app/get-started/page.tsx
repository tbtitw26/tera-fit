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
                description="Log in, top up your balance, fill out a quick form, and choose a certified specialist to build your program. Receive a structured PDF plan within 12–24 hours."
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
                description="Coach-led programming with a simple, pay-as-you-go flow."
                values={[
                    {
                        title: "Flexible Balance",
                        description: "Top up once. Use anytime. Your balance never expires.",
                        icon: "pay",
                    },
                    {
                        title: "Specialist Quality",
                        description: "Manual program design based on your answers.",
                        icon: "zap",
                    },
                    {
                        title: "Fast Turnaround",
                        description: "Your plan is ready within 12–24 hours.",
                        icon: "speed",
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
                        description: "Pay per plan — full control over your spending.",
                    },
                    {
                        title: "Specialist quality",
                        description: "Choose a trainer for the highest quality plan.",
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
                        icon: "pay",
                        title: "Top Up Balance",
                        description:
                            "Add funds to your account based on how often you want a new program or updates.",
                    },
                    {
                        icon: "community",
                        title: "Choose a Specialist",
                        description:
                            "Pick a certified trainer and fill out the form. Your specialist builds the program for you.",
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
                        Programs are prepared by your chosen specialist within 12–24 hours.
                        You&apos;ll receive an email notification when your plan is ready.
                    </>
                }
            />

            {/* WHAT YOU GET */}
            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="Specialist Program"
                    badge="COACH-LED"
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
                    title="Delivered as PDF"
                    badge="CONVENIENT"
                    icon="path"
                    description="Clear, printable format you can take anywhere."
                    bullets={[
                        "Weekly structure with exercises & sets",
                        "Built around your schedule & equipment",
                        "Progression logic included",
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
                        question: "What is the balance used for?",
                        answer:
                            "Your balance is used to order specialist-made training programs. No subscriptions — you pay only when you need a plan.",
                    },
                    {
                        question: "Does my balance expire?",
                        answer: "No. Your balance never expires and can be used anytime.",
                    },
                    {
                        question: "How fast will I receive my program?",
                        answer:
                            "Your trainer prepares the program within 12–24 hours. You'll get an email notification when it's ready to download.",
                    },
                    {
                        question: "Can you adapt the plan for injuries or limitations?",
                        answer:
                            "Yes. Add your limitations in the setup form and your specialist will tailor the program accordingly.",
                    },
                    {
                        question: "Can I choose a specific trainer?",
                        answer:
                            "Yes. Browse our certified trainers, see their specialties and ratings, and pick the one that fits your goals.",
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
                description="Create your account, choose a specialist, and receive your PDF plan within 12–24 hours."
                buttonText="Get Started"
                buttonLink="/dashboard"
            />
        </>
    );
}
