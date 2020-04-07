import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Market from './MarketPage'
import { withRouter } from 'react-router-dom'
import { render } from 'enzyme'

describe(`Market Route`, () => {

  jest.mock('react-router', () => ({
    withRouter: Comp => props => <Comp {...props} />,
  }))

  test('displays location', () => {
    const pathname = '/market'
    const {getByTestId} = render(<Market />)
  })

})