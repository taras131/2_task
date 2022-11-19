import React from "react";
import PhoneNumberWithLink from "../../phone_number_with_link/phone_number_with_link";
import MessengersSection from "../../messengers_section/mesengers_section";
import styles from "./contacts.module.scss";
import {COMPANY_ADDRESS} from "../../../utils/constants";

const Contacts = () => {
    return (
        <section className={styles.wrapper}>
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
    );
};

export default Contacts;