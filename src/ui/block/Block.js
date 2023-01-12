import styles from './Block.module.css'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFieldData} from "../../slices/blocksSlice";

export const Block = ({blockId}) => {
    const config = useSelector((state) => state.blocks[blockId]);
    let keys = Object.keys(config.fields);
    const dispatch = useDispatch()

    return <section className={styles.block}>
        <h2 className={styles.heading2}>{config.blockName}</h2>
        {keys.map((field, index)=> {
           return  <React.Fragment key={index}>
                <h3 className={styles.heading3}>{config.fields[field].fieldName}</h3>
                <input className={styles.input} placeholder={config.fields[field].fieldPlaceHolder} onChange={(event) => {
                    dispatch(updateFieldData({ blockId: blockId, fieldId: field, value: event.target.value}))
                }
                }></input>
            </React.Fragment>
        })}
    </section>
}