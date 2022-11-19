import React from 'react';
import styles from "./planets.module.scss"

const Planets = () => {
    return (
        <>
            <div className={styles.planet_1}></div>
            <div className={styles.planet_2}></div>
            <div className={styles.planet_3}></div>
            <div className={styles.planet_4}></div>
            <div className={styles.planet_5}></div>
        </>
    );
};

export default Planets;