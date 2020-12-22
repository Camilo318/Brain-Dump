import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/style.scss'
import store from './store'
import { Provider } from 'react-redux'

console.log('Initial State: ', store.getState())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))


