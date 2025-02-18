import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    // this.state = {
    //   name: 'Yihua',
    //   company: 'ZTM'
    // }
    this.state = {
    //   monster1: {
    //     name: 'Linda'
    //   }, 
    //   monster2: {
    //     name: 'Frank'
    //   }, 
    //   monster3: {
    //     name: 'Jacky'
    //   }

    monsters: [
        {
            name: 'Linda', 
            id: '12e12345e'
        }, 
        {
            name: 'Frank', 
            id: '12e12345b'

        }, 
        {
            name: 'Jacky', 
            id: '12e12345c'
        }, 
        {
            name: 'Andrei', 
            id: '12e12345f'
        }
    ]
    }
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
