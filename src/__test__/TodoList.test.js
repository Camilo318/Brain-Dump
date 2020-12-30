import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../components/TodoList'
import Add from '../components/Add'


jest.mock('react-redux', () => {
    const { Provider, useSelector, useDispatch } = jest.requireActual('react-redux')

    return {
        Provider,
        useDispatch: jest.fn(),
        useSelector: jest.fn()
    }
})

describe('Testing the update of the UI', () => {
    test('should add a new node to the list', () => {
        const list = shallow(<TodoList />)
        const add = shallow(<Add />)
        const input = add.find('#addInput')
        input.simulate('keypress', {key: 'Enter'})
        expect(list.length).toBe(4)
    })
    
})