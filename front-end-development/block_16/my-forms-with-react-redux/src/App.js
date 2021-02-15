import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

import reactlogo from './react-logo.svg';
import reduxlogo from './redux-logo.svg';
import './App.css';

class App extends Component {
  static function() { // not public; exectuted before constructor

  }

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React Projects Template</h1>
        <img src={reactlogo} alt="react-logo" className="App-logo"/>
        <h2>With Redux</h2>
        <img src={reduxlogo} alt="redux-logo" className="App-logo"/>
      </div>
    );
  }
}

export default App;
