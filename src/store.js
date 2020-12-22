import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const enhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store
