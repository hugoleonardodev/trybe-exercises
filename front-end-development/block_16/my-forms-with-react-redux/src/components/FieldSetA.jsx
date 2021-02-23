import React from 'react';
import PropTypes from 'prop-types';
import InputTypeText from './InputTypeText';
import InputTypeRadio from './InputTypeRadio';
import { handleInput } from '../store/actions';
import { connect } from 'react-redux';

const FieldSetA = (props) => {
  console.log(props);
  const { name, email, cpf, address, city, state, type, handleInput } = props;
  return (
    <fieldset>
      <legend>My Personal Informations</legend>
      <InputTypeText name="name" value={name} handleInput={handleInput} />
      <InputTypeText name="email" value={email} handleInput={handleInput} />
      <InputTypeText name="cpf" value={cpf} handleInput={handleInput} />
      <InputTypeText name="address" value={address} handleInput={handleInput} />
      <InputTypeText name="city" value={city} handleInput={handleInput} />
      <InputTypeText name="state" value={state} handleInput={handleInput} />
      <InputTypeRadio name="type" value={type} handleInput={handleInput} />
    </fieldset>
  );
};

FieldSetA.propTypes = {};

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  cpf: state.cpf,
  address: state.address,
  city: state.city,
  state: state.state,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (position, input) => dispatch(handleInput(position, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldSetA);
