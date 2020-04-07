import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import StartPage from './StartPage'

describe(`StartPage Route`, () => {

  it('renders by default', () => {
    const wrapper = shallow(<StartPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})