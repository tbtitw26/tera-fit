import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {FaUser} from "react-icons/fa";
import {GrMoney} from "react-icons/gr";

const AuthButtons: React.FC = () => {
    const user = useUser();

    if (user) {
        return (
            <div className={styles.userCompact}>
                <Link href="/profile" className={styles.tokensPill} aria-label="Профіль і баланс">
                    <GrMoney className={styles.iconMoney} />
                    <span className={styles.tokensValue}>{user?.tokens ?? 0}</span>
                </Link>

                <Link href="/profile" className={styles.userIconButton} aria-label="Профіль">
                    <FaUser className={styles.userIcon} />
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI
                    variant="plain"
                    text="Sign In"
                    shape="default"
                    hoverColor="none"
                    hoverEffect="none"
                    fullWidth
                    textColor="secondary"
                />
            </Link>
            <Link href="/sign-up">
                <ButtonUI
                    text="Sign Up"
                    shape="default"
                    color="primary"
                    hoverEffect="none"
                    fullWidth
                    textColor="quaternary"
                    hoverColor="primary"

                />
            </Link>
        </div>
    );
};

export default AuthButtons;
