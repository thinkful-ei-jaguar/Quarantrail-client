import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomePage from './HomePage'

describe(`HomePage Route`, () => {

  it('renders by default', () => {
    const wrapper = shallow(<HomePage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})