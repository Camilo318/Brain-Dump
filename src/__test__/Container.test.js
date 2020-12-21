import React from 'react'
import { shallow } from 'enzyme'
import Container from '../components/Container'
import toJson from 'json-schema'

it('Testing the render of Container', () => {
    const wrapper = shallow(<Container />)
    expect(toJson(wrapper)).toMatchSnapshot()
})





//shallow will render just the component itself, without any children within it. Test one thing a at time, as a unit (Unit Testing)

//mount: Full render, mounts the component in the DOM

//render: Render components to a static HTML, a middle point between mount and shallow