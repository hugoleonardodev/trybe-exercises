import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CurriculumValidation = (props) => {
  console.log(props);
  const { name, email, cpf, address, city, state, experiences } = props;

  return (
    <fieldset>
      <legend>Curriculum</legend>
      <div>
        Name:
        <span style={ { color: 'white' } }>{name}</span>
      </div>
      <div>
        Email:
        <span style={ { color: 'white' } }>{email}</span>
      </div>
      <div>
        Cpf:
        <span style={ { color: 'white' } }>{cpf}</span>
      </div>
      <div>
        Address:
        <span style={ { color: 'white' } }>{address}</span>
      </div>
      <div>
        City:
        <span style={ { color: 'white' } }>{city}</span>
      </div>
      <div>
        State:
        <span style={ { color: 'white' } }>{state}</span>
      </div>
      <fieldset htmlFor="experiences">
        <legend>Experiences</legend>
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <fieldset key={ index }>
              <div>
                Job:
                <span style={ { color: 'white' } }>{experience.title}</span>
              </div>
              <div>
                Description:
                <span style={ { color: 'white' } }>{experience.info}</span>
              </div>
            </fieldset>
          ))
        ) : (
          <div />
        )}
      </fieldset>
    </fieldset>
  );
};

CurriculumValidation.propTypes = {
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

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  cpf: state.cpf,
  address: state.address,
  city: state.city,
  state: state.state,
  experiences: state.experiences,
});

export default connect(
  mapStateToProps,
)(CurriculumValidation);
