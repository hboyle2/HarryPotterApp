import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
constructor(){
  super()
  this.state = {
    name: '',
    house: '',
    image: '',
    userInput: ''

  }
}
  

  componentDidMount(){
   
  }

  handleChange(val){
    this.setState({userInput: val})
  }
  
getPotterData(prop){
  
  axios.get("https://hp-api.herokuapp.com/api/characters").then((response) =>{
   
    for( var i=0; i<response.data.length; i++){
      if(response.data[i].name.toLowerCase() === prop.toLowerCase()){
       this.setState({
         name: response.data[i].name,
         house: response.data[i].house,
         image: response.data[i].image,
       })
      }
    }
    
    })
}

  
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input type="text" onChange={ (e)=>this.handleChange(e.target.value)}></input>
        <button onClick = {() => this.getPotterData(this.state.userInput)}>Click here</button>
        <p>{this.state.name}</p>
        <p>{this.state.house}</p>
        
      </div>
    );
  }
}

export default App;
