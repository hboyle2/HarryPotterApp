import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Team from './components/team.js';

class App extends Component {
constructor(){
  super()
  this.state = {
    name: '',
    house: '',
    image: '',
    userInput: '',
    team: []

  }
  this.getPotterData = this.getPotterData.bind(this);
  this.addToTeam = this.addToTeam.bind(this);
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

addToTeam(){
  let teamMember = {
    name: this.state.name,
    house: this.state.house,
    image: this.state.image}
  axios.post('http://localhost:3006/api/create', teamMember).then((response) => {
    this.setState({
      team: response.data
    });
  })
}

  
  render() {


    return (
      <div className="App">
        <div className="App-header" >
      
        </div>
        <div>
        <input type="text" className="form-control" placeholder="Search for..." type="text" onChange={ (e)=>this.handleChange(e.target.value)}></input>
        <button type="button" className="btn btn-danger" onClick = {() => this.getPotterData(this.state.userInput)}>Click here</button>
        </div>
        
        <div className='results'>
          <p className = 'p1'>You've chosen: {this.state.name}</p>
          <p className= 'p2'>House: {this.state.house}</p>
          <img src = {this.state.image} ></img> 
        </div>
        <button type="button" className="btn btn-danger" onClick = {() => {this.addToTeam()}}>Add to team</button> 
        < Team
        team={this.state.team}/>      
      </div>
    );
  }
}

export default App;
