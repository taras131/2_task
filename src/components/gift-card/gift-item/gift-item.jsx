import React from "react";
import styles from "./gift-item.module.scss";

const GiftItem = ({desktopTitle, mobileTitle, description}) => {
    return (
        <div className={styles.wrapper}>
            <dt className={styles.desktop}>{desktopTitle}</dt>
            <dt className={styles.mobile}>{mobileTitle}</dt>
            <dd>{description}</dd>
        </div>
    );
};

export default GiftItem;