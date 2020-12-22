import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../components/TodoList'
import Add from '../components/Add'


describe('Testing the update of the UI', () => {
    test('should add a new node to the list', () => {
        const add = shallow(<Add />)
        const list = shallow(<TodoList />)
        const input = add.find('#addInput')
        input.simulate('keypress', {key: 'Enter'})
        expect(list.length).toBe(4)
    })
    
})