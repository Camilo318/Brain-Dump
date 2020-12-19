import React from 'react'
import { shallow } from 'enzyme'
import Navigatioin from '../components/Navigation'

it('Testing render of Navigation', () => {
    expect(shallow(<Navigatioin />)).toMatchSnapshot()
})

