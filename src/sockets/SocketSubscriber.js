import {useCallback, useEffect, useState} from "react";
import useWebSocket, {ReadyState} from 'react-use-websocket';
import {useDispatch} from "react-redux";
import {changeEnabled, changeFieldStatus, updateFieldData} from "../slices/blocksSlice";

export const useSocketSubscribe = () => {
    const [socketUrl, setSocketUrl] = useState('wss://taxivoshod.ru:8999');
    const [messageHistory, setMessageHistory] = useState([]);
    const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(socketUrl,
        {share: true});
    const dispatch = useDispatch();

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];
    useEffect(() => {
        if (lastJsonMessage !== null) {
            // setMessageHistory((prev) => prev.concat(lastJsonMessage));
            // console.log(lastJsonMessage)
            if (Object.hasOwn(lastJsonMessage, "success")) {
                if (!lastJsonMessage.success) {
                    // todo react notify
                    console.error("error", lastJsonMessage)
                    return
                } else {
                    return;
                }
            }
            if (Object.hasOwn(lastJsonMessage, "block")) {
                const blockId = lastJsonMessage.block
                if (Object.hasOwn(lastJsonMessage, "data")) {
                    for (const fieldId of Object.keys(lastJsonMessage.data)) {
                        dispatch(updateFieldData({blockId: blockId, fieldId: fieldId, value:  lastJsonMessage.data[fieldId]}))
                    }
                }
                if (Object.hasOwn(lastJsonMessage, "status")) {
                    for (const fieldId of Object.keys(lastJsonMessage.status)) {
                        dispatch(changeFieldStatus({blockId: blockId, fieldId: fieldId, readonly:  lastJsonMessage.status[fieldId]}))
                    }
                }
                if (Object.hasOwn(lastJsonMessage, "blur")){
                    dispatch(changeFieldStatus({blockId: blockId, fieldId: lastJsonMessage.blur, readonly: false}))
                }
                if (Object.hasOwn(lastJsonMessage, "focus")){
                    dispatch(changeFieldStatus({blockId: blockId, fieldId: lastJsonMessage.focus, readonly: true}))
                }
            }

            // dispatch()
        }
    }, [lastJsonMessage, setMessageHistory]);
    return sendJsonMessage;
    // return useCallback((jsonMessage) => sendJsonMessage(jsonMessage), [sendJsonMessage])
};