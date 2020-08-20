import React from 'react';
import './App.css';
import Form from './submitform';
import View from './view';

class App extends React.Component{
  constructor(){
    super();
    this.state = {country: "Country...", city: "City...", res: {}}
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({country: e.target.elements[0].value, city: e.target.elements[1].value})
    let link = 'http://api.openweathermap.org/data/2.5/weather?q='+`${e.target.elements[1].value}`+'&units=metric&appid=680d19e9f0baec5624c314c6c592d750'
    fetch(link, {
  "method": "GET",
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({res: data})
      })
    .catch(err => {
      console.log(err);
      this.setState({res: err})
    });
    console.log(e.target.elements[0].value)
    console.log(e.target.elements[1].value)
  }
  cleanForm = (e) => {
    e.target.value = "";
  }
  render(){
    return(
      <div id="body">
        <div id="container">
          <h1>Weather Finder</h1>
          <h2>Check the temperature, humidity and more...</h2>
          <div id="form-and-view">
            <Form ctr = {this.state.country} cty = {this.state.city} funk = {this.handleSubmit} cleanForm={this.cleanForm}/>
            <View show = {this.state.res}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
