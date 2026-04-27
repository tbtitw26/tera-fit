import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `Refund Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
        description:
            "Official Refund Policy for Tera Fit: refunds for Tokens, Programs, digital fitness services, and consumer rights.",
        keywords: [
            "refund policy",
            "tera fit",
            "tokens",
            "programs",
            "digital fitness services",
            "consumer rights",
            "refunds",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `Refund Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent refund policy for Tera Fit digital fitness services, Programs, and Token system.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Refund Policy",
            description:
                "Effective date: 26 March 2026\n\nThis Refund Policy applies to the digital services offered through Tera Fit at tera-fit.eu and is issued by:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company number: ${COMPANY_NUMBER}\n` +
                `Address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "Tera Fit provides digital fitness services only. We do not sell, ship, or deliver physical goods. As a result, this Policy governs refunds for digital services, Tokens, and Programs only. It does not create any right to return physical products.\n\nNothing in this Policy limits any mandatory rights you may have under the laws of the Republic of Lithuania or under applicable EU consumer protection law.",
        },
        {
            type: "text",
            title: "1. Summary",
            bullets: [
                "1.1 Refund requests are assessed in accordance with this Policy, our Terms and Conditions, applicable Lithuanian law, and mandatory EU consumer rights.",
                "1.2 Refunds, where approved, are usually processed within 5 to 10 business days after approval. The time for funds to appear in your account may vary depending on your bank, card issuer, or payment provider.",
                "1.3 Refunds will not exceed the amount originally paid by you for the relevant transaction.",
                "1.4 Tokens that have not been used, redeemed, spent, or consumed may be eligible for refund, subject to this Policy and applicable law.",
                "1.5 Tokens already used to obtain a Program or another paid digital service are generally non-refundable, except where required by law, where we fail to provide the purchased service, or where this Policy expressly states otherwise.",
                "1.6 Tokens are account-bound, non-transferable, and cannot be exchanged for cash except where required by law or expressly agreed by us.",
                "1.7 Promotional, discounted, or bonus Tokens are non-refundable and have no cash value unless the relevant promotion expressly states otherwise.",
                "1.8 Where you expressly agree to immediate digital delivery or immediate performance of a digital service and acknowledge that your withdrawal right may be lost, your statutory right to withdraw may end once delivery or performance begins, to the extent permitted by applicable law.",
                "1.9 Refund requests must be sent to info@tera-fit.eu with sufficient details to allow us to review the matter.",
            ],
        },
        {
            type: "text",
            title: "2. Scope of This Policy",
            bullets: [
                "2.1 This Policy applies to:",
                "(a) purchases of Tokens;",
                "(b) redemption of Tokens for Programs or other paid digital services;",
                "(c) digital fitness content, training plans, recommendations, downloadable PDFs, and related digital outputs supplied through Tera Fit; and",
                "(d) refund requests relating to digital services provided through the Service.",
                "2.2 This Policy applies to both AI-generated and specialist-prepared Programs made available through the Service.",
                "2.3 This Policy does not apply to third-party products, platforms, payment services, websites, or services purchased outside Tera Fit, even if they are linked from our website.",
            ],
        },
        {
            type: "text",
            title: "3. Definitions",
            description: "For the purposes of this Policy:",
            bullets: [
                "AI Program means a Program generated, supported, or assisted by automated tools or artificial intelligence features available through the Service.",
                "Custom or Specialist Program means a Program prepared, reviewed, adapted, or structured by a human coach, trainer, specialist, or service provider, including work involving manual review or personalised effort.",
                "Program means any digital fitness-related product or content supplied through the Service, including personalised or non-personalised training plans, workout guidance, recommendations, schedules, trackers, downloadable PDFs, and similar digital content.",
                "Promotional or Bonus Tokens means Tokens granted free of charge, at a discount, as part of a promotion, incentive, or goodwill gesture.",
                "Service means the Tera Fit website, platform, account area, forms, checkout, digital content, Tokens, Programs, and related digital services available through tera-fit.eu.",
                "Tokens means internal digital credits used solely within Tera Fit to obtain Programs and related paid digital services.",
                "Unused Tokens means Tokens credited to your Account that have not been redeemed, spent, consumed, or otherwise applied to a Program or paid Service.",
                "Used Tokens means Tokens that have been redeemed for a Program or another paid digital service, or where performance of the relevant digital service has already begun.",
            ],
        },
        {
            type: "text",
            title: "4. General Refund Principles",
            bullets: [
                "4.1 Refund limit. Any refund will be limited to the amount actually paid by you for the relevant transaction.",
                "4.2 Original payment method. Approved refunds are normally issued to the original payment method used for the transaction, unless this is not reasonably possible.",
                "4.3 Unused Tokens. Unused Tokens may be eligible for refund if you request a refund before they are redeemed, spent, consumed, or applied to a Program or paid Service.",
                "4.4 Used Tokens. Once Tokens have been used to obtain a Program or once performance of the relevant digital service has begun, those Tokens are generally non-refundable, except:",
                "(a) where required by applicable law;",
                "(b) where we fail to provide the purchased service;",
                "(c) where the delivered Program is materially defective;",
                "(d) where the delivered Program is materially not as described; or",
                "(e) where we expressly approve a refund at our discretion.",
                "4.5 Account-bound Tokens. Tokens are linked to the Account to which they were credited and may not be transferred to another user or account unless we expressly agree otherwise in writing.",
                "4.6 No cash-out. Tokens are not redeemable, withdrawable, or exchangeable for cash or any other currency except where required by law.",
                "4.7 Promotional or bonus Tokens. Promotional, discounted, or bonus Tokens are non-refundable, non-transferable, and have no cash value unless the relevant promotion expressly states otherwise.",
                "4.8 Immediate digital supply. If, at checkout or before fulfilment, you expressly request immediate supply of digital content or immediate performance of a digital service and acknowledge that your statutory withdrawal right may be lost, your right of withdrawal may no longer apply once delivery or performance begins, to the extent permitted by applicable law.",
                "4.9 Custom or specialist work. Where a Program involves personalised manual work, specialist review, or bespoke preparation, refunds may be refused once substantial work has begun, except where required by law or where the delivered output is materially defective or materially not as described.",
            ],
        },
        {
            type: "text",
            title: "5. Immediate Delivery and Withdrawal Acknowledgement",
            bullets: [
                "5.1 Tera Fit provides digital content and digital services. Some services may begin immediately after purchase, Token redemption, or submission of the required intake information.",
                "5.2 Before completing a purchase or redemption that involves immediate digital delivery or immediate performance, you may be required to provide a separate express acknowledgement through the Service.",
                "5.3 This acknowledgement may include wording such as:",
                "“I expressly agree that Tera Fit may begin providing the digital service immediately after my purchase. I acknowledge that once the digital content or service has been delivered or performance has begun, I may lose my right of withdrawal.”",
                "5.4 If you provide this acknowledgement and the digital content is delivered or performance of the digital service begins, your statutory right of withdrawal may be lost to the extent permitted by applicable consumer law.",
                "5.5 If you do not wish digital delivery or performance to begin immediately, you should not complete the purchase or redemption that requires such acknowledgement.",
            ],
        },
        {
            type: "text",
            title: "6. When Refunds May Be Approved",
            description:
                "We may approve a full or partial refund, replacement, re-delivery, correction, or restoration of Tokens where appropriate, including where:",
            bullets: [
                "6.1 you paid for Tokens but they were not credited to your Account due to a technical failure attributable to us;",
                "6.2 you were charged more than once for the same transaction and the duplicate charge was not intentional;",
                "6.3 you redeemed Tokens for a Program that was not delivered within a reasonable time and the failure is attributable to us;",
                "6.4 the delivered Program is materially corrupted, inaccessible, or technically unusable due to an issue attributable to us;",
                "6.5 the delivered Program materially differs from the service description shown at the time of purchase or redemption;",
                "6.6 we are unable to provide the purchased Service after accepting your Order;",
                "6.7 restoration of Tokens is a more appropriate remedy than a monetary refund; or",
                "6.8 a refund is otherwise required by applicable law.",
            ],
        },
        {
            type: "text",
            title: "7. When Refunds Will Normally Not Be Approved",
            description: "Refunds will normally not be approved where:",
            bullets: [
                "7.1 Tokens have already been used, redeemed, spent, or consumed, unless clause 6 applies or applicable law requires otherwise;",
                "7.2 you changed your mind after delivery began, after performance began, or after the Program was made available to you, where your withdrawal right has been validly lost under applicable law;",
                "7.3 the issue arises from incomplete, inaccurate, misleading, contradictory, or unsuitable information submitted by you;",
                "7.4 the Program substantially matches the service description, but you are dissatisfied due to personal preference, training style preference, subjective expectations, or desired results not being achieved;",
                "7.5 you did not use, download, open, review, or follow a Program after it was made available to you;",
                "7.6 the issue results from your device, software, internet connection, browser settings, email settings, or failure to follow access or download instructions;",
                "7.7 the claim concerns promotional, discounted, or bonus Tokens;",
                "7.8 a Custom or Specialist Program has already entered substantial preparation or delivery, unless the service is materially defective or materially not as described;",
                "7.9 you purchased Tokens in error but then used, redeemed, or consumed them;",
                "7.10 the request is based on circumstances outside our reasonable control; or",
                "7.11 we reasonably suspect fraud, abuse, manipulation, repeated bad-faith claims, or misuse of the refund process.",
            ],
        },
        {
            type: "text",
            title: "8. How to Request a Refund",
            bullets: [
                "8.1 To request a refund, you must contact us at info@tera-fit.eu.",
                "8.2 Your request should include, where applicable:",
                "(a) your Account email address;",
                "(b) your order or transaction reference;",
                "(c) the date of purchase;",
                "(d) the payment method used;",
                "(e) whether your request relates to Unused Tokens, Used Tokens, or a delivered Program;",
                "(f) a clear description of the issue; and",
                "(g) any supporting evidence, such as screenshots, file names, payment confirmation, delivery records, or a description of the technical problem.",
                "8.3 If you do not provide enough information for us to assess the request, we may ask for further details before making a decision.",
                "8.4 We may be unable to process or approve a refund request if the relevant transaction, Account, delivery, or technical issue cannot be reasonably identified.",
            ],
        },
        {
            type: "text",
            title: "9. Review Procedure and Decisions",
            bullets: [
                "9.1 We will review refund requests within a reasonable time.",
                "9.2 We may examine relevant records, including:",
                "(a) transaction logs;",
                "(b) Token credit and redemption history;",
                "(c) checkout and payment confirmations;",
                "(d) delivery records;",
                "(e) download, access, or availability timestamps;",
                "(f) Program generation or preparation records; and",
                "(g) correspondence and evidence provided by you.",
                "9.3 If a refund is approved, we will normally issue it to the original payment method used for the transaction, unless this is not reasonably possible.",
                "9.4 Where appropriate, instead of a monetary refund, we may:",
                "(a) re-deliver the Program;",
                "(b) correct the technical issue;",
                "(c) replace the Program;",
                "(d) restore the relevant Tokens to your Account; or",
                "(e) provide another reasonable remedy permitted by law.",
                "9.5 If we reject the request, we may provide a brief explanation of the outcome.",
                "9.6 A decision under this Policy does not limit any mandatory rights or remedies you may have under applicable consumer law.",
            ],
        },
        {
            type: "text",
            title: "10. Chargebacks, Fraud, and Abuse",
            bullets: [
                "10.1 If you open a chargeback or payment dispute with your payment provider, we may suspend the related refund review while the payment dispute is being handled.",
                "10.2 We may submit relevant evidence to the payment provider or financial institution, including transaction logs, checkout confirmations, delivery records, timestamps, Token history, and account activity records.",
                "10.3 We reserve the right to suspend access to the Service, reverse Token balances where justified, refuse future purchases, withhold pending delivery, or close Accounts where we reasonably suspect fraud, abuse, bad-faith refund claims, repeated unjustified chargebacks, unauthorised payment activity, or misuse of the Service.",
                "10.4 If a refund, chargeback, or payment reversal is granted after Tokens have been credited or used, we may reverse the relevant Token balance, restrict further use of the Account, or take reasonable recovery measures to the extent permitted by law.",
            ],
        },
        {
            type: "text",
            title: "11. Processing Time",
            bullets: [
                "11.1 If a refund is approved, we typically process it within 5 to 10 business days from the approval date.",
                "11.2 Actual receipt times depend on your payment provider, card issuer, bank, or payment method.",
                "11.3 We are not responsible for delays caused by third-party banking, card, or payment systems once the refund has been processed by us.",
                "11.4 If the original payment method is no longer available, we may require additional information to process the refund through another lawful and reasonable method.",
            ],
        },
        {
            type: "text",
            title: "12. Changes to This Policy",
            bullets: [
                "12.1 We may update this Refund Policy from time to time for legal, regulatory, technical, operational, or commercial reasons.",
                "12.2 The latest version will be published on the Service with the updated effective date.",
                "12.3 Any changes will apply prospectively unless otherwise required by law.",
                "12.4 Your continued use of the Service after an updated version is published constitutes acknowledgement of the updated Policy.",
            ],
        },
        {
            type: "text",
            title: "13. Governing Law and Consumer Rights",
            bullets: [
                "13.1 This Policy shall be governed by the laws of the Republic of Lithuania.",
                "13.2 Nothing in this Policy excludes, restricts, or limits any mandatory rights or remedies available to consumers under Lithuanian law or applicable EU law.",
                "13.3 If you are a consumer resident in another EU country, you may also benefit from mandatory consumer protections applicable in your country of habitual residence where such protections cannot be contractually excluded.",
                "13.4 Consumer disputes may also be resolved through applicable out-of-court consumer dispute mechanisms where required or permitted by law.",
            ],
        },
        {
            type: "text",
            title: "14. Contact Details",
            description: "For refund-related questions or requests, contact:",
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

export default refundPolicySchema;
