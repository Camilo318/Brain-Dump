import tasksReducer from '../features/tasks/tasksSlice'


describe('Testing tasks reducer', () => {
    let state

    afterEach(() => {
        console.log(state)
    })

    beforeAll(() => {
        state = [
            { id: 0, text: 'Get the job', completed: true },
            { id: 1, text: 'Make a lot of testing', completed: false }
        ]
    })

    test('Add other task to state', () => {
        const action = {type: 'tasks/add-task', payload: {
            id: 2,
            text: 'Watch Evangelion'
        }}
        const result =  tasksReducer(state, action)
        expect(result.length).toBe(3)
        expect(result[result.length - 1].text).toMatch('Watch Evangelion')
        expect(state.length).toBe(2)
    })

    test('Delete task from the state', () => {
        const action = {type: 'tasks/delete-task', payload: 1}
        const result = tasksReducer(state, action)
        expect(result.length).toBe(1)
        expect(state.length).toBe(2)
    })

    test('Testing default case', () => {
        const action = {type: 'Billie', payload: 'Eilish'}
        const result = tasksReducer(state, action)
        expect(result).toEqual(state)
        //We return the unchanged state by default
    })
})

