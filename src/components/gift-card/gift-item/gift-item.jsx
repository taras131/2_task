import React from 'react';
import styles from "./gift-item.module.scss"

const GiftItem = ({title, description}) => {
    return (
        <div className={styles.wrapper}>
            <dt>{title}</dt>
            <dd>{description}</dd>
        </div>
    );
};

export default GiftItem;