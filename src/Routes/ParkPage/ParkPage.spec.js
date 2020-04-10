import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Park from './ParkPage'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import PersonContext from '../../Context/PersonContext'

describe(`Market Route`, () => {
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
      location: "park",
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
        <Park />
      </PersonContext.Provider>
    </MemoryRouter>)
  })
})