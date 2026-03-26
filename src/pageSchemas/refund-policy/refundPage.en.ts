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
        title: `Refund & Returns Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
        description:
            "Official Refund & Returns Policy for Tera Fit: refunds for tokens, digital fitness services, and consumer rights.",
        keywords: [
            "refund policy",
            "returns policy",
            "tera fit",
            "tokens",
            "digital fitness services",
            "consumer rights",
            "refunds",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `Refund & Returns Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent refund and returns policy for Tera Fit digital fitness services and token system.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Refund & Returns Policy",
            description:
                "Effective date: 26 March 2026\n\nThis Refund Policy applies to the digital services offered through Tera Fit at tera-fit.eu and is issued by:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company number: ${COMPANY_NUMBER}\n` +
                `Address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "Tera Fit provides digital fitness services only. No physical goods are sold or shipped. As a result, this Policy governs refunds only. It does not create any right to return physical products.\n\nNothing in this Policy limits any mandatory rights you may have under the laws of the Republic of Lithuania or under applicable EU consumer protection law.",
        },
        {
            type: "text",
            title: "1. Summary",
            bullets: [
                "1.1 Refund requests are assessed in accordance with this Policy, applicable Lithuanian law, and mandatory EU consumer rights.",
                "1.2 Refunds, where approved, are usually processed within 5 to 10 business days after approval. The time for funds to appear may vary depending on your payment provider.",
                "1.3 Refunds will not exceed the amount originally paid by you for the relevant transaction.",
                "1.4 Tokens already used to obtain a Program or other paid digital service are generally non-refundable, except where required by law or where we fail to provide the purchased service as described.",
                "1.5 Tokens are account-bound, non-transferable, and cannot be exchanged for cash except where required by law or expressly stated by us.",
                "1.6 Promotional or bonus Tokens are non-refundable, unless the relevant promotion expressly states otherwise.",
                "1.7 If you expressly request immediate supply of digital content or digital services and acknowledge the loss of your withdrawal right where applicable, your statutory right to withdraw may end once supply begins.",
                "1.8 Refund requests must be sent to info@tera-fit.eu with sufficient details to allow us to review the matter.",
            ],
        },
        {
            type: "text",
            title: "2. Scope",
            bullets: [
                "2.1 This Policy applies to:",
                "(a) purchases of Tokens;",
                "(b) redemption of Tokens for Programs or other digital services; and",
                "(c) refund requests relating to digital fitness content delivered through Tera Fit.",
                "2.2 This Policy applies to both AI-generated and specialist-prepared Programs made available through the Service.",
                "2.3 This Policy does not apply to third-party products or services purchased outside Tera Fit, even if linked from our website.",
            ],
        },
        {
            type: "text",
            title: "3. Definitions",
            description: "For the purposes of this Policy:",
            bullets: [
                "Tokens means internal digital credits used solely within Tera Fit to obtain Programs and related paid services.",
                "Unused Tokens means Tokens credited to your Account that have not been redeemed, spent, or consumed.",
                "Used Tokens means Tokens that have been redeemed for a Program or other paid digital service, or where performance of the relevant service has already begun.",
                "Program means any digital fitness-related product, including training plans, workout guidance, recommendations, schedules, trackers, downloadable PDFs, and similar content.",
                "Promotional or Bonus Tokens means Tokens granted free of charge, at a discount, or as part of a promotion, incentive, or goodwill gesture.",
                "Custom or Specialist Program means a Program prepared, reviewed, adapted, or structured by a human coach, trainer, or specialist, including work involving manual review or personalised effort.",
            ],
        },
        {
            type: "text",
            title: "4. General Refund Principles",
            bullets: [
                "4.1 Refund limit. Any refund will be limited to the amount actually paid by you for the relevant transaction.",
                "4.2 Used Tokens are generally non-refundable. Once Tokens have been used to obtain a Program or once performance of the relevant digital service has begun, those Tokens are generally non-refundable, except:",
                "(a) where required by applicable law;",
                "(b) where we fail to provide the purchased service;",
                "(c) where the delivered Program is materially defective; or",
                "(d) where the delivered Program is materially not as described.",
                "4.3 Unused Tokens. Unused Tokens may be eligible for refund if you request a refund before they are redeemed or used.",
                "4.4 Account-bound Tokens. Tokens are linked to the Account to which they were credited and may not be transferred to another user or account unless we expressly agree otherwise in writing.",
                "4.5 No cash-out. Tokens are not redeemable for cash or other currency except where required by law.",
                "4.6 Promotional or bonus Tokens. Promotional or bonus Tokens are non-refundable and have no cash value unless the relevant promotion expressly states otherwise.",
                "4.7 Immediate digital supply. If, at checkout or before fulfilment, you expressly request immediate supply of digital content or immediate performance of digital services and acknowledge that your statutory withdrawal right may be lost, then your right of withdrawal may no longer apply once supply or performance begins, to the extent permitted by law.",
                "4.8 Custom or specialist work. Where a Program involves personalised manual work, specialist review, or bespoke preparation, refunds may be refused once substantial work has begun, except where required by law or where the delivered output is materially defective or materially not as described.",
            ],
        },
        {
            type: "text",
            title: "5. When Refunds May Be Approved",
            description:
                "We may approve a full or partial refund, replacement, re-delivery, or restoration of Tokens where appropriate, including where:",
            bullets: [
                "5.1 you paid for Tokens but they were not credited to your Account due to a technical failure attributable to us;",
                "5.2 you redeemed Tokens for a Program that was not delivered within a reasonable time and the failure is attributable to us;",
                "5.3 the delivered Program is materially corrupted, inaccessible, or technically unusable due to an issue attributable to us;",
                "5.4 the delivered Program materially differs from the service description shown at the time of purchase;",
                "5.5 duplicate payment has been taken for the same transaction; or",
                "5.6 a refund is otherwise required by applicable law.",
            ],
        },
        {
            type: "text",
            title: "6. When Refunds Will Normally Not Be Approved",
            description: "Refunds will normally not be approved where:",
            bullets: [
                "6.1 Tokens have already been used or consumed, unless clause 5 applies or applicable law requires otherwise;",
                "6.2 you changed your mind after delivery began or after the Program was made available to you, where your withdrawal right has been validly lost under applicable law;",
                "6.3 the issue arises from incomplete, inaccurate, misleading, or contradictory information submitted by you;",
                "6.4 the Program matches the description generally, but you are dissatisfied due to personal preference, training style preference, or subjective expectations;",
                "6.5 the issue results from your device, software, internet connection, or failure to follow access or download instructions;",
                "6.6 the claim concerns promotional or bonus Tokens;",
                "6.7 a Custom or Specialist Program has already entered substantial preparation or delivery, unless the service is materially defective or not as described; or",
                "6.8 we reasonably suspect fraud, abuse, manipulation, or misuse of the refund process.",
            ],
        },
        {
            type: "text",
            title: "7. How to Request a Refund",
            bullets: [
                "7.1 To request a refund, you must contact us at info@tera-fit.eu.",
                "7.2 Your request should include, where applicable:",
                "(a) your Account email address;",
                "(b) your order or transaction reference;",
                "(c) the date of purchase;",
                "(d) whether your request relates to Unused Tokens, Used Tokens, or a delivered Program;",
                "(e) a clear description of the issue; and",
                "(f) any supporting evidence, such as screenshots, file names, payment confirmation, or a description of the technical problem.",
                "7.3 If you do not provide enough information for us to assess the request, we may ask for further details before making a decision.",
            ],
        },
        {
            type: "text",
            title: "8. Review Procedure and Decisions",
            bullets: [
                "8.1 We will review refund requests within a reasonable time.",
                "8.2 We may examine relevant records, including:",
                "(a) transaction logs;",
                "(b) Token credit and redemption history;",
                "(c) checkout and payment confirmations;",
                "(d) delivery records;",
                "(e) download or access timestamps; and",
                "(f) correspondence and evidence provided by you.",
                "8.3 If the refund is approved, we will normally issue it to the original payment method used for the transaction, unless this is not reasonably possible.",
                "8.4 Where appropriate, instead of a monetary refund, we may:",
                "(a) re-deliver the Program;",
                "(b) correct the technical issue;",
                "(c) replace the Program; or",
                "(d) restore the relevant Tokens to your Account.",
                "8.5 If we reject the request, we may provide a brief explanation of the outcome.",
            ],
        },
        {
            type: "text",
            title: "9. Chargebacks, Fraud, and Abuse",
            bullets: [
                "9.1 If you open a chargeback or payment dispute with your payment provider, we may suspend the related refund review while the payment dispute is being handled.",
                "9.2 We may submit relevant evidence to the payment provider or financial institution, including transaction logs, checkout confirmations, delivery records, timestamps, and account activity records.",
                "9.3 We reserve the right to suspend access to the Service, reverse Token balances where justified, refuse future purchases, or close Accounts where we reasonably suspect fraud, abuse, bad-faith refund claims, repeated unjustified chargebacks, or misuse of the Service.",
            ],
        },
        {
            type: "text",
            title: "10. Processing Time",
            bullets: [
                "10.1 If a refund is approved, we typically process it within 5 to 10 business days from the approval date.",
                "10.2 Actual receipt times depend on your payment provider, card issuer, bank, or payment method.",
                "10.3 We are not responsible for delays caused by third-party banking or payment systems once the refund has been processed by us.",
            ],
        },
        {
            type: "text",
            title: "11. Changes to This Policy",
            bullets: [
                "11.1 We may update this Refund Policy from time to time for legal, regulatory, operational, or commercial reasons.",
                "11.2 The latest version will be published on the Service with the updated effective date.",
                "11.3 Any changes will apply prospectively unless otherwise required by law.",
            ],
        },
        {
            type: "text",
            title: "12. Governing Law and Consumer Rights",
            bullets: [
                "12.1 This Policy shall be governed by the laws of the Republic of Lithuania.",
                "12.2 Nothing in this Policy excludes, restricts, or limits any mandatory rights or remedies available to consumers under Lithuanian law or applicable EU law.",
                "12.3 If you are a consumer resident in another EU country, you may also benefit from mandatory consumer protections applicable in your country of habitual residence where such protections cannot be contractually excluded.",
            ],
        },
        {
            type: "text",
            title: "13. Contact Details",
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