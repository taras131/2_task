import React from "react";
import styles from "./messenger-item.module.scss";

const MessengerItem = ({name, icon, path}) => {
    return (
        <li className={styles.wrapper}>
            <a href={path}><img src={icon} alt={name}/></a>
        </li>
    );
};

export default MessengerItem;