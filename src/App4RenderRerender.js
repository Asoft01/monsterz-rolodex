import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
    monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((users) => this.setState(() => {
        return {monsters: users}
       }, 
        () => {
            console.log(this.state);
        } 
        ))
  }

  render (){
    return (
      <div className="App">
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}
        {this.state.monsters.map((monster) => {
            // return <h1 key={monster.name}>{monster.name}</h1>;
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;
