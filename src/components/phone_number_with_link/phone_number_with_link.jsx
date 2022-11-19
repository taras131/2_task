import React from "react";
import {PHONE_NUMBER} from "../../utils/constants";
import styles from "./phone_number_with_link.module.scss";

const PhoneNumberWithLink = () => {
    return (
        <a className={styles.wrapper} href={`tel:${PHONE_NUMBER}`}> {PHONE_NUMBER} </a>
    );
};

export default PhoneNumberWithLink;