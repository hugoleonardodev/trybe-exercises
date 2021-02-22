import React from "react";
import PropTypes from "prop-types";

const InputTypeText = (props) => {
  // console.log(props);
  const { name, value, onChange } = props;
  return (
    <label htmlFor={name}>
      {name}
      <input
        name={name}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
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
