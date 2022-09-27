import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Components/Views/Landing';
import Home from './Components/Views/Home';



class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
      </Router>
    );
  }
}

export default App;

