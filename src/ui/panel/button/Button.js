import styles from './Button.module.css'
import {useDispatch} from "react-redux";
import {changeEnabled} from "../../../slices/blocksSlice";
import {useSocketSubscribe} from "../../../sockets/SocketSubscriber";

export const Button = ({blockId, item}) => {

    const dispatch = useDispatch()

    const sendJsonMessage = useSocketSubscribe()

    return <button className={styles.btn} onClick={() => {
        dispatch(changeEnabled({blockId: blockId, nowEnabled: !item.enabled}))
        !item.enabled ?  sendJsonMessage({"command": "subscribe", "block": blockId})
            : sendJsonMessage({"command": "unsubscribe", "block": blockId})
    }}>
        <p className={styles.text}>{item.blockName}</p>
    </button>
}