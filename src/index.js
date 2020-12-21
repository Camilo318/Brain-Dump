import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/style.scss'
import store from './store'

console.log('Initial State: ', store.getState())


ReactDOM.render(<App /> , document.getElementById('root'))


