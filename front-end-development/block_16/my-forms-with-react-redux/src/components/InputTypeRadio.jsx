import React from 'react';
import PropTypes from 'prop-types';

const InputTypeRadio = (props) => {
  const { handleInput } = props;

  return (
    <fieldset>
      <legend>Residence type</legend>
      <label htmlFor="house">
        <input
          type="radio"
          name="type"
          value="house"
          id="house"
          onChange={(e) => handleInput(e.target.value, 'type')}
        />
        House
      </label>
      <label htmlFor="apartment">
        <input
          type="radio"
          name="type"
          value="apartment"
          id="apartment"
          onChange={(e) => handleInput(e.target.value, 'type')}
        />
        Apartment
      </label>
    </fieldset>
  );
};

InputTypeRadio.propTypes = {
  onChange: PropTypes.func,
}.isRequired;

export default InputTypeRadio;
