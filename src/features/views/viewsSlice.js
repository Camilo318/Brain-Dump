const initialState = {
    currentView: 'all'
}


export default function viewsReduce(state= initialState, action) {
    switch (action.type) {
        case 'views/update-view': {
            return {
                currentView: action.payload
            }
        }

        default: {
            return state
        }
    }
}