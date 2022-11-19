import React from 'react';
import styles from "./messengers_section.module.scss";
import {MESSENGER_ROUTES} from "../../utils/constants";
import MessengerItem from "./messenger-item/messenger-item";

const MessengersSection = ({gap = 30}) => {
    const messengerList = MESSENGER_ROUTES.map(item => (<MessengerItem key={item.name} {...item}/>))
    return (
        <ul className={styles.wrapper} style={{gap: gap + "px"}}>
            {messengerList}
        </ul>
    );
};

export default MessengersSection;