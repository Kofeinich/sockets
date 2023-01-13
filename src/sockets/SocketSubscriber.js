import {useCallback, useEffect, useState} from "react";
import useWebSocket, {ReadyState} from 'react-use-websocket';

export const useSocketSubscribe = () => {
    const [socketUrl, setSocketUrl] = useState('wss://taxivoshod.ru:8999');
    const [messageHistory, setMessageHistory] = useState([]);
    const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(socketUrl,
        { share: true });

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];
    console.log(connectionStatus)
    useEffect(() => {
        if (lastJsonMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastJsonMessage));

        }
    }, [lastJsonMessage, setMessageHistory]);
    return useCallback((jsonMessage) => sendJsonMessage(jsonMessage), [sendJsonMessage])
};