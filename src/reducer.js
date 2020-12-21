import { combineReducers } from 'redux'
import taskReducer from './features/tasks'

const rootReducer = combineReducers({
    task: taskReducer
})


export default rootReducer


