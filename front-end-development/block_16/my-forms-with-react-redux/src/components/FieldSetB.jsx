import React from 'react';
import PropTypes from 'prop-types';
import InputTypeText from './InputTypeText';
import { handleInput } from '../store/actions';
import { connect } from 'react-redux';
import ButtonAdd from './ButtonAdd';

const FieldSetB = (props) => {
  const { job, description, handleInput } = props;
  return (
    <fieldset>
      <legend>My Jobs Informations</legend>
      <InputTypeText name="job" value={job} handleInput={handleInput} />
      <InputTypeText
        name="description"
        value={description}
        handleInput={handleInput}
      />
      <ButtonAdd />
    </fieldset>
  );
};

FieldSetB.propTypes = {};

const mapStateToProps = (state) => ({
  job: state.job,
  description: state.description,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (position, input) => dispatch(handleInput(position, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldSetB);
