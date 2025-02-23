import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('a'); // [value, setValue];
  // console.log({ searchField });
  console.log(searchField);
  const onSearchChange =(event) => {
    const searchFieldString = event.target.value.toLowerCase(); 
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [], 
//       searchField: ''
//     }; 
//     console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('Component Did Mount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//        .then((response) => response.json())
//        .then((users) => this.setState(() => {
//         return {monsters: users}
//        }, 
//         () => {
//             console.log(this.state);
//         } 
//         ))
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase(); 
//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )
//   }

//   render (){
//     console.log('render')
//     const { monsters, searchField } = this.state; 
//     const {onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       // return monster.name.includes(event.target.value); 
//       return monster.name.toLowerCase().includes(searchField); 
//     }); 

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//           />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
