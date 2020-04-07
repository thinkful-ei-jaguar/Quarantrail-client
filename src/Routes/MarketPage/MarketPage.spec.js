import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Market from './MarketPage'

describe(`Market Route`, () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Market />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})