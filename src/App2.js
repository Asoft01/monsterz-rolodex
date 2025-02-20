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
      name: {firstName: 'Yihua', lastName: 'Zhang'},
      company: 'ZTM'
    }
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p> 
          {/* <p>Hi {this.state.name}, I work at {this.state.company}</p>  */}
          <button onClick={() => {
            // this.state.name= 'Andrei'; 
            // console.log(this.state);
            // this.setState({name: 'Andrei'}); 
            ////////////////////////////////
            // this.setState({name :{firstName: 'Andrei', lastName: 'Neagoi'}})
            // console.log(this.state);
            this.setState(
              () => {
                return {
                  name: {firstName: 'Andrei', 'lastName': 'Neagoi'}
                };
              },
              () => {
                console.log(this.state);
              }
            )
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
