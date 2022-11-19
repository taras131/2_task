import React from 'react';
import Button from "../common/button/button";
import GiftItem from "./gift-item/gift-item";
import {GIFTS} from "../../utils/constants";
import styles from "./gift-card.module.scss";

const GiftCard = () => {
    const giftList = GIFTS.map(item => (<GiftItem key = {item.title} {...item}/>))
    return (
        <aside className={styles.wrapper}>
            <h2>Вместе с <span>БЕСПЛАТНОЙ</span> <span>КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
            <dl className={styles.gift_section}>
                {giftList}
            </dl>
            <div className={styles.button_container}>
                <Button>
                    Получить консультацию
                </Button>
            </div>
        </aside>
    );
};

export default GiftCard;