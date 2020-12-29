const initialState = [
    {id: 0, text: 'Get a job', completed: true},
    {id: 1, text: 'Study testing', completed: false},
    {id: 2, text: 'Study Redux', completed: false}
]

import 'regenerator-runtime/runtime'

//Import actions
import { loadTasks } from './actions'
const api = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = (fetchApi) => {
    //thunk action creator
    return async function fetchTodosThunk(dispatch, getState) {
        const res = await fetchApi(api)
        const data = await res.json()
        const todos = data.slice(0, 5)
        const prevState = getState()
        console.log(prevState)
        dispatch(loadTasks(todos))
    }
}

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'tasks/add-task': {
            const { id, text } = action.payload
            return [
                ...state,
                { id, text, completed: false }
            ]
        }

        case 'tasks/delete-task': {
            return state.filter(task => task.id !== action.payload)
        }

        case 'tasks/load-tasks': {
            const newState = action.payload.map(task => (
                {
                    id: task.id,
                    text: task.title,
                    completed: task.completed
                }
            ))

            return newState
        }

        case 'tasks/toggle-task': {
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task
                }

                return {
                    ...task,
                    completed: !task.completed
                }
            })
        }

        default: {
            return state
        }
    }
}