import React from 'react'
import GamePage from './GamePage'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PersonContext from '../../Context/PersonContext'

describe(`GamePage Route`, () => {
  // it('renders without crashing', () => {
  //   const div = createElement('div')
  //   ReactDOM.render(<GamePage />, div)
  //   ReactDOM.unmountComponentAtNode('div')
  // })

  it('renders by default', () => {
    const testStarter = {
      health: 0,
      boredom: 0,
      food: 3,
      toiletpaper: 3,
      id: 1
    }
    const ctxval = {
      starter: testStarter,
      error: null,
      name: "testName",
      character: 'female',
      day: 1,
      dailyActivities: 0,
      activityTracker: {},
      location: "home",
      dead: "",
      curveball: false,
      renderCurve: false,
      washHands: false,
      buyOnce: false,
      renderPhone: false,
      TV: false,
      renderFeedback: false,
      increaseRate: {},
      setIncrease: () => {},
      updateFeedback: () => {},
      updatePhone: () => {},
      updateBuy: () => {},
      updateCurve: () => {},
      updateRenderCurve: () => {},
      setDeath: () => {},
      setName: () => {},
      setCharacter: () => {},
      setPersonInfo: () => {},
      setError: () => {},
      clearError: () => {},
      addToHealth: () => {},
      addToFood: () => {},
      addToToilet: () => {},
      incrementDay: () => {},
      addToFoodandToilet: () => {},
      addToBoredom: () => {},
      updateLocation: () => {},
      resetDay: () => {},
      setWash: () => {},
      clearActivites: () => {},
      updateActivityTracker: () => {}
    }
    mount(<MemoryRouter>
      <PersonContext.Provider value={ctxval}>
        <GamePage />
      </PersonContext.Provider>
    </MemoryRouter>)
  })
})