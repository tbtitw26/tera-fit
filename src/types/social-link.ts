export type SocialIcon = "instagram" | "pinterest" | "facebook";

export interface SocialLink {
    label: string;
    href: string;
    icon: SocialIcon;
}
