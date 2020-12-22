import { combineReducers } from 'redux'
import tasksReducer from './features/tasks/tasksSlice'
import viewsReducer from './features/views/viewsSlice'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    views: viewsReducer
})


export default rootReducer


