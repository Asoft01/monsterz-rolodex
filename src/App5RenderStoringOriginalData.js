import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }; 
    console.log('constructor')
  }

  componentDidMount(){
    console.log('Component Did Mount')
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
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            // console.log({startingArray: this.state.monsters});
            console.log(event.target.value); 
            const searchString = event.target.value.toLowerCase();
            
            // [{name: 'Leanne'}, {name: 'Yihua'}]
            const filteredMonsters = this.state.monsters.filter((monster) => {
              // return monster.name.includes(event.target.value); 
              return monster.name.toLowerCase().includes(searchString); 
            }); 

            this.setState(
              () => {
              return { monsters: filteredMonsters };
            }, 
            // () => {
            //   console.log({endingArray: this.state.monsters})
            // }
          )

          }} 
        />
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
