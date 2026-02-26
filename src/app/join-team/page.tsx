"use client";

import React from "react";
import HeroSection from "@/components/constructor/hero/Hero";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import Grid from "@/components/constructor/grid/Grid";
import Section from "@/components/constructor/section/Section";
import JoinTeamForm from "@/components/widgets/join-team-form/JoinTeamForm";
import PromoSection from "@/components/sections/promo-section/PromoSection";

export default function JoinTeamPage() {
    return (
        <>
            <PromoSection
                eyebrow="Join the Team"
                title="Join our global"
                highlight="collective"
                description="A distributed team of independent professionals. If you love what you do — we want to hear from you."
            />

            <Grid columns={2} gap="2rem">
                <InfoBlock
                    variant="dark"
                    title="What you get"
                    icon="community"
                    description="A calm, professional environment built for shipping."
                    bullets={[
                        "Async-first collaboration",
                        "Clear scope & ownership",
                        "Fair terms and transparency",
                    ]}
                />

                <InfoBlock
                    variant="light"
                    title="What we expect"
                    icon="settings"
                    description="Simple: clarity, reliability, and craft."
                    bullets={[
                        "Strong fundamentals",
                        "Ownership mindset",
                        "Respectful communication",
                    ]}
                />
            </Grid>

            <JoinTeamForm/>
        </>
    );
}