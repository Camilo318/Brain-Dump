import * as actions from '../features/tasks/actions'
import { fetchTodos } from '../features/tasks/tasksSlice'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk])

describe('Return the correct actions', () => {

    test('should return tasks/add-task', () => {
    
        const payload = {name: 'Billie'}
        const expected = {
            type: 'tasks/add-task',
            payload
        }  
        expect(actions.addTask(payload)).toEqual(expected)
    })

    test('should return tasks/delete-task', () => {
        const payload = 18
        const expected = {
            type: 'tasks/delete-task',
            payload
        }
        expect(actions.deleteTask(payload)).toEqual(expected)
    })

    test('should run thunk and dispatch', async () => {
        expect.assertions(1)
        const store = mockStore()
        const payload = [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5}
        ]
        const mockFetch = jest.fn(api => (
            Promise.resolve({
                json: () => Promise.resolve(payload)
            })
        ))

        const expected = {
            type: 'tasks/load-tasks',
            payload
        }
        
        await store.dispatch(fetchTodos(mockFetch))

        const [action] = store.getActions()
        console.log(action)
        expect(action).toEqual(expected)
    })
    
    
})