import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonSubmit = (props) => {
  return (
    <div>
      <button
        id="asdasdadasdadasdasdasdasdasdasdassdasdasd"
        className="asdasdasdasdasdasdasd"
        type="submit"
      >
        <Link to="/curriculum">Submit</Link>
      </button>
    </div>
  );
};

ButtonSubmit.propTypes = {};

export default ButtonSubmit;
