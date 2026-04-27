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
                "This Policy applies to personal data collected through the website, account registration, contact forms, questionnaires, checkout, customer support, Program delivery, and related digital service activities.",
        },
        {
            type: "text",
            title: "1. General Principles",
            bullets: [
                "1.1 We process personal data in accordance with the EU General Data Protection Regulation (“GDPR”), applicable laws of the Republic of Lithuania, and other applicable data protection laws.",
                "1.2 We collect and use only the personal data that is reasonably necessary for legitimate business purposes, including providing the Service, managing accounts, processing payments, delivering Programs, responding to enquiries, ensuring security, preventing fraud and abuse, and complying with legal obligations.",
                "1.3 We aim to process personal data lawfully, fairly, transparently, securely, and only for purposes that are relevant to the Service.",
                "1.4 By using the Service, you acknowledge that your personal data will be processed as described in this Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "Depending on how you use the Service, we may collect the following categories of personal data.",
        },
        {
            type: "text",
            title: "2.1 Identity and Contact Data",
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
            title: "2.2 Account Data",
            description: "This may include:",
            bullets: [
                "• login credentials;",
                "• hashed password;",
                "• account preferences;",
                "• profile information;",
                "• Token balance;",
                "• account status;",
                "• account creation and login information.",
            ],
        },
        {
            type: "text",
            title: "2.3 Order and Transaction Data",
            description: "This may include:",
            bullets: [
                "• order references;",
                "• purchase history;",
                "• Token purchases and redemptions;",
                "• transaction dates;",
                "• selected currency;",
                "• payment status;",
                "• payment processor references;",
                "• refund and chargeback information.",
            ],
        },
        {
            type: "text",
            title: "2.3 Order and Transaction Data",
            description:
                "We do not store full card numbers or card security codes. Payment transactions are handled by third-party payment providers.",
        },
        {
            type: "text",
            title: "2.4 Service and Usage Data",
            description: "This may include:",
            bullets: [
                "• selected services or Programs;",
                "• Program generation, preparation, access, and delivery records;",
                "• download and access history;",
                "• interaction with the Service;",
                "• timestamps and activity logs;",
                "• records of submitted requests or actions within your Account.",
            ],
        },
        {
            type: "text",
            title: "2.5 Fitness, Questionnaire, and Preference Data",
            description:
                "Where relevant to the requested Service, we may collect information you voluntarily provide through questionnaires, intake forms, or similar Service features, including:",
            bullets: [
                "• fitness goals;",
                "• training level;",
                "• exercise preferences;",
                "• preferred training frequency or intensity;",
                "• lifestyle information relevant to the requested Program;",
                "• physical limitations;",
                "• injuries or restrictions;",
                "• information about your general condition or training suitability;",
                "• other information relevant to preparing, adapting, or delivering a Program.",
            ],
        },
        {
            type: "text",
            title: "2.5 Fitness, Questionnaire, and Preference Data",
            description:
                "Some of this information may, depending on its content, qualify as health-related personal data or other special category data under the GDPR.",
        },
        {
            type: "text",
            title: "2.6 Technical Data",
            description: "This may include:",
            bullets: [
                "• IP address;",
                "• browser type;",
                "• operating system;",
                "• device information;",
                "• language settings;",
                "• referral data;",
                "• cookies and similar technologies;",
                "• local storage and session storage data;",
                "• log data and diagnostic information.",
            ],
        },
        {
            type: "text",
            title: "2.7 Communications and Support Data",
            description: "This may include:",
            bullets: [
                "• emails;",
                "• support requests;",
                "• contact form messages;",
                "• chat messages, where available;",
                "• attachments;",
                "• complaint correspondence;",
                "• refund request information;",
                "• records of our communications with you.",
            ],
        },
        {
            type: "text",
            title: "2.8 Marketing and Consent Data",
            description: "Where relevant, this may include:",
            bullets: [
                "• newsletter preferences;",
                "• marketing opt-in and opt-out records;",
                "• consent timestamps;",
                "• campaign interaction data;",
                "• records of your communication preferences.",
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
            title: "3.1 Performance of a Contract",
            description: "We process personal data where necessary to:",
            bullets: [
                "• create and manage your Account;",
                "• provide access to the Service;",
                "• process Token purchases;",
                "• process Orders and redemptions;",
                "• deliver Programs and digital content;",
                "• provide customer support;",
                "• manage refunds, cancellations, chargebacks, and account-related matters;",
                "• communicate with you about your Account, Orders, Programs, or use of the Service.",
            ],
        },
        {
            type: "text",
            title: "3.2 Compliance with Legal Obligations",
            description: "We process personal data where necessary to:",
            bullets: [
                "• comply with tax, accounting, and financial reporting obligations;",
                "• comply with consumer protection obligations;",
                "• respond to lawful requests from authorities;",
                "• keep records required by law;",
                "• meet legal, regulatory, or compliance requirements;",
                "• prevent unlawful activity where legally required.",
            ],
        },
        {
            type: "text",
            title: "3.3 Legitimate Interests",
            description:
                "We may process personal data where necessary for our legitimate interests, provided those interests are not overridden by your rights and freedoms. These interests may include:",
            bullets: [
                "• operating and improving the Service;",
                "• fraud prevention and account security;",
                "• platform administration;",
                "• internal reporting and service analytics;",
                "• troubleshooting and technical maintenance;",
                "• defending legal claims;",
                "• enforcing our Terms, Refund Policy, and other legal policies;",
                "• preventing abuse, misuse, unauthorised access, and payment-related fraud.",
            ],
        },
        {
            type: "text",
            title: "3.4 Consent",
            description: "We rely on consent where required, including for:",
            bullets: [
                "• sending marketing communications where consent is required;",
                "• placing or using non-essential cookies or similar technologies, where required by law;",
                "• processing health-related or other special category data, where explicit consent is required;",
                "• any other processing activity for which consent is the appropriate legal basis.",
            ],
        },
        {
            type: "text",
            title: "3.4 Consent",
            description:
                "You may withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.",
        },
        {
            type: "text",
            title: "3.5 Establishment, Exercise, or Defence of Legal Claims",
            description:
                "Where necessary, we may process personal data in connection with disputes, complaints, refund requests, chargebacks, investigations, legal claims, enforcement of our rights, and protection of our legal position.",
        },
        {
            type: "text",
            title: "4. Fitness and Special Category Data",
            bullets: [
                "4.1 Some information you provide through fitness questionnaires, intake forms, or personalised Program requests may reveal information about your health, physical condition, injuries, limitations, training suitability, or similar sensitive matters.",
                "4.2 We do not ask you to provide medical records, clinical diagnoses, detailed medical history, or emergency health information. The Service is not a medical, clinical, physiotherapy, rehabilitation, or healthcare service.",
                "4.3 Where we process health-related or other special category personal data, we do so only where permitted by law and, where required, on the basis of your explicit consent or another valid legal basis under Article 9 of the GDPR.",
                "4.4 We use fitness and questionnaire data for purposes such as:",
                "• preparing, generating, reviewing, or delivering Programs;",
                "• adapting content to your stated goals, preferences, and limitations;",
                "• improving the relevance and safety of digital fitness outputs;",
                "• providing customer support and handling questions about a Program;",
                "• maintaining records where necessary for legal, security, or dispute-handling purposes.",
                "4.5 You are responsible for ensuring that the information you provide is accurate, complete, and not misleading. Inaccurate or incomplete information may affect the suitability of a Program.",
                "4.6 If you do not want us to process health-related or fitness-related information, you should not provide it through the Service. However, this may limit our ability to provide certain personalised Programs safely, accurately, or at all.",
            ],
        },
        {
            type: "text",
            title: "5. Cookies and Similar Technologies",
            bullets: [
                "5.1 We use cookies and similar technologies, including local storage and session storage, to operate the Service, maintain login sessions, remember preferences, support checkout functionality, improve performance, and understand how users interact with the website.",
                "5.2 Some cookies and similar technologies are strictly necessary for the website and Service to function and do not require consent under applicable law.",
                "5.3 Other cookies or similar technologies, such as analytics or marketing tools, may be used only where the required legal basis applies, including consent where required by law.",
                "5.4 You can usually manage cookies through your browser settings. If you block or delete certain cookies, some parts of the Service may not function correctly.",
                "5.5 Further information about the cookies and similar technologies we use is provided in our Cookie Policy.",
            ],
        },
        {
            type: "text",
            title: "6. How We Share Personal Data",
            description:
                "We do not sell your personal data. We may share personal data only where reasonably necessary and in accordance with applicable law, including with the following categories of recipients.",
        },
        {
            type: "text",
            title: "6.1 Payment Service Providers",
            description:
                "We may share relevant payment, transaction, billing, and verification information with payment service providers to process payments, refunds, chargebacks, and payment-related checks.",
        },
        {
            type: "text",
            title: "6.2 Hosting, Infrastructure, and Technology Providers",
            description:
                "We may share data with providers that help us host, maintain, secure, operate, back up, and monitor the website, databases, storage systems, and related technical infrastructure.",
        },
        {
            type: "text",
            title: "6.3 Service Delivery and Operational Providers",
            description:
                "We may use providers that help us operate the Service, deliver digital content, manage forms, generate or support Programs, provide account functionality, or maintain internal systems.",
        },
        {
            type: "text",
            title: "6.4 Analytics, Communications, and Support Providers",
            description:
                "We may share limited data with providers that help us understand website usage, manage customer support, send service messages, analyse performance, or improve operations.",
        },
        {
            type: "text",
            title: "6.5 Professional Advisers and Service Providers",
            description:
                "We may share personal data with legal advisers, accountants, auditors, insurers, consultants, and other professional service providers where necessary for legitimate business, compliance, or legal purposes.",
        },
        {
            type: "text",
            title: "6.6 Authorities and Law Enforcement",
            description:
                "We may disclose personal data where required by law, court order, regulatory requirement, or where necessary to protect legal rights, prevent fraud, investigate misuse, respond to unlawful conduct, or comply with lawful requests from authorities.",
        },
        {
            type: "text",
            title: "6.7 Business Transfers",
            description:
                "If we are involved in a merger, acquisition, restructuring, asset sale, transfer of the Service, or similar corporate transaction, personal data may be disclosed or transferred as part of that process, subject to appropriate confidentiality and legal safeguards.",
        },
        {
            type: "text",
            title: "7. International Transfers",
            bullets: [
                "7.1 Some service providers may process personal data outside the European Economic Area (“EEA”).",
                "7.2 Where personal data is transferred outside the EEA, we take reasonable steps to ensure that appropriate safeguards are in place, such as:",
                "• transfers to countries recognised as providing an adequate level of protection;",
                "• use of the European Commission’s Standard Contractual Clauses;",
                "• supplementary safeguards where required;",
                "• or other lawful transfer mechanisms recognised under the GDPR.",
                "7.3 You may contact us if you would like more information about the safeguards used for relevant international transfers.",
            ],
        },
        {
            type: "text",
            title: "8. Data Retention",
            bullets: [
                "8.1 We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including for service delivery, legal, accounting, tax, fraud prevention, consumer protection, security, and dispute-handling purposes.",
                "8.2 Retention periods may vary depending on the nature of the data and the reason for processing. In general:",
                "• Account data is kept while your Account remains active and for a reasonable period afterwards;",
                "• transaction, payment, refund, and chargeback-related records may be kept for several years where required for legal, tax, accounting, fraud prevention, or dispute purposes;",
                "• fitness, questionnaire, and Program-related data is kept for as long as reasonably necessary to provide the Service, support your Account, handle disputes, and maintain appropriate records;",
                "• support correspondence is kept for as long as reasonably necessary to manage the matter and maintain appropriate records;",
                "• technical logs are retained for a limited period unless longer retention is required for security, fraud prevention, or investigation purposes;",
                "• marketing data is retained until you withdraw consent or object, unless we must retain limited suppression records to respect your request.",
                "8.3 When personal data is no longer required, we will delete, anonymise, or securely archive it in accordance with applicable law and internal retention practices.",
            ],
        },
        {
            type: "text",
            title: "9. Your Rights",
            description:
                "Under the GDPR and applicable law, you may have the right to:",
            bullets: [
                "9.1 access the personal data we hold about you;",
                "9.2 rectify inaccurate or incomplete personal data;",
                "9.3 erase your personal data in certain circumstances;",
                "9.4 restrict the processing of your personal data in certain circumstances;",
                "9.5 object to processing based on legitimate interests, including direct marketing;",
                "9.6 withdraw consent where processing is based on consent;",
                "9.7 receive certain personal data in a structured, commonly used, machine-readable format, where applicable;",
                "9.8 lodge a complaint with the competent supervisory authority in Lithuania or in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.",
            ],
        },
        {
            type: "text",
            title: "9. Your Rights",
            description:
                "To exercise your rights, contact us at info@tera-fit.eu.\n\nWe may request reasonable proof of identity before acting on your request. We will respond within the time periods required by applicable law. Some rights are not absolute and may be limited where we have overriding legal grounds, where the request affects the rights of others, or where we are required to retain certain data.",
        },
        {
            type: "text",
            title: "10. Marketing Communications",
            bullets: [
                "10.1 Where permitted by law, we may send you service-related communications necessary for your Account, Orders, Tokens, Programs, payments, security, support, or legal matters.",
                "10.2 Where marketing consent is required, we will send promotional communications only if you have opted in.",
                "10.3 You may unsubscribe from marketing emails at any time by using the unsubscribe link, where available, or by contacting us directly at info@tera-fit.eu.",
                "10.4 Even if you opt out of marketing, we may still send essential service, transactional, security, or legal communications.",
            ],
        },
        {
            type: "text",
            title: "11. Security",
            bullets: [
                "11.1 We implement reasonable technical and organisational measures designed to protect personal data against unauthorised access, loss, misuse, alteration, disclosure, or destruction.",
                "11.2 Such measures may include access controls, encryption in transit where appropriate, logging, credential protections, secure hosting practices, backups, role-based access restrictions, and internal access limitations.",
                "11.3 No system is completely secure, and we cannot guarantee absolute security. You are also responsible for maintaining the confidentiality of your Account credentials and using secure devices and networks.",
                "11.4 If you suspect unauthorised access to your Account or personal data, please contact us promptly at info@tera-fit.eu.",
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
            title: "13. AI-Assisted Processing and Automated Decision-Making",
            bullets: [
                "13.1 The Service may use automated tools, including AI-assisted processes, to generate, support, structure, or improve certain digital fitness outputs.",
                "13.2 AI-assisted tools may process information you submit through the Service, such as questionnaire responses, preferences, goals, and other relevant inputs, for the purpose of preparing or supporting a Program.",
                "13.3 We do not currently intend to make decisions based solely on automated processing that produce legal effects or similarly significant effects on you without appropriate safeguards and notice where required by law.",
                "13.4 AI-assisted outputs are part of the digital fitness Service and do not constitute medical, clinical, diagnostic, or emergency advice.",
            ],
        },
        {
            type: "text",
            title: "14. Changes to This Privacy Policy",
            bullets: [
                "14.1 We may update this Privacy Policy from time to time for legal, regulatory, technical, operational, or commercial reasons.",
                "14.2 The latest version will be published on the Service with the updated effective date.",
                "14.3 Where changes are material, we may provide additional notice through the website, your Account, or by email where appropriate.",
                "14.4 Your continued use of the Service after an updated version is published constitutes acknowledgement of the updated Privacy Policy.",
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
