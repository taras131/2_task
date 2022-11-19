import React from "react";
import {Link} from "react-router-dom";
import styles from "./rights.module.scss"
import {RIGHTS_ROUTE} from "../../../utils/constants";

const Rights = () => {
    return (
        <div className={styles.wrapper}>
            <p>©WELBEX 2022. Все права защищены.</p>
            <Link className={styles.link} to={RIGHTS_ROUTE.path}>{RIGHTS_ROUTE.title}</Link>
        </div>
    );
};

export default Rights;