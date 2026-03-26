import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Privacy Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
        description:
            "Tera Fit Privacy Policy: details on what data we collect, how we use it, retention, transfers, and your rights under GDPR.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "tera fit",
            "fitness",
            "personal data",
            "privacy",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `Privacy Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent privacy practices for Tera Fit digital fitness platform under GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description:
                "Effective date: 26 March 2026\n\nThis Privacy Policy explains how LOOTERA IT MB (“we”, “us”, “our”) collects, uses, shares, stores, and protects personal data when you use Tera Fit and related services available at tera-fit.eu (the “Service”).\n\nData Controller\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company number: ${COMPANY_NUMBER}\n` +
                `Address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "This Policy applies to personal data collected through the website, account registration, contact forms, questionnaires, checkout, customer support, and related digital service delivery.",
        },
        {
            type: "text",
            title: "1. General Principles",
            bullets: [
                "1.1 We process personal data in accordance with the EU General Data Protection Regulation (GDPR), applicable laws of the Republic of Lithuania, and other applicable data protection laws.",
                "1.2 We collect and use only the personal data that is reasonably necessary for legitimate business purposes, including providing the Service, managing accounts, processing payments, delivering Programs, responding to enquiries, ensuring security, and complying with legal obligations.",
                "1.3 By using the Service, you acknowledge that your personal data will be processed as described in this Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "Depending on how you use the Service, we may collect the following categories of personal data:",
        },
        {
            type: "text",
            title: "2.1 Identity and contact data",
            description: "This may include:",
            bullets: [
                "• name;",
                "• email address;",
                "• billing details;",
                "• country or location information;",
                "• phone number, where provided.",
            ],
        },
        {
            type: "text",
            title: "2.2 Account data",
            description: "This may include:",
            bullets: [
                "• login credentials;",
                "• hashed password;",
                "• account preferences;",
                "• profile information;",
                "• token balance and account status.",
            ],
        },
        {
            type: "text",
            title: "2.3 Order and transaction data",
            description:
                "This may include:",
            bullets: [
                "• order references;",
                "• purchase history;",
                "• Token purchases and redemptions;",
                "• transaction dates;",
                "• payment status;",
                "• payment processor references;",
                "• refund and chargeback information.",
            ],
        },
        {
            type: "text",
            title: "2.3 Order and transaction data",
            description:
                "We do not store full card numbers or card security codes. Payment transactions are handled by third-party payment providers.",
        },
        {
            type: "text",
            title: "2.4 Service and usage data",
            description: "This may include:",
            bullets: [
                "• submitted questionnaires and intake form responses;",
                "• selected services or Programs;",
                "• download and access history;",
                "• interaction with the Service;",
                "• timestamps and activity logs.",
            ],
        },
        {
            type: "text",
            title: "2.5 Fitness and questionnaire data",
            description:
                "Where relevant to the requested Service, we may collect information you voluntarily provide about:",
            bullets: [
                "• fitness goals;",
                "• training level;",
                "• exercise preferences;",
                "• physical limitations;",
                "• injuries;",
                "• lifestyle factors; and",
                "• other information relevant to preparing a personalised Program.",
            ],
        },
        {
            type: "text",
            title: "2.5 Fitness and questionnaire data",
            description:
                "Some of this information may, depending on its content, qualify as health-related personal data or other special category data under the GDPR.",
        },
        {
            type: "text",
            title: "2.6 Technical data",
            description: "This may include:",
            bullets: [
                "• IP address;",
                "• browser type;",
                "• operating system;",
                "• device information;",
                "• language settings;",
                "• referral data;",
                "• cookies and similar technologies;",
                "• log data and diagnostic information.",
            ],
        },
        {
            type: "text",
            title: "2.7 Communications and support data",
            description: "This may include:",
            bullets: [
                "• emails;",
                "• support requests;",
                "• chat or contact form messages;",
                "• attachments;",
                "• complaint correspondence;",
                "• refund request information.",
            ],
        },
        {
            type: "text",
            title: "2.8 Marketing and consent data",
            description: "Where relevant, this may include:",
            bullets: [
                "• newsletter preferences;",
                "• marketing opt-in records;",
                "• consent timestamps;",
                "• campaign interaction data.",
            ],
        },
        {
            type: "text",
            title: "3. How and Why We Use Personal Data",
            description:
                "We process personal data only where we have a valid legal basis under the GDPR.",
        },
        {
            type: "text",
            title: "3.1 Performance of a contract",
            description: "We process personal data where necessary to:",
            bullets: [
                "• create and manage your Account;",
                "• provide access to the Service;",
                "• process Token purchases;",
                "• deliver Programs and digital content;",
                "• provide customer support;",
                "• manage refunds, cancellations, and account-related matters.",
            ],
        },
        {
            type: "text",
            title: "3.2 Compliance with legal obligations",
            description: "We process personal data where necessary to:",
            bullets: [
                "• comply with tax, accounting, and financial reporting obligations;",
                "• comply with consumer protection obligations;",
                "• respond to lawful requests from authorities;",
                "• keep records required by law;",
                "• prevent unlawful activity where legally required.",
            ],
        },
        {
            type: "text",
            title: "3.3 Legitimate interests",
            description:
                "We may process personal data where necessary for our legitimate interests, provided those interests are not overridden by your rights and freedoms. These interests may include:",
            bullets: [
                "• operating and improving the Service;",
                "• fraud prevention and account security;",
                "• platform administration;",
                "• internal reporting and service analytics;",
                "• defending legal claims;",
                "• enforcing our legal terms and policies;",
                "• preventing abuse and misuse of the Service.",
            ],
        },
        {
            type: "text",
            title: "3.4 Consent",
            description: "We rely on consent where required, including:",
            bullets: [
                "• sending marketing communications where applicable;",
                "• placing non-essential cookies or similar technologies, where required by law;",
                "• processing health-related or other special category data, where explicit consent is required.",
            ],
        },
        {
            type: "text",
            title: "3.4 Consent",
            description:
                "You may withdraw consent at any time, but this does not affect the lawfulness of processing carried out before withdrawal.",
        },
        {
            type: "text",
            title: "3.5 Establishment, exercise, or defence of legal claims",
            description:
                "Where necessary, we may process personal data in connection with disputes, complaints, chargebacks, legal claims, and enforcement of our rights.",
        },
        {
            type: "text",
            title: "4. Special Category Data",
            bullets: [
                "4.1 Some information you provide through fitness questionnaires or personalised intake forms may reveal information about your health, physical condition, injuries, limitations, or similar sensitive matters.",
                "4.2 We do not seek to collect medical records or clinical health data unless this is specifically and clearly required for the requested Service.",
                "4.3 Where special category personal data is processed, we do so only where permitted by law and, where required, on the basis of your explicit consent or another valid legal basis under Article 9 of the GDPR.",
                "4.4 If you do not want us to process health-related information, you should not provide it through the Service. However, this may limit our ability to provide certain personalised Programs safely or accurately.",
            ],
        },
        {
            type: "text",
            title: "5. Cookies and Similar Technologies",
            bullets: [
                "5.1 We use cookies and similar technologies, including local storage and session storage, to operate the Service, maintain login sessions, remember preferences, improve performance, and understand how users interact with the website.",
                "5.2 Some cookies are strictly necessary for the website to function and do not require consent under applicable law.",
                "5.3 Other cookies or similar technologies, such as analytics or marketing tools, may be used only where required legal consent has been obtained.",
                "5.4 Further information is provided in our Cookie Policy.",
            ],
        },
        {
            type: "text",
            title: "6. How We Share Personal Data",
            description:
                "We do not sell your personal data. We may share personal data only where reasonably necessary, including with:",
        },
        {
            type: "text",
            title: "6.1 Payment service providers",
            description:
                "To process payments, refunds, and payment-related verification.",
        },
        {
            type: "text",
            title: "6.2 Hosting, infrastructure, and technology providers",
            description:
                "To host, maintain, secure, and operate the website, databases, storage systems, and communication tools.",
        },
        {
            type: "text",
            title: "6.3 Analytics, communications, and support providers",
            description:
                "To help us understand usage, manage support, send service messages, or improve operations.",
        },
        {
            type: "text",
            title: "6.4 Professional advisers and service providers",
            description:
                "Including legal advisers, accountants, auditors, insurers, and consultants where necessary for legitimate business or legal purposes.",
        },
        {
            type: "text",
            title: "6.5 Authorities and law enforcement",
            description:
                "Where disclosure is required by law, court order, regulatory requirement, or where necessary to protect legal rights, prevent fraud, or respond to unlawful conduct.",
        },
        {
            type: "text",
            title: "6.6 Business transfers",
            description:
                "If we are involved in a merger, acquisition, restructuring, asset sale, or similar corporate transaction, personal data may be disclosed as part of that process, subject to appropriate confidentiality and legal safeguards.",
        },
        {
            type: "text",
            title: "7. International Transfers",
            bullets: [
                "7.1 Some service providers may process personal data outside the European Economic Area (EEA).",
                "7.2 Where personal data is transferred outside the EEA, we take reasonable steps to ensure that appropriate safeguards are in place, including:",
                "• transfers to countries recognised as providing an adequate level of protection;",
                "• use of the European Commission’s Standard Contractual Clauses;",
                "• or other lawful transfer mechanisms recognised under the GDPR.",
                "7.3 You may contact us if you would like more information about the safeguards used for relevant international transfers.",
            ],
        },
        {
            type: "text",
            title: "8. Data Retention",
            bullets: [
                "8.1 We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including for legal, accounting, tax, fraud prevention, consumer protection, and dispute-handling purposes.",
                "8.2 Retention periods may vary depending on the nature of the data and the reason for processing. In general:",
                "• Account data is kept while your Account remains active and for a reasonable period afterwards;",
                "• transaction, payment, and refund-related records may be kept for several years where required for legal, tax, accounting, fraud prevention, or dispute purposes;",
                "• support correspondence is kept for as long as reasonably necessary to manage the matter and maintain appropriate records;",
                "• technical logs are retained for a limited period unless longer retention is required for security or investigation purposes;",
                "• marketing data is retained until you withdraw consent or object, unless we must retain limited suppression records to respect your request.",
                "8.3 When data is no longer required, we will delete, anonymise, or securely archive it in accordance with applicable law and internal retention practices.",
            ],
        },
        {
            type: "text",
            title: "9. Your Rights",
            description:
                "Under the GDPR and applicable law, you may have the right to:",
            bullets: [
                "9.1 Access the personal data we hold about you;",
                "9.2 Rectify inaccurate or incomplete personal data;",
                "9.3 Erase your personal data in certain circumstances;",
                "9.4 Restrict the processing of your personal data in certain circumstances;",
                "9.5 Object to processing based on legitimate interests, including direct marketing;",
                "9.6 Withdraw consent where processing is based on consent;",
                "9.7 Receive portability of certain personal data in a structured, commonly used, machine-readable format, where applicable;",
                "9.8 Lodge a complaint with the competent supervisory authority in Lithuania or in the EU Member State of your habitual residence.",
            ],
        },
        {
            type: "text",
            title: "9. Your Rights",
            description:
                "To exercise your rights, contact us at info@tera-fit.eu. We may request reasonable proof of identity before acting on your request.\n\nWe will respond within the time periods required by applicable law. Some rights are not absolute and may be limited where we have overriding legal grounds or are required to retain certain data.",
        },
        {
            type: "text",
            title: "10. Marketing Communications",
            bullets: [
                "10.1 Where permitted by law, we may send you service-related communications necessary for your Account, Orders, Programs, payments, or support matters.",
                "10.2 Where marketing consent is required, we will send promotional communications only if you have opted in.",
                "10.3 You may unsubscribe from marketing emails at any time by using the unsubscribe link or contacting us directly.",
                "10.4 Even if you opt out of marketing, we may still send essential service or transactional communications.",
            ],
        },
        {
            type: "text",
            title: "11. Security",
            bullets: [
                "11.1 We implement reasonable technical and organisational measures designed to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure.",
                "11.2 Such measures may include access controls, encryption in transit where appropriate, logging, credential protections, secure hosting practices, backups, and role-based access restrictions.",
                "11.3 No system is completely secure, and we cannot guarantee absolute security. You are also responsible for maintaining the confidentiality of your Account credentials.",
            ],
        },
        {
            type: "text",
            title: "12. Children",
            bullets: [
                "12.1 The Service is not intended for persons under the age of 18.",
                "12.2 We do not knowingly collect personal data from children.",
                "12.3 If you believe that personal data of a child has been provided to us, please contact us at info@tera-fit.eu, and we will take appropriate steps to investigate and, where appropriate, delete the data.",
            ],
        },
        {
            type: "text",
            title: "13. Automated Decision-Making",
            bullets: [
                "13.1 We may use automated tools, including AI-assisted processes, in connection with creating or supporting certain digital fitness outputs.",
                "13.2 However, we do not currently intend to make decisions based solely on automated processing that produce legal effects or similarly significant effects on you without appropriate safeguards and notice, where required by law.",
            ],
        },
        {
            type: "text",
            title: "14. Changes to This Privacy Policy",
            bullets: [
                "14.1 We may update this Privacy Policy from time to time for legal, technical, operational, or commercial reasons.",
                "14.2 The latest version will be published on the Service with the updated effective date.",
                "14.3 Where changes are material, we may provide additional notice through the website, your Account, or by email where appropriate.",
            ],
        },
        {
            type: "text",
            title: "15. Contact and Complaints",
            description:
                "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact:",
            bullets: [
                `${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
                `Phone: ${COMPANY_PHONE}`,
            ],
        },
        {
            type: "text",
            title: "15. Contact and Complaints",
            description:
                "If you believe that your data protection rights have been violated, you may also submit a complaint to the competent supervisory authority in Lithuania or in the EU Member State where you live or work.",
        },
    ],
};

export default privacyPolicySchema;