"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import {footerContent} from "@/resources/content";
import {footerStyles} from "@/resources/styles-config";
import {SmartLinkProps} from "@/types/smart-link";
import {FaFacebookF, FaInstagram, FaPinterest} from "react-icons/fa";
import visa from "@/assets/cards/visa.png";
import mastercard from "@/assets/cards/mastercard.png";
import pciDss from "@/assets/cards/pci-dss-compliant-logo-vector.svg";

const SmartLink: React.FC<SmartLinkProps> = ({href, className, children, ariaLabel, title, target, rel}) => {
    const isInternal = href?.startsWith("/");
    if (isInternal) {
        return (
            <Link href={href} className={className} aria-label={ariaLabel} title={title}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} className={className} aria-label={ariaLabel} title={title} target={target} rel={rel}>
            {children}
        </a>
    );
};

const Footer: React.FC = () => {
    const {logo, columns, contact, legal} = footerContent;

    const PaymentMethods = () => (
        <div className={styles.paymentsContent}>
            <Image
                src={visa}
                alt="Visa"
                placeholder="blur"
                className={styles.paymentIcon}
            />
            <Image
                src={mastercard}
                alt="Mastercard"
                placeholder="blur"
                className={styles.paymentIcon}
            />
            <Image
                src={pciDss}
                alt="PCI DSS Compliant"
                className={styles.paymentIcon}
            />
        </div>
    );

    const LegalBlock = () => (
        <div className={styles.legalInfo}>
            <div className={styles.legalLine}>
                <span className={styles.label}>Company:</span> <strong>{legal.companyName}</strong>
            </div>
            {legal.companyNumber && <div className={styles.legalLine}>{legal.companyNumber}</div>}
            <div className={styles.contactItems}>
                {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
                {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
                {contact.address && <span>{contact.address}</span>}
            </div>
        </div>
    );

    const cssVars = {
        "--footer-maxw": `${footerStyles.maxWidth}px`,
        "--footer-bg": footerStyles.colors?.bg,
        "--footer-text": footerStyles.colors?.text,
        "--footer-link": footerStyles.colors?.link,
        "--footer-link-hover": footerStyles.colors?.linkHover,
        "--footer-border": footerStyles.colors?.border,
        "--footer-logo-w": `${footerStyles.logo?.width}px`,
        "--footer-logo-h": `${footerStyles.logo?.height}px`,
        "--footer-title-color": footerStyles.colors?.title,
    } as React.CSSProperties;

    const isMega = footerStyles.type === "mega";

    return (
        <footer
            className={clsx(styles.footer, footerStyles.showTopBorder && styles.topBorder)}
            style={cssVars}
        >
            <div className={clsx(styles.container, isMega ? styles.mega : styles.columns)}>

                <div className={styles.logoSection}>
                    <SmartLink href={logo.href} className={styles.logoLink}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={footerStyles.logo?.width}
                            height={footerStyles.logo?.height}
                            className={styles.logoImg}
                        />
                    </SmartLink>
                </div>

                <div className={styles.mainGrid}>
                    {columns.map((col) => (
                        <div className={styles.column} key={col.title}>
                            <h4 className={styles.columnTitle}>{col.title}</h4>
                            <nav className={styles.nav}>
                                {col.links.map((link) => (
                                    <SmartLink key={link.label} href={link.href} className={styles.link}>
                                        {link.label}
                                    </SmartLink>
                                ))}
                            </nav>
                        </div>
                    ))}

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <LegalBlock/>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Follow Us</h4>
                        <div className={styles.socials}>
                            {/*<a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF/></a>*/}
                            <a href="https://www.instagram.com/terafit.eu" className={styles.socialLink} aria-label="Instagram"><FaInstagram/></a>
                            <a href="https://www.pinterest.com/terafitgo/" className={styles.socialLink}
                               aria-label="Pinterest"><FaPinterest/></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["footer__rights"]}>
                <p>© {new Date().getFullYear()} {legal.companyName}. All rights reserved.</p>
                <PaymentMethods/>
            </div>
        </footer>
    );
};

export default Footer;
