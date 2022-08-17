import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

const NotFoundBlock = () => {
    return (
        <div>
            <h1 className={styles.root}>
                <span>Нечего не найдено :( </span>
            </h1>
            <p className={styles.description}>к сожeлению тут пусто</p>
        </div>
    )
};


export default NotFoundBlock;