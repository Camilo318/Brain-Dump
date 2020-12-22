import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/style.scss'
import store from './store'
import { Provider } from 'react-redux'
import { fetchTodos } from './features/tasks/tasksSlice'

console.log('Initial State: ', store.getState())

store.dispatch(fetchTodos)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))


