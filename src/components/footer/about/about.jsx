import React from "react";
import NavItem from "../../nav-item/nav-item";
import styles from "./about.module.scss";
import {ABOUT_ROUTES} from "../../../utils/constants";

const About = () => {
    const aboutList = ABOUT_ROUTES.map(item => (<NavItem key={item.name} {...item} fontWeight="light"/>))
    return (
        <section className={styles.wrapper}>
            <h4>О КОМПАНИИ</h4>
            <ul>
                {aboutList}
            </ul>
        </section>
    );
};

export default About;