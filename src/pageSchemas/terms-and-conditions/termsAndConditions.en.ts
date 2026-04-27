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
            "These Terms and Conditions govern your access to and use of the Tera Fit website, platform, account area, forms, checkout, and related digital fitness services.",
        keywords: [
            "terms and conditions",
            "tera fit",
            "tokens",
            "fitness platform",
            "digital fitness services",
            "training program",
            "refund policy",
            "user account",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `Terms and Conditions – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Full Terms and Conditions for the Tera Fit website, platform, account area, forms, checkout, and related digital fitness services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description:
                "Effective date: 26 March 2026\n\nThese Terms and Conditions (“Terms”) govern your access to and use of the Tera Fit website, platform, account area, forms, checkout, and related digital fitness services available at tera-fit.eu (the “Service”).\n\nThe Service is operated by:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company number: ${COMPANY_NUMBER}\n` +
                `Address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "Throughout these Terms, “Company”, “we”, “us”, and “our” refer to LOOTERA IT MB. “You” and “your” refer to the person or entity accessing or using the Service.\n\nBy accessing or using the Service, creating an Account, purchasing Tokens, submitting information for a training program, redeeming Tokens, or placing an Order through the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Service.",
        },

        {
            type: "text",
            title: "1. Definitions",
            description: "For the purposes of these Terms:",
            bullets: [
                "Account means your registered user account on the Service.",
                "AI Program means a Program generated, supported, or assisted by automated tools or artificial intelligence features available through the Service.",
                "Order means a completed purchase of Tokens and/or a completed redemption of Tokens for a Program or another paid Service.",
                "Program means any digital fitness-related product or content supplied through the Service, including personalised or non-personalised training plans, workout routines, recommendations, schedules, guidance, and downloadable digital files such as PDFs.",
                "Service means the Tera Fit website, platform, account area, forms, checkout, digital content, Programs, Tokens, and all related products, features, and services made available through tera-fit.eu.",
                "Specialist Program means a Program prepared, reviewed, or structured by a human specialist, trainer, coach, or other relevant service provider available through the Service.",
                "Tokens means the internal digital credits used within the Service to purchase or redeem paid features, Programs, or related digital services. Tokens are an internal accounting mechanism only.",
            ],
        },

        {
            type: "text",
            title: "2. Eligibility, Account Registration, and Prohibited Jurisdictions",
            bullets: [
                "2.1 You must be at least 18 years old to use the Service, create an Account, purchase Tokens, or place an Order.",
                "2.2 If you use the Service on behalf of a company or other legal entity, you represent and warrant that you have authority to bind that entity to these Terms.",
                "2.3 You must provide accurate, current, and complete information when registering an Account, completing forms, submitting intake information, purchasing Tokens, redeeming Tokens, or placing an Order.",
                "2.4 You are responsible for maintaining the confidentiality of your login credentials and for all activity carried out through your Account.",
                "2.5 You must promptly notify us at info@tera-fit.eu if you suspect unauthorised access to your Account or any other security breach.",
                "2.6 The Service is not intended to be offered, accessed, purchased, or used in any country, territory, or jurisdiction where such access, purchase, use, delivery, or provision would be prohibited by applicable law, sanctions, export control rules, payment restrictions, or other legal or regulatory requirements.",
                "2.7 You must not use the Service if you are located in, resident in, established in, or accessing the Service from any jurisdiction where doing so would be unlawful or restricted.",
                "2.8 We may refuse registration, suspend an Account, cancel an Order, block access, require verification, or decline to provide the Service where reasonably necessary for security, fraud prevention, payment compliance, sanctions compliance, legal compliance, or operational reasons.",
            ],
        },

        {
            type: "text",
            title: "3. Nature of the Service",
            bullets: [
                "3.1 Tera Fit is a digital fitness platform through which users may purchase Tokens and redeem them for Programs and related digital fitness services.",
                "3.2 The Service is provided online only. Unless expressly stated otherwise, we do not sell, ship, or deliver physical goods.",
                "3.3 The Service may include both AI-assisted and human-prepared outputs. The format, features, level of personalisation, and method of delivery may vary depending on the selected product, Program, or service type.",
                "3.4 Programs may be generated automatically, prepared by specialists, or produced through a combination of automated tools and human input, depending on the option selected by you through the Service.",
                "3.5 We may change, update, improve, limit, suspend, or discontinue any part of the Service at any time for legal, technical, security, operational, or commercial reasons.",
            ],
        },

        {
            type: "text",
            title: "4. Tokens",
            bullets: [
                "4.1 Tokens are prepaid internal digital credits used solely within the Service.",
                "4.2 Tokens are not legal tender, electronic money, payment instruments, bank deposits, investments, securities, cryptoassets, or financial products.",
                "4.3 Tokens:",
                "(a) do not accrue interest;",
                "(b) have no independent cash value outside the Service;",
                "(c) are not transferable unless we expressly agree otherwise in writing;",
                "(d) cannot be resold, assigned, traded, withdrawn, or exchanged outside the Service; and",
                "(e) may only be used for eligible paid features, Programs, or services made available through the Service.",
                "4.4 The available Token packages, applicable pricing, supported currencies, and payment details will be shown to you before payment is completed.",
                "4.5 Tokens are credited to your Account after successful payment authorisation and processing.",
                "4.6 Tokens are deducted when you redeem them for a Program or other paid Service, or when performance of the relevant digital service begins.",
                "4.7 We may offer promotional, discounted, or bonus Tokens. Unless expressly stated otherwise, promotional or bonus Tokens are non-refundable, non-transferable, cannot be exchanged for cash, and may be subject to separate conditions or expiry periods.",
                "4.8 We reserve the right to correct Token balances affected by manifest error, technical malfunction, payment reversal, chargeback, fraud, abuse, unauthorised activity, or other misuse of the Service.",
            ],
        },

        {
            type: "text",
            title: "5. Orders, Pricing, Accepted Currencies, and Payment",
            bullets: [
                "5.1 All Orders are subject to our acceptance.",
                "5.2 We may refuse, cancel, reverse, or place an Order on hold where reasonably necessary, including in cases of suspected fraud, abuse, payment issues, inaccurate information, technical errors, prohibited jurisdiction concerns, sanctions or compliance concerns, or legal requirements.",
                "5.3 Prices, available Token packages, redemption structures, and fees displayed on the Service may change from time to time. Changes apply prospectively and do not affect an Order already accepted, except where there is an obvious pricing, technical, or display error.",
                "5.4 The Service supports payments in EUR, GBP, and USD, where such currencies are made available through the Service or checkout. The currency selected or displayed at checkout will apply to the relevant transaction.",
                "5.5 Currency availability may depend on technical, payment provider, location, or operational factors. We do not guarantee that all currencies will be available for every user, payment method, or transaction at all times.",
                "5.6 You are responsible for reviewing the final price, currency, applicable taxes, and payment details before completing your purchase.",
                "5.7 You are responsible for ensuring that your payment method is valid, authorised, and has sufficient funds or credit available.",
                "5.8 If a payment is reversed, charged back, disputed without valid basis, or later found to be unauthorised, we may suspend your Account, cancel related access, reverse the relevant Token credit, withhold delivery, disable access to delivered or pending Services, or take reasonable recovery measures to the extent permitted by law.",
                "5.9 Any taxes, if applicable, will be shown as required before you complete the transaction.",
            ],
        },

        {
            type: "text",
            title: "6. Order Delivery and Digital Fulfilment",
            bullets: [
                "6.1 All Tokens, Programs, and related Services are delivered digitally only.",
                "6.2 Purchased Tokens are normally credited electronically to your Account after successful payment confirmation.",
                "6.3 A Program Order is considered placed once:",
                "(a) you have submitted the required intake, questionnaire, or other requested information;",
                "(b) you have sufficient Tokens in your Account or have otherwise completed the required payment step; and",
                "(c) you confirm the relevant purchase or redemption through the Service.",
                "6.4 Delivery or performance of a Program begins after we receive the information reasonably required to provide that Program and after the relevant payment or Token redemption step has been completed.",
                "6.5 Programs are delivered electronically through the Service, including by making them available in your Account, dashboard, download area, or by another digital delivery method designated on the Service.",
                "6.6 Delivery times may vary depending on the selected service type, the completeness and accuracy of your submitted information, specialist availability, internal review, technical factors, system load, payment verification, and other operational circumstances.",
                "6.7 Any timeframe displayed on the Service is an estimate only unless we expressly state otherwise.",
                "6.8 A Program is deemed delivered when it has been made available to you electronically through the designated delivery method.",
                "6.9 You are responsible for ensuring that the information you submit is accurate, complete, consistent, and suitable for processing. We are not responsible for delays, unsuitable outputs, or delivery issues caused by incomplete, inconsistent, inaccurate, or misleading information submitted by you.",
                "6.10 If delivery fails due to a technical issue attributable to us, we may, at our discretion and where appropriate, re-deliver the Program, correct the issue, restore the relevant Tokens, or provide another reasonable remedy.",
            ],
        },

        {
            type: "text",
            title: "7. Immediate Digital Delivery, Withdrawal Rights, and Refunds",
            bullets: [
                "7.1 Nothing in these Terms limits any mandatory consumer rights that apply to you under applicable law.",
                "7.2 Before completing a purchase or redemption that involves immediate digital delivery or immediate performance of a digital service, you may be required to provide a separate express acknowledgement at checkout or through the Service.",
                "7.3 By selecting the relevant checkbox or otherwise confirming your express consent, you agree that Tera Fit may begin providing the digital content or digital service immediately after your purchase or redemption.",
                "7.4 The checkout acknowledgement may include wording such as:",
                "“I expressly agree that Tera Fit may begin providing the digital service immediately after my purchase. I acknowledge that once the digital content or service has been delivered or performance has begun, I may lose my right of withdrawal.”",
                "7.5 Where you purchase Tokens and do not redeem or use them, you may have a statutory right of withdrawal or cancellation where required by applicable consumer law, provided the Tokens have not been used, spent, redeemed, consumed, or otherwise applied to a Program or paid Service.",
                "7.6 Where you redeem Tokens for digital content or request immediate performance of a digital service, you acknowledge that your statutory withdrawal or cancellation right may be lost once delivery or performance begins, to the extent permitted by applicable law.",
                "7.7 Used Tokens are non-refundable except:",
                "(a) where required by applicable law;",
                "(b) where we fail to provide the purchased Service;",
                "(c) where a material technical error attributable to us prevents delivery and no reasonable correction or re-delivery is possible; or",
                "(d) where our Refund Policy expressly states otherwise.",
                "7.8 If you believe that a Program was not delivered, is materially defective, or is materially not as described, you must contact us at info@tera-fit.eu and provide sufficient details for review.",
                "7.9 We may refuse a refund request where the issue results from:",
                "(a) your change of mind after delivery or performance has begun;",
                "(b) inaccurate, incomplete, contradictory, or misleading information submitted by you;",
                "(c) dissatisfaction based solely on subjective preference where the Service was substantially provided as described;",
                "(d) your failure to use, download, access, or review a delivered Program;",
                "(e) your misuse of the Service;",
                "(f) a payment dispute, chargeback, or reversal submitted without valid basis; or",
                "(g) circumstances outside our reasonable control.",
                "7.10 Additional refund procedures, eligibility rules, review timelines, and limitations are set out in our Refund Policy.",
            ],
        },

        {
            type: "text",
            title: "8. Health, Fitness, and Medical Disclaimer",
            bullets: [
                "8.1 The Service and all Programs are provided for general fitness, educational, and informational purposes only.",
                "8.2 The Service does not provide medical advice, diagnosis, treatment, rehabilitation advice, physiotherapy advice, mental health care, emergency services, or any substitute for professional medical assessment.",
                "8.3 You should consult an appropriately qualified healthcare professional before starting or changing any exercise, nutrition, or wellness routine, especially if you:",
                "(a) have any illness, injury, disability, or medical condition;",
                "(b) are pregnant or postpartum;",
                "(c) are taking medication;",
                "(d) have a history of cardiovascular, respiratory, musculoskeletal, neurological, or other relevant health issues; or",
                "(e) have any doubt about whether exercise is suitable for you.",
                "8.4 Physical exercise involves inherent risks, including the risk of injury, illness, discomfort, overexertion, and adverse health effects.",
                "8.5 By using the Service, you acknowledge and accept those risks and confirm that you are responsible for deciding whether any Program is suitable for you.",
                "8.6 You are solely responsible for exercising within your own abilities and limits, using correct technique, seeking professional advice where needed, and stopping activity if you experience pain, dizziness, shortness of breath, chest discomfort, faintness, unusual fatigue, or other concerning symptoms.",
                "8.7 To the fullest extent permitted by law, we are not responsible for any injury, health issue, loss, or damage arising from your participation in exercise or your use of any Program without appropriate professional or medical advice.",
            ],
        },

        {
            type: "text",
            title: "9. User Inputs and Responsibilities",
            bullets: [
                "9.1 You are solely responsible for all information, responses, content, and materials you submit through the Service.",
                "9.2 You represent and warrant that your submissions:",
                "(a) are accurate and not misleading to the best of your knowledge;",
                "(b) are complete enough for the purpose for which they are submitted;",
                "(c) do not infringe third-party rights;",
                "(d) are lawful; and",
                "(e) do not contain malicious code or harmful material.",
                "9.3 You must not use the Service:",
                "(a) unlawfully or fraudulently;",
                "(b) to upload false, misleading, incomplete, or harmful information;",
                "(c) to interfere with the operation, security, or integrity of the Service;",
                "(d) to gain unauthorised access to systems, accounts, or data;",
                "(e) to copy, scrape, reverse engineer, or commercially exploit the Service or its outputs without authorisation;",
                "(f) to resell, redistribute, or commercially provide Programs to third parties without our written consent; or",
                "(g) in a way that could damage our reputation, infrastructure, legal position, or ability to provide the Service.",
            ],
        },

        {
            type: "text",
            title: "10. Intellectual Property Rights",
            bullets: [
                "10.1 All intellectual property rights in the Service, including its software, design, content, branding, structure, text, graphics, databases, and underlying systems, are owned by us or licensed to us.",
                "10.2 Subject to your compliance with these Terms and completion of the relevant payment or redemption, we grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable licence to use the delivered Program for your personal, non-commercial use only.",
                "10.3 Unless we expressly agree otherwise in writing, you must not:",
                "(a) reproduce, publish, distribute, sell, licence, sublicense, rent, or commercially exploit any Program or other Service output;",
                "(b) remove proprietary notices;",
                "(c) share purchased Programs as part of a coaching, resale, or commercial offering;",
                "(d) make Programs publicly available online; or",
                "(e) create derivative commercial products based on Service outputs.",
                "10.4 You retain ownership of materials that you lawfully submit to the Service. However, you grant us a non-exclusive, worldwide, royalty-free licence to use, host, store, reproduce, adapt, and process such materials as reasonably necessary to operate, deliver, maintain, secure, and improve the Service, subject to applicable law and our Privacy Policy.",
            ],
        },

        {
            type: "text",
            title: "11. Service Availability and Technical Issues",
            bullets: [
                "11.1 We do not guarantee that the Service will be uninterrupted, error-free, secure, or available at all times.",
                "11.2 We may perform maintenance, updates, security actions, or technical interventions that temporarily affect access to the Service.",
                "11.3 We are not responsible for interruptions, delays, data transmission failures, or service failures caused by internet outages, device issues, browser incompatibility, user-side software problems, payment provider issues, force majeure events, or failures of third-party providers outside our reasonable control.",
                "11.4 We may take reasonable steps to restore access or correct technical issues, but we do not guarantee that all issues can be resolved within a specific timeframe.",
            ],
        },

        {
            type: "text",
            title: "12. Warranties and Disclaimers",
            bullets: [
                "12.1 We warrant that we are entitled to provide the Service and grant the rights expressly stated in these Terms.",
                "12.2 Except as expressly provided in these Terms and to the fullest extent permitted by law, the Service and all Programs are provided on an “as is” and “as available” basis.",
                "12.3 We do not guarantee:",
                "(a) any specific fitness, body composition, strength, performance, appearance, weight loss, health, or wellness result;",
                "(b) that any Program will be suitable for every user;",
                "(c) that any AI-generated, automated, or specialist-prepared output will be free from all error, omission, or subjective disagreement;",
                "(d) that the Service will meet every personal preference, expectation, or training style; or",
                "(e) uninterrupted access to the Service.",
                "12.4 Any examples, testimonials, descriptions, or promotional materials on the Service are provided for general information and do not guarantee that you will achieve the same or similar results.",
            ],
        },

        {
            type: "text",
            title: "13. Limitation of Liability",
            bullets: [
                "13.1 Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law, including liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation, or any other liability that cannot lawfully be excluded.",
                "13.2 Subject to clause 13.1, our total aggregate liability arising out of or in connection with the Service, any Order, or these Terms shall not exceed the total amount actually paid by you to us through the Service during the 12 months preceding the event giving rise to the claim.",
                "13.3 Subject to clause 13.1, we shall not be liable for any indirect, incidental, special, consequential, or punitive loss, or for any loss of profit, revenue, business, contracts, goodwill, opportunity, data, or anticipated savings.",
                "13.4 If you are a consumer, this clause does not affect rights that cannot be waived or limited under mandatory consumer law.",
            ],
        },

        {
            type: "text",
            title: "14. Indemnity",
            bullets: [
                "14.1 To the extent permitted by law, you agree to indemnify and hold harmless the Company and its directors, officers, employees, contractors, and agents from and against claims, losses, liabilities, damages, and reasonable costs arising out of or connected with:",
                "(a) your breach of these Terms;",
                "(b) your unlawful or improper use of the Service;",
                "(c) your infringement of third-party rights;",
                "(d) false, unlawful, incomplete, or misleading information submitted by you; or",
                "(e) your unauthorised commercial use, resale, or redistribution of any Program or Service output.",
            ],
        },

        {
            type: "text",
            title: "15. Privacy and Data Protection",
            bullets: [
                "15.1 We process personal data in accordance with our Privacy Policy and applicable data protection law, including the EU General Data Protection Regulation (GDPR) and applicable laws of the Republic of Lithuania.",
                "15.2 By using the Service, you acknowledge that your personal data may be processed for account administration, payment handling, service delivery, customer support, security, fraud prevention, legal compliance, and related legitimate business purposes as described in our Privacy Policy.",
                "15.3 Where you submit fitness, lifestyle, health-related, or questionnaire information through the Service, such information will be processed only as reasonably necessary to provide, personalise, operate, secure, and improve the Service, subject to applicable law and our Privacy Policy.",
            ],
        },

        {
            type: "text",
            title: "16. Third-Party Services and Links",
            bullets: [
                "16.1 The Service may use or contain links to third-party providers and services, including payment processors, hosting providers, communication tools, analytics services, technical infrastructure providers, and external websites.",
                "16.2 We do not control third-party services or websites and are not responsible for their content, availability, actions, omissions, security, or privacy practices.",
                "16.3 Your use of third-party services may be subject to their own separate terms and policies.",
            ],
        },

        {
            type: "text",
            title: "17. Suspension and Termination",
            bullets: [
                "17.1 We may suspend, restrict, or terminate your access to the Service or your Account with immediate effect where reasonably necessary, including where:",
                "(a) you breach these Terms;",
                "(b) we suspect fraud, abuse, unlawful activity, or unauthorised payment activity;",
                "(c) your conduct creates security, legal, operational, payment, compliance, or reputational risk;",
                "(d) payment has been reversed or is under dispute;",
                "(e) you are located in, established in, or accessing the Service from a prohibited or restricted jurisdiction; or",
                "(f) we are required or reasonably expected to do so by law, payment provider requirements, sanctions rules, or a competent authority.",
                "17.2 We may suspend delivery of a Program while investigating suspected abuse, chargeback activity, unauthorised payments, prohibited jurisdiction issues, or materially inaccurate user information.",
                "17.3 Suspension or termination does not affect rights, remedies, or obligations that accrued before the date of suspension or termination.",
                "17.4 Clauses that by their nature should survive termination will continue in force, including clauses concerning payment, refunds, liability, intellectual property, dispute resolution, indemnity, and data protection.",
            ],
        },

        {
            type: "text",
            title: "18. Changes to the Terms",
            bullets: [
                "18.1 We may update these Terms from time to time for legal, regulatory, technical, commercial, or operational reasons.",
                "18.2 The most current version will be published on the Service with the revised effective date.",
                "18.3 Where changes are material, we may provide additional notice by email, through your Account, or on the website.",
                "18.4 Your continued use of the Service after the updated Terms take effect constitutes acceptance of the revised Terms.",
                "18.5 If you do not agree to the updated Terms, you must stop using the Service.",
            ],
        },

        {
            type: "text",
            title: "19. Notices",
            bullets: [
                "19.1 Notices to us must be sent to info@tera-fit.eu, unless we specify another contact method.",
                "19.2 We may send notices to you using the email address associated with your Account, by in-service notification, or by posting notice on the Service.",
                "19.3 You are responsible for keeping your Account contact details accurate and up to date.",
            ],
        },

        {
            type: "text",
            title: "20. Governing Law and Jurisdiction",
            bullets: [
                "20.1 These Terms and any non-contractual obligations arising out of or in connection with them shall be governed by the laws of the Republic of Lithuania.",
                "20.2 If you are acting in the course of business, the courts of the Republic of Lithuania shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms.",
                "20.3 If you are a consumer, nothing in these Terms deprives you of any mandatory protections granted by the laws of your country of habitual residence where such protections apply and cannot be excluded by contract.",
                "20.4 Consumer disputes may also be resolved through applicable out-of-court consumer dispute mechanisms where required or permitted by law.",
            ],
        },

        {
            type: "text",
            title: "21. Miscellaneous",
            bullets: [
                "21.1 If any provision of these Terms is found invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.",
                "21.2 Our delay or failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other right.",
                "21.3 You may not assign, transfer, or otherwise dispose of your rights or obligations under these Terms without our prior written consent.",
                "21.4 We may assign or transfer our rights and obligations under these Terms in connection with a merger, acquisition, restructuring, business transfer, sale of assets, or transfer of the Service.",
                "21.5 These Terms, together with any policies expressly referenced in them, constitute the entire agreement between you and us regarding the Service and supersede prior discussions or understandings relating to the same subject matter.",
            ],
        },

        {
            type: "text",
            title: "22. Contact Details",
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

export default termsSchema;
