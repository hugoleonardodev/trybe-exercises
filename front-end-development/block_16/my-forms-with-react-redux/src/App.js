import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

// import reactlogo from './react-logo.svg';
// import reduxlogo from './redux-logo.svg';
import './App.css';
import FieldSetA from './components/FieldSetA';
import FieldSetB from './components/FieldSetB';

class App extends Component {
  static function() {
    // not public; exectuted before constructor
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      job: '',
      description: '',
      experiences: [], // array of objects with keys { job: 'Job Title', description: 'Job Description' }
      // type: ''
    };
  }

  handleInput(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  pushJobAndDescription() {
    const { job, description, experiences } = this.state;
    let experience = { job: job, description: description };
    experiences.concat(experience); // spread [...experiences, experience]
    this.setState({
      job: '',
      description: '',
      experiences: experiences,
    });
  }

  render() {
    const { name, email, cpf, address, city, state } = this.state;
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
  }
}

export default App;
