import React from 'react';
import PropTypes from 'prop-types';

const ButtonAdd = (props) => {
  const { pushJobAndDescription, job, description } = props;
  return (
    <div>
      <button
        id="asdasasdasd"
        className="asdasdasd"
        type="submit"
        onClick={() => pushJobAndDescription(job, description)}
      >
        Add
      </button>
    </div>
  );
};

ButtonAdd.propTypes = {};

export default ButtonAdd;
