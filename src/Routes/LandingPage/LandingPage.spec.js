import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LandingPage from './LandingPage'

describe(`LandingPage Route`, () => {

  it('renders by default', () => {
    const wrapper = shallow(<LandingPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})