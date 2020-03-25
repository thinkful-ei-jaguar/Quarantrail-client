import React, { Component } from 'react'

const PersonContext= React.createContext({
    starter:{},
    error: null,
    name: '',
    setName: () => {},
    setPerson: () => {},
    setError: () => {},
    clearError: () => {},
})

export default PersonContext

export class PersonProvider extends Component {
    state = {
      starter:{},
      error: null,
      name: '',
    }

    setName = user => {
      this.setState({name: user})
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
        startlife: this.state.startlife,
        error: this.state.error,
        name: '',
        setName: this.setName,
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
