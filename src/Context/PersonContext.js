import React, { Component } from 'react'

const PersonContext= React.createContext({
    person:{},
    error: null,
    leader: false,
    instructions: true,
    name: '',
    setName: () => {},
    toggleLeader: () => {},
    toggleInstruct: () => {},
    setPerson: () => {},
    setError: () => {},
    clearError: () => {},
})

export default PersonContext

export class PersonProvider extends Component {
    state = {
      person:{},
      error: null,
      leader: false,
      instructions: true,
      name: '',
    }

    setName = user => {
      this.setState({name: user})
    }

    toggleLeader = () => {
      this.setState({leader: !this.state.leader})
    }

    toggleInstruct = () => {
      this.setState({instructions: !this.state.instructions})
    }

    setPerson = person => {
      this.setState({ person })
    }

    setError = error => {
      console.error(error)
      this.setState({ error })
    }

    clearError = () => {
      this.setState({ error: null })
    }

    render() {
      const value = {
        person: this.state.person,
        error: this.state.error,
        leader: false,
        instructions: true,
        name: '',
        setName: this.setName,
        toggleLeader: this.toggleLeader,
        toggleInstruct: this.toggleInstruct,
        setPerson: this.setPerson,
        setError: this.setError,
        clearError: this.clearError,
      }

      return (
        <PersonContext.Provider value={value}>
          {this.props.children}
        </PersonContext.Provider>
      )
    }  
  }
