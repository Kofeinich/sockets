import styles from './Block.module.css'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFieldStatus, updateFieldData} from "../../slices/blocksSlice";
import {useSocketSubscribe} from "../../sockets/SocketSubscriber";

export const Block = ({blockId}) => {
    const config = useSelector((state) => state.blocks[blockId]);

    const sendJsonMessage = useSocketSubscribe()

    let keys = Object.keys(config.fields);
    const dispatch = useDispatch()

    return (config.enabled) ? <section className={styles.block}>
        <h2 className={styles.heading2}>{config.blockName}</h2>
        {keys.map((field, index) => {
            return <React.Fragment key={index}>
                <h3 className={styles.heading3}>{config.fields[field].fieldName}</h3>
                <input className={styles.input}
                       value={config.fields[field].fieldValue}
                       placeholder={config.fields[field].fieldPlaceHolder}
                       readOnly={config.fields[field].fieldReadonly}
                       onChange={(event) => {
                           dispatch(updateFieldData({blockId: blockId, fieldId: field, value: event.target.value}))
                       }
                       }
                       onFocus={() => {
                           if (!config.fields[field].fieldReadonly)
                               sendJsonMessage({"command": "focus", "block": blockId, "field": field})
                       }}
                       onBlur={() => {
                           if (config.fields[field].fieldReadonly)
                               sendJsonMessage({"command": "blur", "block": blockId, "field": field})
                       }}
                />
            </React.Fragment>
        })}
    </section> : <></>
}