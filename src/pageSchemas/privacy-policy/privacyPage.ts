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
            "Tera Fit Privacy Policy: what personal data we collect, how AI Programs and Trainer Programs are processed, retention, transfers, and your GDPR rights.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "tera fit",
            "AI processing",
            "personal data",
            "privacy",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `Privacy Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent privacy practices for the Tera Fit digital fitness platform under GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description:
                "Effective date: 11 September 2026\n\nThis Privacy Policy explains how MB “Lootera IT”, trading as Tera Fit, collects and processes personal data when you use tera-fit.eu, create an account, purchase Balance, order an AI Program or Trainer Program, contact us, or otherwise use the Tera Fit service (the “Service”).",
        },
        {
            type: "text",
            title: "1. Data Controller",
            description:
                "The data controller responsible for the core Tera Fit Service is:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "In this Policy, “Tera Fit”, “we”, “us”, and “our” mean MB “Lootera IT”.",
        },
        {
            type: "text",
            title: "2. Scope of This Policy",
            description: "This Policy applies to personal data processed through:",
            bullets: [
                "the Tera Fit website and Account area;",
                "registration, sign-in, and profile functions;",
                "Balance top-ups and checkout;",
                "AI Program and Trainer Program ordering;",
                "fitness questionnaires and preference forms;",
                "Program generation, preparation, delivery, and download;",
                "customer support, complaints, and refund requests; and",
                "website security, analytics, cookies, and related technical operations.",
            ],
        },
        {
            type: "text",
            title: "3. Personal Data We Collect",
            description: "The data we collect depends on how you use the Service.",
        },
        {
            type: "text",
            title: "3.1 Identity, contact, and profile data",
            description: "This may include:",
            bullets: [
                "name;",
                "email address;",
                "phone number, where provided;",
                "country, city, or general location information;",
                "Account profile and preferences;",
                "Account creation date and status; and",
                "authentication information, including a securely hashed password.",
            ],
        },
        {
            type: "text",
            title: "3.2 Balance, order, and transaction data",
            description: "This may include:",
            bullets: [
                "Balance amount and history;",
                "top-up package or custom top-up amount;",
                "selected payment and display currency;",
                "transaction date, amount, included VAT, and status;",
                "payment-provider and transaction references;",
                "billing address;",
                "refund, reversal, and chargeback records;",
                "selected Program type and add-ons;",
                "Order configuration, price, and status; and",
                "Program delivery, availability, and download records.",
                "We do not store full payment-card numbers or card security codes. Card payments are processed by an independent third-party payment service provider.",
            ],
        },
        {
            type: "text",
            title: "3.3 Fitness, questionnaire, and preference data",
            description: "Depending on the Program you request, this may include:",
            bullets: [
                "fitness goal;",
                "training experience;",
                "focus areas;",
                "preferred number of training days;",
                "preferred session length;",
                "available equipment;",
                "requested Program duration;",
                "exercise preferences;",
                "lifestyle information relevant to the requested Program;",
                "stated limitations, injuries, or restrictions; and",
                "other information you voluntarily provide for Program preparation.",
            ],
        },
        {
            type: "text",
            title: "3.4 Health-related and special-category data",
            description:
                "Information about injuries, physical restrictions, pregnancy, medical conditions, or exercise suitability may reveal health data and may qualify as special-category personal data under the General Data Protection Regulation (“GDPR”).\n\nTera Fit is not a healthcare provider and does not request medical records, clinical files, emergency information, or a detailed medical history. You should not submit information that is unnecessary for the selected Program.",
        },
        {
            type: "text",
            title: "3.5 AI Program data",
            description:
                "If you select an AI Program, the information submitted or selected for that Order is processed automatically by artificial-intelligence systems to generate the Program. This may include your goals, experience, schedule, equipment, preferences, and any limitations you choose to disclose.\n\nThe resulting AI Program, generation status, and relevant technical records may also be stored as part of your Account and Order history.",
        },
        {
            type: "text",
            title: "3.6 Trainer Program data",
            description:
                "If you select a Trainer Program, information reasonably necessary to prepare that Program is made available to the Trainer you selected. This may include your questionnaire responses, goals, preferences, equipment, schedule, and disclosed limitations or injuries.\n\nThe Trainer may also provide preparation notes, questions, status updates, and the completed Program through the Service.",
        },
        {
            type: "text",
            title: "3.7 Technical and usage data",
            description: "This may include:",
            bullets: [
                "IP address;",
                "browser type and version;",
                "device type and operating system;",
                "language and currency settings;",
                "referral information;",
                "session, local-storage, and cookie identifiers;",
                "login, security, and activity timestamps;",
                "page interactions and feature usage;",
                "diagnostic, error, and performance data; and",
                "records used to detect fraud, abuse, or unauthorised access.",
            ],
        },
        {
            type: "text",
            title: "3.8 Communications and support data",
            description:
                "This may include emails, contact-form messages, support requests, complaints, refund requests, attachments, and records of communications with you.",
        },
        {
            type: "text",
            title: "3.9 Marketing and consent records",
            description:
                "Where relevant, this may include marketing preferences, opt-in and opt-out status, consent wording, consent timestamps, withdrawal records, and interactions with marketing messages.",
        },
        {
            type: "text",
            title: "4. How We Obtain Personal Data",
            description: "We obtain personal data:",
            bullets: [
                "directly from you when you register, complete a questionnaire, place an Order, make a payment, or contact us;",
                "automatically from your device and use of the Service;",
                "from the independent payment service provider in the form of payment status, transaction references, and limited billing or verification information;",
                "from the Trainer selected for a Trainer Program, in relation to preparation and delivery; and",
                "from technical, security, analytics, and communications providers supporting the Service.",
            ],
        },
        {
            type: "text",
            title: "5. Purposes and Legal Bases",
            description: "We process personal data only where we have a valid legal basis.",
        },
        {
            type: "text",
            title: "5.1 Providing the Service and performing a contract",
            description:
                "Where necessary to take steps at your request or perform our contract with you, we process data to:",
            bullets: [
                "create and administer your Account;",
                "authenticate access;",
                "process Balance top-ups and maintain Balance records;",
                "accept, configure, and manage Orders;",
                "generate and supply AI Programs;",
                "enable the selected Trainer to prepare and supply a Trainer Program;",
                "provide selected add-ons;",
                "deliver Programs and maintain access through your Account;",
                "communicate about payments, Orders, and delivery; and",
                "provide customer support and contractual remedies.",
                "The legal basis is Article 6(1)(b) GDPR.",
            ],
        },
        {
            type: "text",
            title: "5.2 Compliance with legal obligations",
            description:
                "We process data where necessary to comply with tax, accounting, consumer-protection, fraud-prevention, sanctions, regulatory, record-keeping, and lawful authority requirements.\n\nThe legal basis is Article 6(1)(c) GDPR.",
        },
        {
            type: "text",
            title: "5.3 Legitimate interests",
            description:
                "We may process data where necessary for our legitimate interests or those of a third party, provided those interests are not overridden by your rights and freedoms. These interests include:",
            bullets: [
                "securing Accounts and the Service;",
                "detecting and preventing fraud, abuse, and unauthorised payments;",
                "troubleshooting and improving Service performance;",
                "maintaining appropriate operational records;",
                "understanding use of the Service through proportionate analytics;",
                "enforcing the Terms and protecting legal rights; and",
                "establishing, exercising, or defending legal claims.",
                "The legal basis is Article 6(1)(f) GDPR.",
            ],
        },
        {
            type: "text",
            title: "5.4 Consent",
            description: "We rely on consent where required, including for:",
            bullets: [
                "processing health-related or other special-category data where explicit consent is required;",
                "non-essential cookies or similar technologies;",
                "marketing communications where consent is required; and",
                "any optional processing activity for which consent is the appropriate legal basis.",
                "The legal basis is Article 6(1)(a) GDPR and, for special-category data, Article 9(2)(a) GDPR where applicable.",
                "You may withdraw consent at any time. Withdrawal does not affect processing already carried out lawfully before withdrawal.",
            ],
        },
        {
            type: "text",
            title: "5.5 Legal claims involving special-category data",
            description:
                "Where strictly necessary, health-related information may be retained or processed for the establishment, exercise, or defence of legal claims, in accordance with Article 9(2)(f) GDPR and applicable law.",
        },
        {
            type: "text",
            title: "6. Health-Related Data",
            bullets: [
                "6.1 Before processing health-related questionnaire information where explicit consent is required, Tera Fit will request a specific and affirmative indication of consent separate from general acceptance of the Terms.",
                "6.2 Health-related information is used only as reasonably necessary to:",
                "(a) generate the AI Program you requested;",
                "(b) enable the selected Trainer to prepare a Trainer Program;",
                "(c) adapt the Program to limitations you disclosed;",
                "(d) respond to a question or complaint concerning the Program;",
                "(e) maintain security and appropriate service records; or",
                "(f) establish, exercise, or defend a legal claim.",
                "6.3 If you withdraw consent before the relevant Program has been generated or prepared and no other legal condition permits continued processing, we may be unable to complete the Order. Any payment consequence will be handled under the Terms, Refund Policy, and applicable law.",
                "6.4 Withdrawing consent does not necessarily require deletion of information that must lawfully be retained for accounting, fraud prevention, dispute resolution, or legal claims. Any continued retention will be limited to the relevant purpose.",
            ],
        },
        {
            type: "text",
            title: "7. AI Processing",
            bullets: [
                "7.1 If you select an AI Program, the Program is created entirely through automated AI processing. It is not reviewed, verified, or approved by a Trainer before delivery.",
                "7.2 The AI system uses the selections and information submitted for the Order to produce a fitness-program output. The output may be influenced by factors such as the selected goal, experience level, training schedule, available equipment, desired duration, preferences, and disclosed limitations.",
                "7.3 AI processing is necessary to perform the contract for an AI Program. Where the input includes health-related data, we also rely on the applicable Article 9 GDPR condition described in this Policy.",
                "7.4 Tera Fit does not use the AI Program process to make decisions that produce legal effects or similarly significant effects concerning eligibility for employment, credit, insurance, healthcare, or another comparable matter.",
                "7.5 AI Programs may contain errors or unsuitable recommendations. They are fitness information, not medical diagnosis, treatment, or healthcare advice.",
                "7.6 If you do not want your questionnaire information processed by AI, do not select an AI Program. You may instead select a Trainer Program, which is prepared by a human Trainer, subject to the terms and prices shown before ordering.",
            ],
        },
        {
            type: "text",
            title: "8. Trainers and Access to Personal Data",
            bullets: [
                "8.1 If you select a Trainer Program, the selected Trainer receives only the personal data reasonably necessary to prepare and deliver that Program.",
                "8.2 Trainers who access personal data through Tera Fit are required to use it only for the selected Order and related support, to keep it confidential, and to comply with applicable data-protection obligations.",
                "8.3 A Trainer must not use questionnaire or contact information obtained through Tera Fit for independent marketing or an unrelated service unless a separate lawful basis and appropriate notice exist.",
                "8.4 Tera Fit applies appropriate access restrictions so that Program information is not made generally available to Trainers who are not involved in the relevant Order.",
                "8.5 Where the legal status or data-protection role of a Trainer requires additional information to be provided to you, Tera Fit will make that information available before or when the relevant processing occurs.",
            ],
        },
        {
            type: "text",
            title: "9. Sharing Personal Data",
            description:
                "We do not sell personal data. We may share it with the following categories of recipients only where reasonably necessary and lawful.",
            bullets: [
                "9.1 Payment service providers. Payment, billing, transaction, and verification data may be processed by an independent payment service provider to authorise payments, issue refunds, handle chargebacks, prevent fraud, and meet payment-compliance requirements.",
                "9.2 Selected Trainers. If you order a Trainer Program, relevant questionnaire and Order information is shared with the Trainer you selected for preparation and delivery.",
                "9.3 AI and technology providers. If you order an AI Program, relevant input data may be processed using technology providers that supply or support the AI functionality. We limit such access to what is reasonably necessary and use contractual and technical safeguards as required by law.",
                "9.4 Hosting, storage, and infrastructure providers. Providers may host, secure, back up, monitor, or maintain the website, databases, files, and related infrastructure.",
                "9.5 Communications, support, and analytics providers. Providers may support transactional email, customer communications, support functions, service analytics, error monitoring, or website performance.",
                "9.6 Professional advisers. Personal data may be disclosed to lawyers, accountants, auditors, insurers, consultants, and other professional advisers where necessary for legitimate business, compliance, or legal purposes.",
                "9.7 Authorities and legal recipients. We may disclose personal data where required by law, court order, or a lawful authority request, or where necessary to protect rights, investigate fraud or unlawful conduct, or establish, exercise, or defend legal claims.",
                "9.8 Business transfers. If Tera Fit or its relevant assets are involved in a merger, acquisition, restructuring, financing, or business transfer, personal data may be disclosed under appropriate confidentiality and data-protection safeguards. Any new controller will be required to process the data lawfully and provide applicable notice.",
            ],
        },
        {
            type: "text",
            title: "10. International Data Transfers",
            bullets: [
                "10.1 Some technology or service providers may process personal data outside Lithuania or the European Economic Area (“EEA”).",
                "10.2 Where personal data is transferred outside the EEA, we use a lawful transfer mechanism as required, which may include:",
                "(a) a European Commission adequacy decision;",
                "(b) the European Commission’s Standard Contractual Clauses;",
                "(c) supplementary technical or organisational safeguards; or",
                "(d) another transfer mechanism permitted by the GDPR.",
                "10.3 You may contact info@tera-fit.eu for further information about the safeguards relevant to your personal data.",
            ],
        },
        {
            type: "text",
            title: "11. Data Retention",
            bullets: [
                "11.1 We keep personal data only for as long as reasonably necessary for the purposes described in this Policy and to meet applicable legal requirements.",
                "11.2 The following criteria apply:",
                "Account and profile data is generally retained while the Account remains active. After closure, data is deleted or anonymised unless limited retention is necessary for legal, security, accounting, fraud-prevention, or dispute purposes.",
                "Balance, payment, refund, and transaction records are retained for the period required by applicable tax, accounting, anti-fraud, payment, and consumer-protection laws.",
                "Order, Program, and delivery data is retained while needed to provide Account access, enable re-downloads, support the Program, and handle complaints or legal claims.",
                "Questionnaire and health-related data is retained only for as long as necessary to generate or prepare the Program, provide agreed Account functionality and support, and handle relevant legal claims. It will not be retained indefinitely merely because it was submitted.",
                "Consent and withdrawal records are retained for as long as necessary to demonstrate compliance and respect the user’s preferences.",
                "Support and complaint records are retained until the matter is resolved and for any additional period reasonably required for legal claims or compliance.",
                "Technical and security logs are retained for a limited period determined by security, fraud-prevention, diagnostic, and legal needs.",
                "Marketing data is retained until consent is withdrawn or an objection is made, subject to retention of a limited suppression record to prevent further marketing.",
                "11.3 When retention is no longer justified, personal data will be deleted, anonymised, or securely isolated from routine use.",
            ],
        },
        {
            type: "text",
            title: "12. Your Data-Protection Rights",
            description: "Subject to the GDPR and applicable law, you may have the right to:",
            bullets: [
                "obtain confirmation of whether we process your personal data and receive access to it;",
                "correct inaccurate or incomplete data;",
                "request deletion in applicable circumstances;",
                "restrict processing in applicable circumstances;",
                "object to processing based on legitimate interests;",
                "object at any time to direct marketing;",
                "withdraw consent where processing is based on consent;",
                "receive certain data in a structured, commonly used, machine-readable format and transmit it to another controller where data portability applies;",
                "lodge a complaint with a supervisory authority; and",
                "seek an effective judicial remedy.",
                "To exercise a right, contact info@tera-fit.eu. We may request information reasonably necessary to verify your identity. We will respond within the time required by law, normally within one month, subject to any lawful extension.",
                "These rights are not absolute. A request may be limited where another legal obligation, the rights of another person, fraud prevention, or the establishment, exercise, or defence of legal claims requires continued processing.",
            ],
        },
        {
            type: "text",
            title: "13. Account Closure",
            bullets: [
                "13.1 You may request Account closure by contacting info@tera-fit.eu or using an available Account function.",
                "13.2 Account closure does not necessarily result in immediate deletion of all records. Limited data may continue to be retained where required for transactions, unused Balance, accepted Orders, refunds, tax and accounting compliance, fraud prevention, complaints, or legal claims.",
                "13.3 Remaining Balance and incomplete Orders will be handled under the Terms, Refund Policy, and applicable law.",
            ],
        },
        {
            type: "text",
            title: "14. Marketing Communications",
            bullets: [
                "14.1 We may send service communications necessary for your Account, security, Balance, payments, Orders, Program delivery, support, or legal notices. These are not marketing communications.",
                "14.2 Promotional messages will be sent only where a valid legal basis exists, including consent where required.",
                "14.3 You may unsubscribe using the link in a marketing email or by contacting info@tera-fit.eu. Opting out of marketing does not stop essential service messages.",
            ],
        },
        {
            type: "text",
            title: "15. Cookies and Similar Technologies",
            bullets: [
                "15.1 We use cookies and similar technologies to operate login sessions, remember preferences, support checkout, maintain security, and provide necessary website functions.",
                "15.2 Non-essential analytics or marketing technologies are used only where a valid legal basis exists, including consent where required.",
                "15.3 You can manage available choices through the cookie controls provided on the website and through your browser settings. Disabling necessary technologies may prevent parts of the Service from functioning.",
                "15.4 Further information is provided in the Tera Fit Cookie Policy.",
            ],
        },
        {
            type: "text",
            title: "16. Security and Payment Data",
            bullets: [
                "16.1 We use reasonable technical and organisational measures designed to protect personal data against unauthorised access, accidental loss, alteration, disclosure, or destruction.",
                "16.2 Measures may include access controls, authentication protections, encryption in transit where appropriate, logging, backups, least-privilege access, provider due diligence, and contractual confidentiality obligations.",
                "16.3 Payment-card transactions are handled through payment infrastructure operated in accordance with applicable PCI DSS requirements. This does not mean that Tera Fit independently stores or processes full card details.",
                "16.4 No system is completely secure. You are responsible for using a strong password, protecting your credentials, and notifying us promptly of suspected unauthorised Account access.",
            ],
        },
        {
            type: "text",
            title: "17. Children",
            bullets: [
                "17.1 The Service is intended only for persons aged 18 or over.",
                "17.2 We do not knowingly offer Accounts or Programs to children. If you believe that a child’s personal data has been submitted, contact info@tera-fit.eu so that we can investigate and take appropriate action.",
            ],
        },
        {
            type: "text",
            title: "18. Third-Party Links",
            description:
                "The Service may contain links to websites or services operated independently by third parties. Their processing is governed by their own privacy information. This Policy does not apply to an independent service merely because Tera Fit links to it.",
        },
        {
            type: "text",
            title: "19. Changes to This Policy",
            bullets: [
                "19.1 We may update this Policy to reflect changes in law, technology, providers, processing activities, or the Service.",
                "19.2 The current version will be published with a revised effective date. Where a change materially affects your rights or the way we process personal data, we will provide additional notice where required.",
                "19.3 Where processing requires consent, a material change will not be treated as accepted merely because you continue using the Service. New consent will be requested where legally required.",
            ],
        },
        {
            type: "text",
            title: "20. Complaints and Contact",
            description:
                "Questions, requests, and complaints may be sent to:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "You also have the right to lodge a complaint with the State Data Protection Inspectorate of the Republic of Lithuania or, where applicable, the supervisory authority in the EU or EEA country where you habitually reside, work, or believe an infringement occurred.\n\nInformation about the Lithuanian supervisory authority is available at vdai.lrv.lt.",
        },
    ],
};

export default privacyPolicySchema;
