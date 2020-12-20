import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../components/Navigation'

it('Testing render of Navigation', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.nav__container').length).toBe(1)
    
})

it('Updates the counter', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find('.nav__item').length).toBe(3)
})

