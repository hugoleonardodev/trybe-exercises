import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSubmit = (props) => {
  return (
    <div>
      <button
        type="submit"
      >
        <Link to="/curriculum">Submit</Link>
      </button>
    </div>
  );
};

export default ButtonSubmit;
