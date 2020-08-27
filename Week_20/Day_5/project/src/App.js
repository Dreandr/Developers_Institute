import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Post from './Components/Post';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:post_id" component={Post}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
