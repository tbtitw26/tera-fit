import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Terms and Conditions – ${COMPANY_NAME ?? "Tera Fit"}`,
        description:
            "These Terms and Conditions govern access to and use of the Tera Fit website, user accounts, balance functionality, order forms, checkout, and digital fitness services.",
        keywords: [
            "terms and conditions",
            "tera fit",
            "balance",
            "AI program",
            "trainer program",
            "digital fitness services",
            "training program",
            "user account",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `Terms and Conditions – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Full Terms and Conditions for Tera Fit accounts, Balance top-ups, AI-generated programs, and trainer-prepared programs.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description:
                "Effective date: 11 September 2026\n\nThese Terms and Conditions (the “Terms”) govern access to and use of the Tera Fit website, user accounts, balance functionality, order forms, checkout, and digital fitness services available through tera-fit.eu (together, the “Service”).\n\nThe Service is operated by:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "In these Terms, “Tera Fit”, “Company”, “we”, “us”, and “our” mean MB “Lootera IT”. “You” and “your” mean the person using the Service.\n\nBy creating an Account, purchasing Balance, or placing an Order, you agree to these Terms. If you do not agree, you must not use the Service.",
        },
        {
            type: "text",
            title: "1. Definitions",
            description: "For the purposes of these Terms:",
            bullets: [
                "Account means a registered user account on the Service.",
                "AI Program means a digital fitness program generated automatically by artificial intelligence on the basis of information selected or submitted by the user. An AI Program is not reviewed or approved by a Trainer before delivery.",
                "Balance means prepaid value credited to an Account and available solely for purchasing eligible Programs and add-ons through Tera Fit.",
                "Order means a confirmed request for an AI Program, Trainer Program, add-on, or other paid Service, for which the applicable amount has been deducted from the user’s Balance or otherwise paid.",
                "Program means an AI Program or a Trainer Program supplied digitally through the Service, normally as a downloadable PDF or another format identified before ordering.",
                "Trainer means a human fitness specialist made available for selection through the Service.",
                "Trainer Program means a personalised fitness program prepared by the Trainer selected by the user, based on the information submitted with the Order.",
            ],
        },
        {
            type: "text",
            title: "2. Eligibility and Account Registration",
            bullets: [
                "2.1 You must be at least 18 years old and legally capable of entering into a binding contract to create an Account, purchase Balance, or place an Order.",
                "2.2 You must provide accurate, current, and complete information when registering, purchasing Balance, completing a questionnaire, or placing an Order.",
                "2.3 You are responsible for keeping your login credentials confidential and for activity carried out through your Account. You must notify us promptly at info@tera-fit.eu if you suspect unauthorised access or misuse.",
                "2.4 You may not create an Account or use the Service from a jurisdiction in which the Service, payment, or delivery would be unlawful or prohibited by applicable sanctions, export controls, payment restrictions, or other legal requirements.",
                "2.5 We may refuse registration, require reasonable verification, suspend access, or decline an Order where reasonably necessary for security, fraud prevention, payment compliance, sanctions compliance, legal compliance, or the protection of users and the Service.",
            ],
        },
        {
            type: "text",
            title: "3. Nature of the Service",
            bullets: [
                "3.1 Tera Fit provides digital fitness programs. No physical goods are supplied unless expressly stated otherwise before purchase.",
                "3.2 Before placing an Order, you choose between:",
                "(a) an AI Program, generated automatically without Trainer review; or",
                "(b) a Trainer Program, prepared by the human Trainer you select.",
                "3.3 The Service must present the selected Program type, its main features, price, expected delivery method, and any available add-ons before the Order is confirmed.",
                "3.4 AI Programs and Trainer Programs are different services. Their preparation method, delivery time, degree of individualisation, available add-ons, and price may differ.",
                "3.5 Tera Fit does not provide live personal training, medical treatment, diagnosis, physiotherapy, rehabilitation, emergency assistance, or regulated healthcare services.",
            ],
        },
        {
            type: "text",
            title: "4. AI Programs",
            bullets: [
                "4.1 An AI Program is created entirely by automated artificial-intelligence systems using the information you submit or select, including your goals, experience, schedule, available equipment, preferences, and stated limitations.",
                "4.2 No Trainer or other human fitness specialist reviews, verifies, or approves an AI Program before it is supplied to you.",
                "4.3 AI-generated content may contain inaccuracies, unsuitable recommendations, omissions, inconsistencies, or other errors. You must review the Program carefully and use reasonable judgement before following it.",
                "4.4 An AI Program is not medical advice and must not be used to diagnose, treat, manage, or rehabilitate any illness, injury, disability, or medical condition.",
                "4.5 If you have an injury, medical condition, significant physical limitation, are pregnant or postpartum, take medication affecting exercise, or are unsure whether exercise is suitable for you, you should obtain advice from an appropriately qualified healthcare professional before using an AI Program.",
                "4.6 An AI Program is considered supplied when it is made available for access or download through your Account or another electronic delivery method identified by Tera Fit.",
            ],
        },
        {
            type: "text",
            title: "5. Trainer Programs",
            bullets: [
                "5.1 A Trainer Program is prepared by the human Trainer selected by you, rather than being generated and delivered as a fully automated AI Program.",
                "5.2 The Trainer prepares the Program using the information you submit, which may include your goals, experience, schedule, equipment, preferences, and disclosed injuries or limitations.",
                "5.3 The Trainer can rely only on the information made available through the Service. A Trainer does not conduct a medical examination, physical assessment, or in-person verification unless Tera Fit expressly offers and you separately purchase such a service.",
                "5.4 The target preparation time shown by Tera Fit is normally 12–24 hours after the Order is accepted and all reasonably required information has been received. Unless expressly identified as guaranteed at the time of ordering, this is an estimated timeframe and may be affected by incomplete information, Trainer availability, technical issues, or other reasonable operational circumstances.",
                "5.5 If additional information is reasonably required, preparation may be paused until you provide it.",
                "5.6 A Trainer Program is considered supplied when the completed Program is made available for access or download through your Account or another electronic delivery method identified by Tera Fit.",
            ],
        },
        {
            type: "text",
            title: "6. Health and Exercise Safety",
            bullets: [
                "6.1 Programs are supplied for general fitness, educational, and informational purposes. They are not a substitute for medical assessment or advice from a qualified healthcare professional.",
                "6.2 Physical exercise involves inherent risks, including injury, pain, overexertion, illness, and adverse health effects. No Program can eliminate those risks.",
                "6.3 You are responsible for:",
                "(a) providing accurate and complete information;",
                "(b) deciding whether you are physically able to perform an exercise;",
                "(c) using appropriate technique, equipment, loads, and supervision;",
                "(d) exercising within your abilities and limitations; and",
                "(e) stopping exercise and seeking appropriate assistance if you experience pain, dizziness, chest discomfort, faintness, unusual shortness of breath, or other concerning symptoms.",
                "6.4 Tera Fit and its Trainers do not guarantee any particular weight, appearance, strength, fitness, health, or performance result.",
                "6.5 Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence.",
            ],
        },
        {
            type: "text",
            title: "7. Balance",
            bullets: [
                "7.1 You may add Balance to your Account through the packages or custom top-up options displayed on the Service.",
                "7.2 Balance is an account-based prepayment that may be used only for eligible Programs, add-ons, and other Services made available by Tera Fit.",
                "7.3 Purchased Balance:",
                "(a) is linked to the Account to which it is credited;",
                "(b) does not accrue interest;",
                "(c) may not be sold, transferred, assigned, or exchanged between users;",
                "(d) may not be withdrawn or exchanged for cash except where a refund is required by law or available under our Refund Policy; and",
                "(e) does not expire while the Account remains active, subject to applicable law and these Terms.",
                "7.4 Balance is normally credited after successful payment authorisation and confirmation. A displayed or pending top-up does not constitute available Balance until payment has been successfully processed.",
                "7.5 Balance is deducted only when you confirm an eligible Order and the Service accepts it. If the available Balance is insufficient, the Order will not be accepted and no Program will be commissioned or generated.",
                "7.6 We may correct a Balance affected by a manifest pricing error, technical malfunction, duplicate credit, payment reversal, chargeback, fraud, unauthorised activity, or misuse. We will not remove lawfully purchased and unused Balance without a valid contractual or legal basis.",
                "7.7 Your Account may display Balance in a selected supported currency. Where currency conversion is used, the displayed amount may be calculated using the exchange rate applied by the Service at that time and may be subject to rounding. The applicable amount and currency must be shown before each payment or Balance deduction is confirmed.",
            ],
        },
        {
            type: "text",
            title: "8. Prices, Currencies, VAT, and Payment",
            bullets: [
                "8.1 The supported checkout currencies are EUR, GBP, and USD, where available. Currency availability may depend on location, technical configuration, or payment-method availability.",
                "8.2 Consumer prices displayed immediately before payment include applicable VAT or other taxes required to be included in the price. Where VAT is itemised at checkout, it forms part of the displayed total and is not an additional charge added after you have confirmed the price.",
                "8.3 Where indicative prices are converted between currencies, the final amount and currency shown at checkout apply to the transaction. Your bank or card issuer may apply its own exchange rate or fees, which are outside Tera Fit’s control.",
                "8.4 Payments are processed securely by an independent third-party payment service provider. Tera Fit does not store full payment-card numbers or card security codes.",
                "8.5 Payment-card transactions are processed through payment infrastructure operated in accordance with applicable PCI DSS requirements.",
                "8.6 You must use a valid and authorised payment method and review the package, Balance amount, currency, included VAT, and final total before selecting the payment button.",
                "8.7 Tera Fit, acting through MB “Lootera IT”, is the seller and merchant of record for purchases made through the Service unless checkout expressly and lawfully states otherwise.",
                "8.8 We may refuse, cancel, reverse, or place a payment or Order on hold where reasonably necessary because of suspected fraud, unauthorised use, payment failure, technical error, sanctions concerns, or legal requirements.",
            ],
        },
        {
            type: "text",
            title: "9. Placing an Order",
            bullets: [
                "9.1 Purchasing Balance and ordering a Program are separate transactions:",
                "(a) a Balance top-up adds prepaid value to your Account; and",
                "(b) a Program Order uses available Balance to purchase the selected AI Program or Trainer Program and any selected add-ons.",
                "9.2 Before a Program Order is confirmed, the Service will show or make available:",
                "(a) the selected Program type;",
                "(b) the selected Trainer, where applicable;",
                "(c) the principal configuration and selected add-ons;",
                "(d) the final price and currency;",
                "(e) the amount to be deducted from your Balance;",
                "(f) the expected delivery method and timeframe; and",
                "(g) any acknowledgement required for immediate digital supply or early commencement of a service.",
                "9.3 By selecting the clearly labelled final order button, you submit an Order and authorise Tera Fit to deduct the displayed amount from your Balance.",
                "9.4 An Order is accepted when the Service confirms acceptance, deducts the applicable Balance, and provides an electronic Order confirmation. Merely completing a questionnaire without confirming payment does not create a paid Order.",
                "9.5 We may contact you for clarification where submitted information is incomplete, inconsistent, or insufficient for a Trainer Program. We may reject an Order that cannot reasonably or safely be fulfilled, in which case the amount deducted for the unfulfilled Order will be restored to your Balance or refunded as appropriate.",
            ],
        },
        {
            type: "text",
            title: "10. Digital Delivery and Account Access",
            bullets: [
                "10.1 Balance, Programs, and add-ons are supplied digitally.",
                "10.2 Programs may be made available in your Account, dashboard, download area, or through another electronic method disclosed before ordering. We may also send an email notification when a Program is ready.",
                "10.3 You are responsible for maintaining access to your Account and using a compatible device, browser, and PDF reader or other software reasonably required to access the Program.",
                "10.4 If delivery fails because of a technical issue attributable to Tera Fit, we will take an appropriate corrective step, which may include restoring access, correcting or re-delivering the Program, restoring Balance, reducing the price, or providing a refund where required by law or our Refund Policy.",
            ],
        },
        {
            type: "text",
            title: "11. Consumer Withdrawal Rights",
            bullets: [
                "11.1 Nothing in these Terms limits mandatory consumer rights under Lithuanian or applicable EU law.",
                "11.2 Balance top-ups. If you are an EU consumer, you generally have 14 days from the conclusion of a distance contract to withdraw, subject to statutory exceptions. Purchased and unused Balance may be refunded where required by law. Using Balance to place an Order may affect the amount that remains refundable.",
                "11.3 AI Programs and other immediately supplied digital content. Where an AI Program or other digital content is generated or supplied during the withdrawal period, we will request any prior express consent and acknowledgement required by law. Where all legal conditions are met, including confirmation on a durable medium, you may lose the statutory right of withdrawal when supply or performance begins.",
                "11.4 Trainer Programs and other services. If you ask us to begin a Trainer Program during the withdrawal period, we may request your express instruction to begin early. If you withdraw before the Trainer Program has been fully performed, you may be required to pay a proportionate amount for work properly completed before your withdrawal, where permitted by law. The right of withdrawal is not treated as lost merely because preparation has begun. It may be lost after the service has been fully performed only where the statutory conditions have been satisfied.",
                "11.5 Details on requests, remedies, and processing are provided in our Refund Policy.",
            ],
        },
        {
            type: "text",
            title: "12. Refunds and Defective Services",
            bullets: [
                "12.1 Refunds, Balance restoration, correction, re-performance, price reduction, and contract termination are handled under our Refund Policy and mandatory consumer law.",
                "12.2 If a Program is not supplied, is inaccessible, materially differs from its description, or is otherwise not in conformity with the contract, contact info@tera-fit.eu and provide the Order reference and a description of the issue.",
                "12.3 Where legally applicable, we may first bring a defective digital Program or service into conformity within a reasonable time, free of charge, and without significant inconvenience. A price reduction or termination and refund may be available where correction is impossible, disproportionate, unsuccessful, unreasonably delayed, or where the lack of conformity is sufficiently serious.",
                "12.4 Subjective dissatisfaction or failure to achieve a desired result does not by itself establish that a Program is defective, provided the Program was supplied substantially as described and mandatory rights are respected.",
            ],
        },
        {
            type: "text",
            title: "13. User Information and Instructions",
            bullets: [
                "13.1 You are responsible for the information, selections, and materials you submit.",
                "13.2 You must not knowingly submit false, misleading, contradictory, unlawful, or third-party confidential information.",
                "13.3 Information about injuries, limitations, or health is optional unless identified as necessary for a particular Program. If relevant information is withheld or inaccurate, the Program may be unsuitable or impossible to provide safely.",
                "13.4 Tera Fit and Trainers may rely on the information you provide and are not responsible for problems caused by materially inaccurate, incomplete, or misleading submissions, except to the extent responsibility cannot lawfully be excluded.",
            ],
        },
        {
            type: "text",
            title: "14. Acceptable Use",
            description: "You must not:",
            bullets: [
                "use the Service unlawfully, fraudulently, or to harm another person;",
                "interfere with the operation, integrity, or security of the Service;",
                "obtain or attempt to obtain unauthorised access to an Account, system, or data;",
                "introduce malware or harmful code;",
                "scrape, copy, reverse engineer, or exploit the Service except where applicable law expressly permits it;",
                "resell, redistribute, publish, or commercially exploit a Program without our written permission; or",
                "use an AI Program or Trainer Program as medical advice or as a substitute for professional healthcare.",
            ],
        },
        {
            type: "text",
            title: "15. Intellectual Property",
            bullets: [
                "15.1 The Service, including its software, branding, website content, design, databases, and underlying technology, is owned by or licensed to Tera Fit and is protected by applicable intellectual-property laws.",
                "15.2 After valid payment, you receive a limited, non-exclusive, non-transferable licence to use the delivered Program for your personal, non-commercial purposes.",
                "15.3 You may download and print your Program for personal use, but you may not sell it, publish it publicly, sublicense it, use it in a commercial coaching service, or remove proprietary notices.",
                "15.4 You retain rights in material you lawfully submit. You grant Tera Fit a limited, non-exclusive licence to host, store, reproduce, and process that material only as reasonably necessary to operate, secure, and provide the Service, comply with law, and exercise or defend legal rights, as further described in our Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "16. Third-Party Services",
            bullets: [
                "16.1 Tera Fit may rely on third-party providers for payment processing, hosting, communications, security, analytics, PDF delivery, and AI functionality.",
                "16.2 Third-party providers may process data or provide technical infrastructure under their own terms or under contractual arrangements with Tera Fit. Further information is provided in our Privacy Policy.",
                "16.3 Tera Fit is not responsible for an independent third-party website or service that you choose to access outside the Service, but remains responsible for its own obligations to you under applicable law.",
            ],
        },
        {
            type: "text",
            title: "17. Availability and Changes to the Service",
            bullets: [
                "17.1 We aim to keep the Service available but do not guarantee uninterrupted or error-free operation.",
                "17.2 We may perform maintenance, security updates, or technical changes that temporarily affect access.",
                "17.3 We may change or discontinue features prospectively for legal, technical, security, operational, or commercial reasons. Changes will not remove rights already acquired under an accepted Order or reduce mandatory consumer rights.",
            ],
        },
        {
            type: "text",
            title: "18. Disclaimers and Liability",
            bullets: [
                "18.1 Nothing in these Terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, breach of mandatory consumer law, or any liability that cannot lawfully be excluded or limited.",
                "18.2 If you are a consumer, Tera Fit is responsible for loss or damage that is a foreseeable result of our breach of these Terms or failure to use reasonable care and skill. We are not responsible for loss that was not reasonably foreseeable, for business loss arising from personal use of the Service, or for loss caused by your unlawful use or materially inaccurate information.",
                "18.3 If you use the Service for business purposes, then, to the fullest extent permitted by law, our total aggregate liability arising from the Service and these Terms will not exceed the amount you paid to Tera Fit during the 12 months preceding the event giving rise to the claim. We will not be liable to a business user for indirect or consequential loss or loss of profit, revenue, goodwill, opportunity, or anticipated savings.",
                "18.4 AI Programs may contain errors and are provided subject to the specific disclosures in section 4. This does not remove any mandatory right to remedies where digital content or a digital service fails to conform to the contract.",
            ],
        },
        {
            type: "text",
            title: "19. Suspension and Termination",
            bullets: [
                "19.1 You may stop using the Service at any time and may request Account closure by contacting info@tera-fit.eu.",
                "19.2 We may suspend or restrict an Account where reasonably necessary because of a material breach of these Terms, fraud, unauthorised payments, chargebacks, security threats, unlawful activity, sanctions restrictions, or a legal requirement.",
                "19.3 Where reasonably possible, we will explain the basis for a suspension and provide an opportunity to resolve the issue. Immediate action may be taken where necessary to prevent harm, fraud, unlawful activity, or security risks.",
                "19.4 Account closure or suspension does not extinguish mandatory rights relating to unused purchased Balance, accepted Orders, refunds, personal data, or legal claims.",
            ],
        },
        {
            type: "text",
            title: "20. Privacy and Data Protection",
            bullets: [
                "20.1 We process personal data in accordance with our Privacy Policy and applicable data-protection law, including the General Data Protection Regulation.",
                "20.2 AI Programs require automated processing of the information submitted for the Program. Trainer Programs require relevant information to be made available to the selected Trainer. The Privacy Policy explains these activities in more detail.",
                "20.3 Health-related information may constitute special-category personal data. Where required, we will request explicit consent or rely on another specifically identified lawful condition before processing such information.",
            ],
        },
        {
            type: "text",
            title: "21. Changes to These Terms",
            bullets: [
                "21.1 We may update these Terms for legal, regulatory, technical, security, operational, or commercial reasons.",
                "21.2 The updated Terms will be published with a revised effective date. Material changes may also be notified by email or through the Account.",
                "21.3 Updated Terms apply prospectively. Terms applicable when an Order was accepted will continue to govern that Order unless a change is required by law or you expressly agree otherwise.",
            ],
        },
        {
            type: "text",
            title: "22. Complaints and Consumer Disputes",
            bullets: [
                "22.1 Please send complaints to info@tera-fit.eu. Include your Account email, Order or transaction reference, and a clear description of the issue.",
                "22.2 We will review consumer complaints free of charge and provide a reasoned written response within the period required by Lithuanian law, normally no later than 14 days after receiving the complaint.",
                "22.3 If a consumer dispute is not resolved directly, an eligible consumer may apply to the State Consumer Rights Protection Authority of the Republic of Lithuania through the applicable out-of-court dispute-resolution procedure. Information is available at vvtat.lrv.lt.",
            ],
        },
        {
            type: "text",
            title: "23. Governing Law and Jurisdiction",
            bullets: [
                "23.1 These Terms are governed by the laws of the Republic of Lithuania.",
                "23.2 If you are a consumer, this choice of law does not deprive you of mandatory protections available under the law of your country of habitual residence.",
                "23.3 Consumers may bring proceedings before courts having jurisdiction under applicable consumer law. Business disputes are subject to the courts of the Republic of Lithuania unless the parties agree otherwise in writing.",
            ],
        },
        {
            type: "text",
            title: "24. Miscellaneous",
            bullets: [
                "24.1 If any provision is held invalid or unenforceable, the remaining provisions remain effective.",
                "24.2 A delay in enforcing a right does not waive that right.",
                "24.3 You may not transfer your Account or contractual rights without our written consent. We may transfer our rights and obligations as part of a lawful business transfer, merger, or restructuring, provided this does not reduce your mandatory rights.",
                "24.4 These Terms, together with the Refund Policy, Privacy Policy, and any specific conditions shown and accepted before an Order, form the agreement between you and Tera Fit concerning the Service.",
            ],
        },
        {
            type: "text",
            title: "25. Contact",
            description:
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}`,
        },
    ],
};

export default termsSchema;
