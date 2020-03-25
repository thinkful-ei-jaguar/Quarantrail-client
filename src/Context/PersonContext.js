import React, { Component } from 'react'

const PersonContext= React.createContext({
    starter:{},
    error: null,
    name: '',
    setName: () => {},
    setPersonInfo: () => {},
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

    setPersonInfo = info =>{
      this.setState({starter:info})
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
        starter: this.state.starter,
        error: this.state.error,
        name: '',
        setName: this.setName,
        setPersonInfo: this.setPersonInfo,
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
