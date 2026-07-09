import "./globals.css";
import {authWrapper} from "@/utils/authWrapper";
import {AlertProvider} from "@/context/AlertContext";
import PageWrapper from "@/components/layout/page-wrapper/PageWrapper";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ProtectedRoute from "@/components/utils/protected-route/ProtectedRoute";
import {currentFont} from "@/resources/styles-config";
import {I18nProvider} from "@/context/i18nContext";
import {AllOrdersProvider} from "@/context/AllOrdersContext";
import {CurrencyProvider} from "@/context/CurrencyContext";
import {footerContent} from "@/resources/content";
import {
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_PHONE,
    COMPANY_SITE_URL,
} from "@/resources/constants";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    legalName: COMPANY_LEGAL_NAME,
    url: COMPANY_SITE_URL,
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    sameAs: footerContent.socials.map((social) => social.href),
};

function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href={currentFont.url} rel="stylesheet"/>
            <style>{`:root { --font-family: ${currentFont.css}; }`}</style>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
            />
        </head>
        <body>
        <I18nProvider>
            <AlertProvider>
                <AllOrdersProvider>
                    <ProtectedRoute>
                        <CurrencyProvider>
                            <Header/>
                            <PageWrapper>
                                {children}
                            </PageWrapper>
                            <Footer/>
                        </CurrencyProvider>
                    </ProtectedRoute>
                </AllOrdersProvider>
            </AlertProvider>
        </I18nProvider>
        </body>
        </html>
    );
}

export default authWrapper(Layout);