import React from 'react';
import PropTypes from 'prop-types';
import FieldSetA from '../components/FieldSetA';
import FieldSetB from '../components/FieldSetB';

const Home = (props) => {
  const { name, email, cpf, address, city, state } = props;
  return (
    <div>
      <FieldSetA
        name={ name }
        email={ email }
        cpf={ cpf }
        address={ address }
        city={ city }
        state={ state }
      />
      <FieldSetB />
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  experiences: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
  }),
}.isRequired;

export default Home;
