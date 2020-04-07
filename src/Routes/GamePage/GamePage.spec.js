import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import GamePage from './GamePage'
import { createElement } from 'react'

describe(`GamePage Route`, () => {
  it('renders without crashing', () => {
    const div = createElement('div')
    ReactDOM.render(<GamePage />, div)
    ReactDOM.unmountComponentAtNode('div')
  })

  it('renders by default', () => {
    const wrapper = shallow(<GamePage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})