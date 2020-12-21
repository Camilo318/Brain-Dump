import { combineReducers } from 'redux'
import taskReducer from './features/tasks/tasksSlice'

const rootReducer = combineReducers({
    tasks: taskReducer
})


export default rootReducer


