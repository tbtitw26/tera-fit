import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const contactPage: PageSchema = {
    meta: {
        title: `Contact Us — ${COMPANY_NAME}`,
        description: `Contact ${COMPANY_NAME} for company details, address, business hours, phone support, or customer service requests.`,
        keywords: [
            `${COMPANY_NAME} contact`,
            "support",
            "get in touch",
            "customer service",
        ],
        canonical: "/contact-us",
        ogImage: {
            title: `Contact ${COMPANY_NAME}`,
            description: "Company details, address, hours, and customer support.",
            bg: "#f9fafb",
            color: "#111827",
        },
    },
    blocks: [
        {
            type: "custom",
            component: "ContactForm",
        },
    ],
};

export default contactPage;
