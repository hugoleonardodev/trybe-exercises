import React from 'react';
import PropTypes from 'prop-types';

const InputTypeText = (props) => {
  const { name, handleInput } = props;

  return (
    <label htmlFor={name}>
      {name}
      <input type="text" onChange={(e) => handleInput(e.target.value, name)} />
    </label>
  );
};

InputTypeText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputTypeText;
