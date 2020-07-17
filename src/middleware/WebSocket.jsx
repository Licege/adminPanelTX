import React, {createContext} from 'react'
import io from 'socket.io-client'
import {useDispatch} from 'react-redux'
import {WS_BASE} from '../api/api'

export const WebSocket = createContext(null)

export default ({children}) => {
    let socket
    let ws

    const dispatch = useDispatch()

    const send = (data) => {
        const payload = {
            data
        }

        socket.emit('event://send-delivery', JSON.stringify(payload))
        console.log(payload);
        //dispatch()
    }

    if (!socket) {
        socket = io.connect(WS_BASE)

        socket.on('event://get-delivery', (data) => {
            //const payload = JSON.parse(data)
            //dispatch()
            //console.log(payload);
        })

        ws = {
            socket,
            send
        }
    }

    return (
        <WebSocket.Provider value={ws}>
            {children}
        </WebSocket.Provider>
    )
}
