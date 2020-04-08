import React, { Component } from "react";
import PersonContext from "../../Context/PersonContext";
import SimpleGame from "../SimpleGame/SimpleGame"
import './TV.css'

export default class Pet extends Component {
  static contextType = PersonContext;
  constructor(props){
    super(props);
    this.state={
      width:0,
      height:0,
    }
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions=()=> {
    this.setState({ width: this.inner.clientHeight, height: this.inner.clientWidth});
  }
  render(){
    console.log(this.state)
    if(!this.state.width==0){
  return ( 
    <> 
    <div className="TV" ref ={(inner)=>{this.inner=inner}}>
      <div className ="TV-Container" >
        <SimpleGame width={this.state.width} height={this.state.height}></SimpleGame>
      </div>
    </div>
    <button onClick={()=>this.context.turnTV(false)} class="tv-button">done</button>
    </>
    )
  }
  return <>
  <div className="TV" ref ={(inner)=>{this.inner=inner}}>
  <div className ="TV-Container"/>
  </div>
  </>
  }
}
//<div className="TV-container"></div>