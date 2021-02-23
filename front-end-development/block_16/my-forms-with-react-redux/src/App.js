import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

// import reactlogo from './react-logo.svg';
// import reduxlogo from './redux-logo.svg';
import './App.css';
import FieldSetA from './components/FieldSetA';
import FieldSetB from './components/FieldSetB';

const App = (props) => {
  const { name, email, cpf, address, city, state } = props;
  return (
    <div className="App">
      <FieldSetA
        name={name}
        email={email}
        cpf={cpf}
        address={address}
        city={city}
        state={state}
        onChange={(e) => this.handleInput(e)}
      />
      <FieldSetB />
    </div>
  );
};

export default App;
