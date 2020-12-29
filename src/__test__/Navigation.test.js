import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../components/Navigation'
import { useDispatch, Provider } from 'react-redux'

jest.mock('react-redux', () => {
    const { Provider, useSelector } = jest.requireActual('react-redux')

    return {
        useDispatch: jest.fn(),
        useSelector,
        Provider
    }
})

it('Testing render of Navigation', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.nav__container').length).toBe(1)
    
})

it('Should render 3 items', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find('.nav__item').length).toBe(3)
})

