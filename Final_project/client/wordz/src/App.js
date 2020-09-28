import React from 'react';
import logo from './logo.svg';
import {Wordcards} from './Components/Wordcards';
import {MenuBar} from './Components/MenuBar';
import {Definitions} from './Components/Definitions';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = ({words: [], definitions:[]})
  }
  componentDidMount(){
    for (let i = 0; i < 6;i++ ){
      fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=6&hasDetails=definitions&letterpattern=/^\S+$",
      {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      		"x-rapidapi-key": "4ca040923dmshca781b0df1ed411p18c182jsn7d523d812233"
      	}
      })
      .then(result => result.json())
      .then(data => {
        words.push({data.word});
        definitions.push({data.results});
      })
      .catch(err => console.log(err))
    }
  }
  render(){
    return(
      <div>
        <MenuBar/>
        <Wordcards words={this.state.words}/>
        <Definitions defs={this.state.definitions}/>
      </div>
    )
  }
}

export default App;
