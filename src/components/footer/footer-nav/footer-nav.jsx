import React from "react";
import NavItem from "../../nav-item/nav-item";
import styles from "./footer-nav.module.scss"
import {FOOTER_NAV_ROUTES} from "../../../utils/constants";

const FooterNav = () => {
    const navList = FOOTER_NAV_ROUTES.map(item => (<NavItem key={item.name} {...item} fontWeight="light"/>))
    return (
        <section className={styles.wrapper}>
            <h4>Меню</h4>
            <nav>
                <ul className={styles.nav_list}>
                    {navList}
                </ul>
            </nav>
        </section>
    );
};

export default FooterNav;