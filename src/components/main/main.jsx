import React from 'react';
import GiftCard from "../gift-card/gift-card";
import styles from "./main.module.scss";

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <section>
                <h1>Зарабатывайте больше <br/> <span>c WELBEX</span></h1>
                <p>Развиваем и контролируем продажи за вас</p>
            </section>
            <GiftCard/>
        </main>
    );
};

export default Main;