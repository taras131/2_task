import React from 'react';
import {ABOUT_ROUTES, COMPANY_ADDRESS, FOOTER_NAV_ROUTES, RIGHTS_ROUTE} from "../../utils/constants";
import NavItem from "../nav-item/nav-item";
import styles from "./footer.module.scss";
import PhoneNumberWithLink from "../phone_number_with_link/phone_number_with_link";
import MessengersSection from "../messengers_section/mesengers_section";
import {Link} from "react-router-dom";

const Footer = () => {
    const aboutList = ABOUT_ROUTES.map(item => (<NavItem key={item.name} {...item} fontWeight="light"/>))
    const navList = FOOTER_NAV_ROUTES.map(item => (<NavItem key={item.name} {...item} fontWeight="light"/>))
    return (
        <footer className={styles.wrapper}>
            <section className={styles.about}>
                <h4>О КОМПАНИИ</h4>
                <ul>
                    {aboutList}
                </ul>
            </section>
            <section className={styles.menu}>
                <h4>Меню</h4>
                <nav>
                    <ul>
                        {navList}
                    </ul>
                </nav>
            </section>
            <section className={styles.contacts}>
                <h4>Контакты</h4>
                <ul className={styles.contacts_list}>
                    <li>
                        <PhoneNumberWithLink/>
                    </li>
                    <li>
                        <MessengersSection gap={10}/>
                    </li>
                    <li>
                        {COMPANY_ADDRESS}
                    </li>
                </ul>
            </section>
            <div className={styles.rights}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <Link className={styles.link} to={RIGHTS_ROUTE.path}>{RIGHTS_ROUTE.title}</Link>
            </div>
        </footer>
    );
};

export default Footer;