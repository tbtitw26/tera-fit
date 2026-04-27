import { PageSchema } from "@/components/constructor/page-render/types";
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
                "1.1 This Policy explains what cookies and similar technologies are, which categories we use, why we use them, and how you can manage them.",
                "1.2 We may use cookies and similar technologies such as local storage, session storage, pixels, tags, and similar browser-based tools to operate, secure, improve, and analyse the Service.",
                "1.3 Where required by applicable law, we will use non-essential cookies or similar technologies only where we have a valid legal basis, including consent where required.",
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
                "2.3 Cookies may be set by us as first-party cookies or by third-party providers whose services are used on the website.",
                "2.4 Similar technologies, such as local storage and session storage, may store information in your browser for comparable purposes.",
            ],
        },
        {
            type: "text",
            title: "3. Why We Use Cookies and Similar Technologies",
            description:
                "We use cookies and similar technologies for the following purposes.",
        },
        {
            type: "text",
            title: "3.1 Strictly Necessary Cookies",
            description:
                "These are required for the website and core Service functions to operate properly. They may be used for:",
            bullets: [
                "• login and account authentication;",
                "• session management;",
                "• security and fraud prevention;",
                "• payment flow continuity;",
                "• load balancing;",
                "• checkout functionality;",
                "• remembering essential service settings.",
            ],
        },
        {
            type: "text",
            title: "3.1 Strictly Necessary Cookies",
            description:
                "These cookies do not require consent where they are strictly necessary under applicable law.",
        },
        {
            type: "text",
            title: "3.2 Functional Cookies",
            description:
                "These help remember choices and improve usability, such as:",
            bullets: [
                "• language preferences;",
                "• currency or region preferences;",
                "• interface settings;",
                "• account or website convenience features.",
            ],
        },
        {
            type: "text",
            title: "3.2 Functional Cookies",
            description:
                "Where required by law, these cookies are used only where a valid legal basis applies.",
        },
        {
            type: "text",
            title: "3.3 Analytics and Performance Cookies",
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
            title: "3.3 Analytics and Performance Cookies",
            description:
                "Where required by law, analytics and performance cookies are used only with consent.",
        },
        {
            type: "text",
            title: "3.4 Marketing or Advertising Cookies",
            description:
                "These may be used to measure campaign performance, understand referral sources, and support relevant marketing activities.\n\nWe use such cookies only where legally permitted and, where required, only with consent.",
        },
        {
            type: "text",
            title: "3.5 Security and Anti-Abuse Technologies",
            description:
                "Some technologies may be used to help protect the Service, users, accounts, and payment flows against abuse, fraud, malicious traffic, unauthorised access, and automated attacks.\n\nWhere such technologies are strictly necessary for security, they may be used without consent to the extent permitted by law.",
        },
        {
            type: "text",
            title: "4. Examples of Cookies and Similar Technologies We May Use",
            description:
                "The table below provides examples of the main types of cookies and similar technologies that may be used on the Service. The exact cookies used may change over time depending on website functionality, payment providers, hosting infrastructure, analytics tools, and operational requirements.\n\nCookie / Technology Type | Example Name or Identifier | Purpose | Category | Typical Expiration\nSession cookie | Session ID / authentication session | Keeps you logged in, maintains your session, and supports secure account access | Strictly necessary | Session or limited duration\nAccount security cookie | Security token / anti-forgery token | Helps protect forms, account access, checkout, and requests against misuse or unauthorised actions | Strictly necessary | Session or limited duration\nCheckout or payment flow cookie | Payment session / checkout state | Supports payment flow continuity, transaction security, and completion of checkout steps | Strictly necessary | Session or limited duration\nCurrency preference storage | Currency preference | Remembers your selected currency, such as EUR, GBP, or USD, where supported by the Service | Functional | Usually persistent until changed or deleted\nLanguage or region preference storage | Language / region preference | Remembers language, region, or interface preferences where available | Functional | Usually persistent until changed or deleted\nLocal storage | Browser local storage entry | Stores limited browser-side settings needed for functionality, preferences, or user experience | Functional / strictly necessary, depending on use | Until deleted or replaced\nSession storage | Browser session storage entry | Temporarily stores information needed during a browsing session | Strictly necessary / functional | Until browser tab or session ends\nAnalytics cookie | Analytics identifier | Helps measure site traffic, page performance, navigation patterns, and user interaction trends | Analytics / performance | Varies by provider, commonly up to 24 months\nError or diagnostic tool | Diagnostic identifier / log reference | Helps identify technical errors, performance issues, and service reliability problems | Performance / security | Varies by provider\nMarketing or referral cookie | Campaign or referral identifier | Helps measure campaign effectiveness, referral sources, or marketing performance | Marketing | Varies by provider",
        },
        {
            type: "text",
            title: "4. Examples of Cookies and Similar Technologies We May Use",
            description:
                "We do not use this table to guarantee that every listed technology is active at all times. Some cookies or technologies may be used only when the relevant feature, provider, or integration is enabled.",
        },
        {
            type: "text",
            title: "5. Types of Information Collected Through Cookies",
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
                "• approximate location derived from IP address;",
                "• error and diagnostic information;",
                "• preference settings.",
            ],
        },
        {
            type: "text",
            title: "5. Types of Information Collected Through Cookies",
            description:
                "This information may, in some cases, qualify as personal data under applicable law. Where it does, it is processed in accordance with our Privacy Policy.",
        },
        {
            type: "text",
            title: "6. Legal Basis for Using Cookies",
            bullets: [
                "6.1 Strictly necessary cookies are used where necessary for the provision of the website or a service expressly requested by the user, or where otherwise permitted under applicable law.",
                "6.2 Functional cookies may be used where necessary to provide requested functionality, remember user preferences, or improve usability, subject to applicable law.",
                "6.3 Analytics, performance, marketing, and advertising cookies are used only where a valid legal basis applies, including consent where required by applicable law.",
                "6.4 Where processing is based on consent, you may withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.",
            ],
        },
        {
            type: "text",
            title: "7. Managing Cookies",
            bullets: [
                "7.1 You can manage, block, restrict, or delete cookies through your browser settings.",
                "7.2 Most browsers allow you to:",
                "• view cookies stored on your device;",
                "• delete existing cookies;",
                "• block cookies from specific websites;",
                "• block third-party cookies;",
                "• prevent cookies from being stored in the future.",
                "7.3 Some mobile devices and apps also provide device-level privacy settings that may affect cookies, tracking technologies, advertising identifiers, and similar tools.",
                "7.4 Blocking or deleting certain cookies may affect website functionality. For example, it may prevent login sessions, saved preferences, selected currency, checkout functionality, or account features from working correctly.",
            ],
        },
        {
            type: "text",
            title: "8. Third-Party Cookies and Providers",
            bullets: [
                "8.1 Some cookies and similar technologies may be placed or operated by third-party providers whose services we use, such as providers of:",
                "• hosting and infrastructure;",
                "• payments;",
                "• analytics;",
                "• customer support tools;",
                "• embedded content;",
                "• security services;",
                "• communication tools.",
                "8.2 We do not control all third-party cookies directly. Their use may also be governed by the third party’s own privacy and cookie policies.",
                "8.3 Third-party providers may change, update, or replace their cookies from time to time.",
                "8.4 We may change the providers and tools used on the Service from time to time for operational, technical, security, or commercial reasons.",
            ],
        },
        {
            type: "text",
            title: "9. International Data Transfers",
            bullets: [
                "9.1 Some third-party providers may process data outside the European Economic Area (“EEA”).",
                "9.2 Where personal data collected through cookies or similar technologies is transferred outside the EEA, we take reasonable steps to ensure that appropriate safeguards are used, such as:",
                "• transfers to countries recognised by the European Commission as providing an adequate level of protection;",
                "• Standard Contractual Clauses;",
                "• supplementary safeguards where required;",
                "• or other lawful safeguards recognised under the GDPR.",
                "9.3 Further information about international transfers is available in our Privacy Policy or on request.",
            ],
        },
        {
            type: "text",
            title: "10. Retention",
            bullets: [
                "10.1 Different cookies remain on your device for different periods depending on whether they are session-based or persistent.",
                "10.2 Session cookies usually expire when you close your browser.",
                "10.3 Persistent cookies remain until their expiry date or until you manually delete them.",
                "10.4 Local storage and session storage data may remain in your browser until deleted, replaced, expired, or cleared by your browser settings.",
                "10.5 Where we keep records relating to cookie-related preferences, technical logs, security evidence, or compliance records, we retain them only for as long as reasonably necessary to demonstrate compliance, resolve disputes, maintain security, operate the Service, and meet legal obligations.",
            ],
        },
        {
            type: "text",
            title: "11. Changes to This Cookie Policy",
            bullets: [
                "11.1 We may update this Cookie Policy from time to time for legal, technical, operational, security, or commercial reasons.",
                "11.2 The latest version will be published on the Service with the updated effective date.",
                "11.3 Where changes are material, we may provide additional notice on the website or by other appropriate means.",
                "11.4 Your continued use of the Service after an updated version is published constitutes acknowledgement of the updated Cookie Policy.",
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
