const initialState = [
    {id: 0, text: 'Get a job', completed: true},
    {id: 1, text: 'Study testing', completed: false},
    {id: 2, text: 'Study Redux', completed: false}
]

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