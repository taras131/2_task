import React from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";
import styles from "./nav-item.module.scss";

const NavItem = ({path, title, fontWeight = "normal"}) => {

    return (
        <li className={styles.wrapper}>
            <Link to={path} className={classnames(styles.link,
                {[styles.light]: fontWeight === "light"})}>
                {title}
            </Link>
        </li>
    );
};

export default NavItem;