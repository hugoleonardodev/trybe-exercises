import React from 'react';
import PropTypes from 'prop-types';

const ButtonAdd = (props) => {
  const { pushJobAndDescription, job, description } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={() => pushJobAndDescription(job, description)}
      >
        Add
      </button>
    </div>
  );
};

ButtonAdd.propTypes = {
  job: PropTypes.string,
  description: PropTypes.string,
  pushJobAndDescription: PropTypes.func,
}.isRequired;

export default ButtonAdd;
