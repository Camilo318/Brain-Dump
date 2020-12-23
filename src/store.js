import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const enhancer = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store
