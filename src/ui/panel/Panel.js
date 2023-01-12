import {useState} from "react";
import {Button} from "./button/Button";
import styles from './Panel.module.css'


export const Panel = () => {
    const [text, setText] = useState([
        'Блок 1',
        'Блок 2',
        'Блок 3',
    ])

    return <section className={styles.panel}>
        {text.map((item, index) => {
            return <Button key={index} text={item}/>
        })}
    </section>
}