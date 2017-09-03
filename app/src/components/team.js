import React, { Component } from 'react';


 export default class Team extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            team: props.team
          };
        }
      
       
        componentWillReceiveProps(props) {
          this.setState({
            team: props.team
          });
        }
      
        render() {
        
          const team = this.state.team.map((member, index) => (
          <div>
            <h1>{member.name}</h1>
            <h2>{member.house}</h2>
            <img src={member.image} />
          </div>
          )
          );
          return (
            <div className="team">
              <h1>Your Pokemon Team</h1>
              <div className="teamList">
                {team}
              </div>
            </div>
          );
        }
      }
      
 