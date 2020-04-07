import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

describe(`App component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders by default', () => {
    const wrapper = shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})