import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EndPage from './EndPage'

describe(`EndPage Route`, () => {

  it('renders by default', () => {
    const wrapper = shallow(<EndPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})