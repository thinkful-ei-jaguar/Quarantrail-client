import React, { Component } from 'react'

const PersonContext= React.createContext({
    person:{},
})

export default PersonContext

export class PersonProvider extends Component {
    state = {
      person:{},
    }

    render() {
      const value = {
        person: this.state.person,
      }

      return (
        <PersonContext.Provider value={value}>
          {this.props.children}
        </PersonContext.Provider>
      )
    }  
  }
