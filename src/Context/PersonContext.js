import React, { Component } from 'react'

const PersonContext= React.createContext({
    starter:{},
    error: null,
    name: '',
    day:1,
    dead:'',
    setDeath:()=>{},
    setName: () => {},
    setPersonInfo: () => {},
    setError: () => {},
    clearError: () => {},
    addToHealth:()=>{},
    addToFood:()=>{},
    addToToilet:()=>{},
    incrementDay:()=>{},
    addToFoodandToilet:()=>{}
})

export default PersonContext

export class PersonProvider extends Component {
    state = {
      starter:{},
      error: null,
      name: '',
      day:0,
      dead:'',
    }
    setDeath = death =>{
      this.setState({dead:death})
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
    addToHealth = health => {
      let newHealth = this.state.starter.health;
      newHealth+=health;
      this.setState({
        starter:{
          ...this.state.starter,
          health:newHealth
        }
      })
    }

    addToFood = foods =>{
      let newerFood = this.state.starter.food;
      console.log(newerFood);
      newerFood+=foods;
      console.log(newerFood);
      this.setState({
        starter:{
          ...this.state.starter,
          food:newerFood
        }
      })
      console.log(this.state.starter.food)
    }
    addToToilet = toilet =>{
      let newToilet = this.state.starter.toiletpaper;
      newToilet+=toilet;
      this.setState({
        starter:{
          ...this.state.starter,
          toiletpaper:newToilet
        }
      })
    }
    addToFoodandToilet = (f,t)=>{
      let F=parseInt(f);
      let T=parseInt(t);
      let nT=this.state.starter.toiletpaper;
      let nF= this.state.starter.food;
      nT+=T;
      nF+=F;
      this.setState({
        starter:{
          ...this.state.starter,
          toiletpaper:nT,
          food:nF,
        }
      })
      

    }
    incrementDay = () =>{
      let newday =this.state.day;
      newday +=1;
      this.setState({day:newday})
    }

    render() {
      const value = {
        starter: this.state.starter,
        error: this.state.error,
        name: '',
        day:this.state.day,
        dead:this.state.dead,
        setDeath:this.setDeath,
        setName: this.setName,
        setPersonInfo: this.setPersonInfo,
        setError: this.setError,
        clearError: this.clearError,
        addToFoodandToilet:this.addToFoodandToilet,
        addToHealth:this.addToHealth,
        addToFood:this.addToFood,
        addToToilet:this.addToToilet,
        incrementDay:this.incrementDay,
      }

      return (
        <PersonContext.Provider value={value}>
          {this.props.children}
        </PersonContext.Provider>
      )
    }  
  }
