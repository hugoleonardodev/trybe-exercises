import React from 'react';
import PropTypes from 'prop-types';

const InputTypeText = (props) => {
  console.log(Object.keys(props));
  const { name, value, handleInput } = props;
  console.log(props);
  return (
    <label htmlFor={name}>
      {name}
      <input
        // name={Object.keys(props)[0]}
        type="text"
        // value={name}
        onChange={(e) => handleInput(e.target.value, name)}
      />
    </label>
  );
};

InputTypeText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputTypeText;
