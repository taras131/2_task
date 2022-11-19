import React from 'react';
import logo from "../../assets/logo/logo_welbex.png"
import {LOGO_DESCRIPTION, ROUTES} from "../../utils/constants";
import NavItem from "../nav-item/nav-item";
import styles from "./header.module.scss";
import PhoneNumberWithLink from "../phone_number_with_link/phone_number_with_link";
import MessengersSection from "../messengers_section/mesengers_section";


const Header = () => {
    const navList = ROUTES.map(item => (<NavItem key={item.name} {...item}/>))
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
                <p>{LOGO_DESCRIPTION}</p>
            </div>
            <nav>
                <ul>
                    {navList}
                </ul>
            </nav>
            <div className={styles.contacts}>
                <PhoneNumberWithLink/>
                <MessengersSection/>
            </div>
        </header>
    );
};

export default Header;