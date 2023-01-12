import styles from './Block.module.css'
import React, {useState} from "react";

export const Block = ({config}) => {

    return <section className={styles.block}>
        <h2 className={styles.heading2}>{config.blockName}</h2>
        {config.fields.map((item, index) => {
            return <React.Fragment key={index}>
                <h3 className={styles.heading3}>{item.fieldName}</h3>
                <input className={styles.input} placeholder={item.fieldPlaceHolder}></input>
            </React.Fragment>
        })}
    </section>
}