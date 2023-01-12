import {Logo} from "../../../styles/svg/Logo";
import React from "react";
import styles from "./Header.module.css"

export const Header = () => {
    return <header className={styles.header}>
        <Logo/>
    </header>
}