import React from "react";
import About from "./about/about";
import FooterNav from "./footer-nav/footer-nav";
import Contacts from "./contacts/contacts";
import Rights from "./rights/rights";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <About/>
            <FooterNav/>
            <Contacts/>
            <Rights/>
        </footer>
    );
};

export default Footer;