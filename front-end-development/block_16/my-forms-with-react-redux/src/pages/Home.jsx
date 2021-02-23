import React from 'react';
import PropTypes from 'prop-types';
// import { Switch, Route, Link } from 'react-router-dom';
// import reactlogo from './react-logo.svg';
// import reduxlogo from './redux-logo.svg';
import FieldSetA from '../components/FieldSetA';
import FieldSetB from '../components/FieldSetB';

const Home = (props) => {
  const { name, email, cpf, address, city, state } = props;
  return (
    <div>
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

FieldSetB.propTypes = {};

export default Home;
