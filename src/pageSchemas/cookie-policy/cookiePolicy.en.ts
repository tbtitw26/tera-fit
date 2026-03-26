import {PageSchema} from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: `Cookie Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
        description:
            "Tera Fit Cookie Policy: how we use cookies and similar technologies, categories, consent rules, and your control options.",
        keywords: [
            "cookie policy",
            "cookies",
            "GDPR",
            "tracking",
            "privacy",
            "consent",
            "tera fit",
        ],
        canonical: "/cookies-policy",
        ogImage: {
            title: `Cookie Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent cookies and consent policy for Tera Fit digital fitness platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Cookie Policy",
            description:
                "Effective date: 26 March 2026\n\nThis Cookie Policy explains how LOOTERA IT MB (“we”, “us”, “our”) uses cookies and similar technologies on Tera Fit and related services available at tera-fit.eu (the “Service”).\n\nData Controller\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company number: ${COMPANY_NUMBER}\n` +
                `Address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "This Cookie Policy should be read together with our Privacy Policy.",
        },
        {
            type: "text",
            title: "1. What This Policy Covers",
            bullets: [
                "1.1 This Policy explains what cookies and similar technologies are, which categories we use, why we use them, and how you can manage your preferences.",
                "1.2 We use cookies and similar technologies such as local storage, session storage, tags, and similar browser-based tools to operate, secure, improve, and analyse the Service.",
                "1.3 Where required by applicable law, we will ask for your consent before placing or using non-essential cookies or similar technologies on your device.",
            ],
        },
        {
            type: "text",
            title: "2. What Are Cookies?",
            bullets: [
                "2.1 Cookies are small text files stored on your device when you visit a website.",
                "2.2 Cookies may be:",
                "(a) session cookies, which expire when you close your browser; or",
                "(b) persistent cookies, which remain on your device for a defined period or until deleted.",
                "2.3 Cookies may be set by us (first-party cookies) or by third-party providers whose services are used on the website (third-party cookies).",
                "2.4 Similar technologies, such as local storage and session storage, may store information in your browser for comparable purposes.",
            ],
        },
        {
            type: "text",
            title: "3. Why We Use Cookies and Similar Technologies",
            description:
                "We use cookies and similar technologies for the following purposes:",
        },
        {
            type: "text",
            title: "3.1 Strictly necessary cookies",
            description:
                "These are required for the website and core Service functions to operate properly. They may be used for:",
            bullets: [
                "• login and account authentication;",
                "• session management;",
                "• security and fraud prevention;",
                "• payment flow continuity;",
                "• load balancing;",
                "• remembering privacy or cookie choices where technically necessary.",
            ],
        },
        {
            type: "text",
            title: "3.1 Strictly necessary cookies",
            description:
                "These cookies do not require consent where they are strictly necessary under applicable law.",
        },
        {
            type: "text",
            title: "3.2 Functional cookies",
            description:
                "These help remember choices and improve usability, such as:",
            bullets: [
                "• language preferences;",
                "• currency or region preferences;",
                "• interface settings;",
                "• user convenience features.",
            ],
        },
        {
            type: "text",
            title: "3.2 Functional cookies",
            description:
                "Where required by law, these cookies are used only with your consent.",
        },
        {
            type: "text",
            title: "3.3 Analytics and performance cookies",
            description:
                "These help us understand how visitors use the website and help us improve performance, reliability, layout, and user experience. They may collect information such as:",
            bullets: [
                "• pages visited;",
                "• time spent on pages;",
                "• navigation patterns;",
                "• error reports;",
                "• browser and device characteristics;",
                "• general traffic performance.",
            ],
        },
        {
            type: "text",
            title: "3.3 Analytics and performance cookies",
            description:
                "Where required by law, these cookies are used only with your consent.",
        },
        {
            type: "text",
            title: "3.4 Marketing or advertising cookies",
            description:
                "These may be used to measure campaign performance, understand referral sources, and support relevant marketing activities.\n\nWe use such cookies only where legally permitted and, where required, only after obtaining your consent.",
        },
        {
            type: "text",
            title: "3.5 Security and anti-abuse technologies",
            description:
                "Some technologies may be used to help protect the Service, users, accounts, and payment flows against abuse, fraud, malicious traffic, and automated attacks.\n\nWhere such technologies are strictly necessary for security, they may be used without consent to the extent permitted by law.",
        },
        {
            type: "text",
            title: "4. Types of Information Collected Through Cookies",
            description:
                "Depending on the tool used, cookies and similar technologies may collect information such as:",
            bullets: [
                "• IP address;",
                "• browser type and version;",
                "• device type;",
                "• operating system;",
                "• language settings;",
                "• session identifiers;",
                "• site usage data;",
                "• referral source;",
                "• pages viewed;",
                "• interaction events;",
                "• approximate location derived from IP;",
                "• consent status and preference settings.",
            ],
        },
        {
            type: "text",
            title: "4. Types of Information Collected Through Cookies",
            description:
                "This information may, in some cases, qualify as personal data under applicable law. Where it does, it is processed in accordance with our Privacy Policy.",
        },
        {
            type: "text",
            title: "5. Legal Basis for Using Cookies",
            bullets: [
                "5.1 Strictly necessary cookies are used where necessary for the provision of the website or a service expressly requested by the user, or where otherwise permitted under applicable law.",
                "5.2 Functional, analytics, and marketing cookies are used on the basis of your consent, where consent is required under applicable law.",
                "5.3 You may withdraw or change your cookie preferences at any time, and withdrawal of consent does not affect the lawfulness of prior processing carried out before withdrawal.",
            ],
        },
        {
            type: "text",
            title: "6. Consent Management",
            bullets: [
                "6.1 When you first visit the Service, you may be presented with a cookie banner or cookie settings tool that allows you to:",
                "(a) accept all cookies;",
                "(b) reject non-essential cookies; or",
                "(c) customise your preferences.",
                "6.2 Your preferences may be stored using a cookie or similar technology so that the website can remember your choices.",
                "6.3 If the Service provides a cookie settings tool, you may revisit it later to update your preferences.",
                "6.4 You may also manage or delete cookies through your browser settings. However, blocking or deleting certain cookies may affect website functionality, including login persistence, saved preferences, or parts of the checkout and account experience.",
            ],
        },
        {
            type: "text",
            title: "7. Third-Party Cookies and Providers",
            bullets: [
                "7.1 Some cookies and similar technologies may be placed or operated by third-party providers whose services we use, such as providers of:",
                "• hosting and infrastructure;",
                "• payments;",
                "• analytics;",
                "• customer support tools;",
                "• embedded content;",
                "• security services;",
                "• communication tools.",
                "7.2 We do not control all third-party cookies directly. Their use may also be governed by the third party’s own privacy and cookie policies.",
                "7.3 We may change the providers and tools used on the Service from time to time for operational, technical, or commercial reasons.",
            ],
        },
        {
            type: "text",
            title: "8. International Data Transfers",
            bullets: [
                "8.1 Some third-party providers may process data outside the European Economic Area (EEA).",
                "8.2 Where personal data collected through cookies or similar technologies is transferred outside the EEA, we take reasonable steps to ensure that appropriate safeguards are used, such as:",
                "• transfers to countries recognised by the European Commission as providing an adequate level of protection;",
                "• Standard Contractual Clauses;",
                "• or other lawful safeguards recognised under the GDPR.",
                "8.3 Further information about international transfers is available in our Privacy Policy or on request.",
            ],
        },
        {
            type: "text",
            title: "9. Retention",
            bullets: [
                "9.1 Different cookies remain on your device for different periods depending on whether they are session-based or persistent.",
                "9.2 Session cookies usually expire when you close your browser.",
                "9.3 Persistent cookies remain until their expiry date or until you manually delete them.",
                "9.4 We retain records relating to cookie preferences, consent logs, and related technical evidence for as long as reasonably necessary to demonstrate compliance, resolve disputes, maintain security, and meet legal obligations.",
            ],
        },
        {
            type: "text",
            title: "10. Your Choices",
            description: "You can manage cookies in several ways:",
        },
        {
            type: "text",
            title: "10.1 Cookie banner or settings tool",
            description:
                "Where available, use the website’s cookie settings tool to accept, reject, or customise non-essential cookies.",
        },
        {
            type: "text",
            title: "10.2 Browser settings",
            description:
                "Most browsers allow you to block, delete, or restrict cookies through browser settings.",
        },
        {
            type: "text",
            title: "10.3 Device controls",
            description:
                "Some mobile devices and apps provide device-level privacy settings that affect tracking technologies.",
        },
        {
            type: "text",
            title: "10.4 Withdraw consent",
            description:
                "Where processing is based on consent, you can withdraw that consent at any time.",
        },
        {
            type: "text",
            title: "10. Your Choices",
            description:
                "Please note that disabling certain cookies may reduce site functionality or prevent some features from working correctly.",
        },
        {
            type: "text",
            title: "11. Changes to This Cookie Policy",
            bullets: [
                "11.1 We may update this Cookie Policy from time to time for legal, technical, operational, or commercial reasons.",
                "11.2 The latest version will be published on the Service with the updated effective date.",
                "11.3 Where changes are material, we may provide additional notice on the website or by other appropriate means.",
            ],
        },
        {
            type: "text",
            title: "12. Contact",
            description:
                "If you have any questions about this Cookie Policy or our use of cookies and similar technologies, please contact:",
            bullets: [
                `${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
                `Phone: ${COMPANY_PHONE}`,
            ],
        },
    ],
};

export default cookiePolicyEn;