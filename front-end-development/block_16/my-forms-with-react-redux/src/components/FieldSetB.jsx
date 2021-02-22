import React from 'react';
import PropTypes from 'prop-types';
import InputTypeText from './InputTypeText';

const FieldSetB = (props) => {
  return (
    <fieldset>
      <legend>My Jobs Informations</legend>
      <InputTypeText />
      <InputTypeText />
    </fieldset>
  );
};

FieldSetB.propTypes = {};

export default FieldSetB;
