import React from "react";
import Card from './Components/Card';
import Board from './Components/Board';
import Board2 from './Components/Board2';

class AppMain extends React.Component{
  constructor(){
    super();
    this.state={words:[],definitions:[]}
  }
  componentWillMount(){
  this._isMounted = true;
  setInterval(() => {
           this.setState(() => {
               return { unseen: "does not display" }
           });
       }, 1000);
  let words = [];
  let definitions = [];
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
              words.push(data.word);
              definitions.push(data.results);
    })
    .catch(err => console.log(err))
    }
  this.setState({words:words,definitions:definitions})
  }

  render(){
    const dropOff = (e) => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);
      card.style.display = "block";
      e.target.appendChild(card);
    }

    const dragOver = (e) => {
      e.preventDefault();
    }

    const clickHandler = () => {
      console.log("Click!")
      let counter = 0;
      for (let i = 0; i<6; i++){
        let elem = document.getElementById(i);
        if (elem.children[1].children.length === 1) {
          counter++
        }
      }
      if (counter < 5){
        alert("Please drag all definitions to the right words!")
      } else {
        let counter2 = 0;
        for (let i = 0; i<6; i++){
          let elem = document.getElementById(i);
          if (parseInt(elem.children[1].children[0].id[3], 10) === i) {
            counter2++
          }
        }
        if (counter2 == 6) {
          alert("Well done!")
          this.setState({words: ["a"],definitions:[["a"]]})
          let words = [];
          let definitions = [];
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
                      words.push(data.word);
                      definitions.push(data.results);
            })
            .catch(err => console.log(err))
            }
          this.setState({words:words,definitions:definitions})
        } else {
          alert("Something is wrong. Try again!")
        }
      }
    }
    return(
      <main className="flexbox">
        <Board words={this.state.words}/>
        <Board2 definitions={this.state.definitions}/>
        <button onClick={clickHandler}>Done!</button>
      </main>
    )
  }

}

export default AppMain;
