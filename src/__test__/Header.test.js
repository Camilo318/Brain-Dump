import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'
import toJson from 'enzyme-to-json'

it('Test Header', () => {
    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header__logo')
    expect(header.text()).toMatch(/^#braindump$/)
})

it('Testing snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
})