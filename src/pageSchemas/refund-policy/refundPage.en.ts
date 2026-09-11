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
            "Official Refund Policy for Tera Fit: withdrawal rights, Balance top-ups, AI Programs, Trainer Programs, remedies, and consumer rights.",
        keywords: [
            "refund policy",
            "tera fit",
            "balance",
            "AI program",
            "trainer program",
            "digital fitness services",
            "consumer rights",
            "refunds",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `Refund Policy – ${COMPANY_NAME ?? "Tera Fit"}`,
            description:
                "Transparent refund policy for Tera Fit digital fitness services, Programs, and Balance top-ups.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Refund Policy",
            description:
                "Effective date: 11 September 2026\n\nThis Refund Policy explains the circumstances in which a payment may be refunded, Balance may be restored, or another remedy may be provided for services purchased through tera-fit.eu.\n\nThe Service is operated by:\n" +
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}\n\n` +
                "Tera Fit provides digital services only. No physical products are supplied unless expressly stated otherwise. Nothing in this Policy excludes or restricts mandatory rights available under Lithuanian law, applicable EU consumer law, or other applicable law.",
        },
        {
            type: "text",
            title: "1. Definitions",
            description: "In this Policy:",
            bullets: [
                "Account means a registered Tera Fit user account.",
                "AI Program means a digital fitness program generated entirely by artificial intelligence from information selected or submitted by the user, without review or approval by a Trainer.",
                "Balance means prepaid value credited to an Account and available solely for purchasing eligible Tera Fit Programs, add-ons, and services.",
                "Order means a confirmed purchase of a Program, add-on, or other paid Service using available Balance or another accepted payment method.",
                "Program means an AI Program or Trainer Program supplied digitally through Tera Fit.",
                "Trainer Program means a personalised fitness program prepared by the human Trainer selected by the user.",
            ],
        },
        {
            type: "text",
            title: "2. Summary",
            bullets: [
                "2.1 Purchasing Balance and ordering a Program are separate transactions.",
                "2.2 Purchased and unused Balance may be refundable during the applicable statutory withdrawal period and in other circumstances described in this Policy.",
                "2.3 Once Balance has been used for an Order, refund eligibility depends on the selected Program type, whether performance or digital supply has begun, whether the statutory withdrawal conditions were satisfied, and whether the Program conforms to the contract.",
                "2.4 AI Programs and Trainer Programs are treated differently because an AI Program is generated automatically, while a Trainer Program involves human services and personalised preparation.",
                "2.5 Where a Program is defective, inaccessible, not supplied, or materially not as described, mandatory remedies may include correction or re-performance, price reduction, termination, refund, or restoration of Balance.",
                "2.6 Approved refunds will not exceed the amount actually paid for the affected transaction. Any included VAT will be treated as part of the transaction price.",
            ],
        },
        {
            type: "text",
            title: "3. Balance Top-Ups",
            bullets: [
                "3.1 A Balance top-up adds prepaid value to your Account. It does not by itself order an AI Program or commission a Trainer Program.",
                "3.2 Purchased Balance is not a subscription and does not expire while the Account remains active, subject to the Terms and applicable law.",
                "3.3 If you are an EU consumer, you generally have 14 days from the conclusion of a distance contract to withdraw, subject to statutory exceptions and conditions.",
                "3.4 If you request withdrawal from a Balance top-up during the applicable withdrawal period and none of that Balance has been used, we will refund the amount paid where required by law.",
                "3.5 If part of the purchased Balance has already been used, any refund will be limited to the remaining unused portion, unless applicable law requires a different result. We may deduct or account for the value already used to obtain a Program or other paid Service.",
                "3.6 Outside an applicable statutory withdrawal period, unused Balance is not automatically exchangeable for cash. We may nevertheless approve a refund where required by law, where a duplicate or erroneous payment occurred, where the Service is discontinued and the Balance cannot reasonably be used, or as another appropriate remedy under this Policy.",
                "3.7 A chargeback, reversal, or refund of a Balance top-up may result in reversal of the corresponding Balance. If any of that Balance has already been spent, we may suspend further paid activity while the discrepancy is resolved.",
            ],
        },
        {
            type: "text",
            title: "4. AI Programs and Immediate Digital Supply",
            bullets: [
                "4.1 AI Programs are generated automatically and may be supplied shortly after an Order is confirmed.",
                "4.2 Before an AI Program is generated or supplied during an applicable withdrawal period, Tera Fit will request any prior express consent and acknowledgement required by law, including acknowledgement that the right of withdrawal may be lost when digital supply or performance begins.",
                "4.3 Where all applicable legal conditions have been satisfied, including provision of the required confirmation on a durable medium, you may lose the statutory right of withdrawal once generation or supply of the AI Program begins.",
                "4.4 If the legally required consent, acknowledgement, or confirmation was not validly obtained, your statutory rights remain unaffected.",
                "4.5 Loss of a right to withdraw because digital supply has begun does not remove your right to remedies if the AI Program is not supplied, is inaccessible, is materially not as described, or otherwise fails to conform to the contract.",
            ],
        },
        {
            type: "text",
            title: "5. Trainer Programs and Early Performance",
            bullets: [
                "5.1 A Trainer Program involves personalised work performed by the human Trainer selected by you.",
                "5.2 If you request a Trainer Program to begin during the statutory withdrawal period, Tera Fit may ask you to make an express request for early performance.",
                "5.3 If you validly withdraw after requested work has begun but before the Trainer Program has been fully performed, you may be required to pay a proportionate amount for the part of the service properly performed before withdrawal, where permitted by law.",
                "5.4 The right of withdrawal is not treated as lost merely because a Trainer has begun preparing the Program or because the Program is personalised.",
                "5.5 Your right of withdrawal may be lost after the Trainer Program has been fully performed only where the conditions required by applicable law have been met, including any required prior express consent and acknowledgement.",
                "5.6 Loss of a right to withdraw after full performance does not remove your right to remedies where the Trainer Program is materially defective, materially not as described, or otherwise not in conformity with the contract.",
            ],
        },
        {
            type: "text",
            title: "6. When a Remedy Is Available",
            description:
                "Subject to the circumstances and applicable law, an appropriate remedy may be available where:",
            bullets: [
                "payment was successfully completed but the corresponding Balance was not credited because of an issue attributable to Tera Fit;",
                "you were unintentionally charged more than once for the same top-up;",
                "Balance was deducted but the corresponding Order was not created;",
                "Tera Fit accepted an Order but failed to supply the Program;",
                "a delivered file is corrupted, inaccessible, or technically unusable because of an issue attributable to Tera Fit;",
                "the supplied Program materially differs from the description or selected Program type;",
                "an AI Program was sold as Trainer-prepared, or a Trainer Program was supplied as an unreviewed AI Program;",
                "paid add-ons included in the Order were not supplied;",
                "the Program or digital service otherwise fails to meet applicable contractual conformity requirements; or",
                "a refund or other remedy is required by law.",
            ],
        },
        {
            type: "text",
            title: "7. Remedies for Failure to Supply or Lack of Conformity",
            bullets: [
                "7.1 If a Program has not been supplied within the agreed or reasonably expected timeframe, contact us and request delivery. You may be entitled to terminate immediately where Tera Fit has stated that it will not supply the Program or where delivery by a specific time was essential and agreed.",
                "7.2 Where a Program or related digital service is not in conformity with the contract, you may initially be entitled to have it brought into conformity, free of charge, within a reasonable time, and without significant inconvenience.",
                "7.3 Depending on the circumstances and applicable law, bringing a Program into conformity may involve:",
                "(a) restoring access or re-delivering the file;",
                "(b) correcting a technical defect;",
                "(c) supplying an omitted paid add-on;",
                "(d) regenerating an AI Program using the confirmed Order information;",
                "(e) asking the selected Trainer to correct or complete a Trainer Program; or",
                "(f) replacing the Program with a conforming version.",
                "7.4 You may be entitled to a proportionate price reduction or to terminate the affected contract and receive a refund where:",
                "(a) correction or re-performance is impossible or disproportionate;",
                "(b) Tera Fit has not brought the Program into conformity within a reasonable time and without significant inconvenience;",
                "(c) the lack of conformity continues despite an attempted correction;",
                "(d) the lack of conformity is sufficiently serious to justify an immediate price reduction or termination; or",
                "(e) it is clear that Tera Fit will not bring the Program into conformity within a reasonable time.",
                "7.5 Where termination or a price reduction is appropriate, Tera Fit may issue a monetary refund or restore the corresponding amount to your Balance, depending on the remedy required by law and, where a choice is legally available, your reasonable preference.",
            ],
        },
        {
            type: "text",
            title: "8. Circumstances That Normally Do Not Justify a Refund",
            description:
                "Subject always to mandatory consumer rights, a refund will normally not be provided solely because:",
            bullets: [
                "you changed your mind after a right of withdrawal was validly lost;",
                "you did not open, download, review, or follow a Program that was properly supplied;",
                "you did not achieve a particular fitness, weight, appearance, strength, or performance result;",
                "you disagree with reasonable exercise-selection or programming choices that remain consistent with the purchased description;",
                "a problem resulted from materially inaccurate, incomplete, contradictory, or misleading information submitted by you;",
                "your device, software, internet connection, or browser does not meet reasonable and disclosed technical requirements;",
                "you attempted to use the Program for an undisclosed purpose or in a way prohibited by the Terms; or",
                "circumstances outside Tera Fit’s reasonable control caused a short delay that did not amount to a failure to supply within the applicable legal standard.",
                "This section does not permit Tera Fit to reject a remedy merely by describing a genuine lack of conformity as subjective dissatisfaction.",
            ],
        },
        {
            type: "text",
            title: "9. How to Request Withdrawal, a Refund, or Another Remedy",
            bullets: [
                "9.1 Send your request to info@tera-fit.eu.",
                "9.2 Please include, where available:",
                "(a) the email address associated with your Account;",
                "(b) the Order or transaction reference;",
                "(c) the date and amount of the transaction;",
                "(d) whether the request concerns a Balance top-up, AI Program, Trainer Program, or add-on;",
                "(e) a clear description of the request or problem; and",
                "(f) relevant supporting material, such as a screenshot or error message.",
                "9.3 You do not need to use specific legal wording. A clear statement that you wish to withdraw, terminate, request a refund, or obtain a remedy is sufficient where it reasonably identifies the affected transaction.",
                "9.4 We may request additional information reasonably necessary to verify your identity, locate the transaction, assess the issue, or prevent fraud. We will not request full card details or card security codes by email.",
            ],
        },
        {
            type: "text",
            title: "10. Review and Decision",
            bullets: [
                "10.1 We will review relevant payment confirmations, Balance records, Order configuration, consent records, delivery records, access information, Program-preparation records, and communications as reasonably necessary.",
                "10.2 We will provide a reasoned response within the period required by applicable law. Consumer complaints submitted under Lithuanian consumer-protection procedures will normally receive a written response no later than 14 days after receipt.",
                "10.3 If a request is accepted, we will identify the remedy, amount, payment method or Balance adjustment, and expected processing timeframe.",
                "10.4 A decision under this Policy does not prevent you from exercising mandatory rights or using an available judicial or out-of-court dispute-resolution procedure.",
            ],
        },
        {
            type: "text",
            title: "11. Refund Method, Currency, and Timing",
            bullets: [
                "11.1 Monetary refunds are normally issued to the original payment method and in the original transaction currency, unless this is impossible or another lawful method is agreed.",
                "11.2 A refund will not exceed the amount actually paid for the affected transaction. Where VAT was included in the price, the applicable VAT component will be handled as part of the refunded transaction.",
                "11.3 Where a transaction involved currency conversion, the refund will be based on the original amount paid in the settlement currency. Tera Fit is not responsible for exchange-rate differences or fees applied independently by your bank or card issuer.",
                "11.4 Statutory withdrawal refunds will be processed within the period required by law, normally no later than 14 days after Tera Fit is informed of a valid withdrawal, subject to any lawful conditions.",
                "11.5 Other approved refunds are normally initiated within 5–10 business days after approval. Additional time taken by a bank, card issuer, or payment service provider is outside Tera Fit’s direct control.",
            ],
        },
        {
            type: "text",
            title: "12. Chargebacks, Fraud, and Abuse",
            bullets: [
                "12.1 If you do not recognise a transaction, contact us promptly. You may also have rights through your payment provider.",
                "12.2 If a chargeback or payment dispute is opened, we may pause a parallel internal refund request while the payment dispute is being handled to avoid duplicate reimbursement.",
                "12.3 We may provide relevant evidence to the payment provider, including transaction records, checkout confirmations, consent records, Balance history, Order details, and delivery records.",
                "12.4 We may suspend paid functionality or reverse improperly credited Balance where we reasonably suspect fraud, an unauthorised payment, manipulation, duplicate recovery, or abuse. Such action will not limit mandatory rights relating to a genuine unauthorised transaction or valid consumer claim.",
            ],
        },
        {
            type: "text",
            title: "13. Account Closure and Remaining Balance",
            bullets: [
                "13.1 Account closure does not automatically cancel an accepted Order or remove a right to an available refund or remedy.",
                "13.2 If you request Account closure while purchased Balance remains unused, we will handle that Balance in accordance with this Policy, the Terms, and applicable law.",
                "13.3 Where we permanently discontinue the paid Service and you cannot reasonably use purchased Balance, we will provide an appropriate remedy, which may include refunding the unused amount.",
            ],
        },
        {
            type: "text",
            title: "14. Complaints and Dispute Resolution",
            bullets: [
                "14.1 Please first send your complaint to info@tera-fit.eu so that we can attempt to resolve it directly.",
                "14.2 If an eligible consumer dispute is not resolved, you may apply to the State Consumer Rights Protection Authority of the Republic of Lithuania through the applicable out-of-court dispute-resolution procedure. Information is available at vvtat.lrv.lt.",
            ],
        },
        {
            type: "text",
            title: "15. Changes to This Policy",
            bullets: [
                "15.1 We may update this Policy for legal, regulatory, technical, operational, or commercial reasons.",
                "15.2 The current version will be published with a revised effective date. Changes apply prospectively and do not reduce rights already acquired in relation to an earlier transaction.",
            ],
        },
        {
            type: "text",
            title: "16. Contact",
            description:
                `${COMPANY_LEGAL_NAME}\n` +
                `Company code: ${COMPANY_NUMBER}\n` +
                `Registered address: ${COMPANY_ADDRESS}\n` +
                `Email: ${COMPANY_EMAIL}\n` +
                `Phone: ${COMPANY_PHONE}`,
        },
    ],
};

export default refundPolicySchema;
