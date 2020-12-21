const initialState = [
    {id: 0, text: 'Get a job', completed: true},
    {id: 1, text: 'Study testing', completed: false},
    {id: 2, text: 'Study Redux', completed: false}
]

export default function taskReducer(state = initialState, action) {
    switch (actioin.type) {
        case 'tasks/add-task': {
            const { id, text } = action.payload
            return [
                ...state,
                { id, text, completed: false }
            ]
        }

        case 'tasks/delete-task': {
            return state.filter(task => task !== action.payload)
        }


        default: {
            return state
        }
    }
}