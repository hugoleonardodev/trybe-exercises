import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInput, pushJobAndDescription } from '../store/actions';

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

// CurriculumValidation.propTypes = {};

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  cpf: state.cpf,
  address: state.address,
  city: state.city,
  state: state.state,
  experiences: state.experiences,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleInput: (position, input) => dispatch(handleInput(position, input)),
//   pushJobAndDescription: (job, description) => dispatch(pushJobAndDescription(job, description)),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(CurriculumValidation);
