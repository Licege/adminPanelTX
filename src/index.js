import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import WebSocketProvider from './middleware/WebSocket'
import './index.css'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <WebSocketProvider>
                    <App/>
                </WebSocketProvider>
            </Provider>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
