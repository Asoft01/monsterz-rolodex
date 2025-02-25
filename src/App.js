import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue];
  const [title, setTitle] = useState(''); 
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');
  // console.log({ searchField });
  // console.log(searchField);
  // console.log('render');

  useEffect(() => {
    console.log('effect fired'); 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // return monster.name.includes(event.target.value); 
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });
    
    setFilterMonsters(newFilteredMonsters);
    console.log('effect is firing');
  }, [monsters, searchField]);

  const onSearchChange =(event) => {
    const searchFieldString = event.target.value.toLowerCase(); 
    setSearchField(searchFieldString);
  }

  const onTitleChange =(event) => {
    const searchFieldString = event.target.value.toLowerCase(); 
    setTitle(searchFieldString);
  }
  
  // const onStringChange = (event) => {
  //   setStringField(event.target.value);
  // }
  // const filteredMonsters = monsters.filter((monster) => {
  //   // return monster.name.includes(event.target.value); 
  //   return monster.name.toLowerCase().includes(searchField); 
  // });
  
  // console.log(filteredMonsters);
  
  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <br/>
       <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='search title'
      />
      {/* <SearchBox 
        onChangeHandler={onStringChange}
        placeholder='set string'
      /> */}
      
     <CardList monsters={filteredMonsters}/>
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
