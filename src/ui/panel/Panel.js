import {Button} from "./button/Button";
import styles from './Panel.module.css'
import {useSelector} from "react-redux";


export const Panel = () => {
    const config = useSelector((state) => state.blocks);
    let keys = Object.keys(config);

    return <section className={styles.panel}>
        {keys.map((item, index) => {
            return <Button key={index} blockId={keys[index]} item={config[item]}/>
        })}
    </section>
}