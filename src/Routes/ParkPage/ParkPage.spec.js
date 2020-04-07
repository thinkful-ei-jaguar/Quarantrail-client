import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Park from './ParkPage'

describe(`ParkPage Route`, () => {

  it('renders by default', () => {
    const wrapper = shallow(<Park />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})