import React, { Component } from 'react'

const PersonContext= React.createContext({
    starter:{},
    error: null,
    leader: false,
    instructions: true,
    name: '',
    start: true,
    userPage: false,
    game: false,
    setPersonInfo:()=>{},
    renderGame: () => {},
    renderUser: () => {},
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
      starter:{},
      error: null,
      leader: false,
      instructions: true,
      name: '',
      start: true,
      userPage: false,
      game: false,
    }

    renderGame = () => {
      this.setState({
        userPage: false,
        game: true})
    }

    renderUser = () => {
      this.setState({
        start: false,
        userPage: true})
    }

    setName = user => {
      this.setState({name: user})
    }
    setPersonInfo = info =>{
      this.setState({starter:info})
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
        starter: this.state.starter,
        error: this.state.error,
        leader: this.state.leader,
        instructions: this.state.instructions,
        name: '',
        start: this.state.start,
        userPage: this.state.userPage,
        game: this.state.game,
        setPersonInfo:this.setPersonInfo,
        renderGame: this.renderGame,
        renderUser: this.renderUser,
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
