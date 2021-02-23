import React from 'react';
import PropTypes from 'prop-types';
import InputTypeText from './InputTypeText';
import { handleInput, pushJobAndDescription } from '../store/actions';
import { connect } from 'react-redux';
import ButtonAdd from './ButtonAdd';
import ButtonSubmit from './ButtonSubmit';

const FieldSetB = (props) => {
  const {
    job,
    description,
    handleInput,
    pushJobAndDescription,
    experiences,
  } = props;

  return (
    <div>
      <fieldset>
        <legend>My Jobs Informations</legend>
        <InputTypeText name="job" value={job} handleInput={handleInput} />
        <InputTypeText
          name="description"
          value={description}
          handleInput={handleInput}
        />
        <ButtonAdd
          pushJobAndDescription={pushJobAndDescription}
          job={job}
          description={description}
        />
        <ButtonSubmit />
      </fieldset>
      <article>
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <fieldset key={index}>
              <div>
                Job:
                <span style={{ color: 'white' }}>{experience.title}</span>
              </div>
              <div>
                Description:
                <span style={{ color: 'white' }}>{experience.info}</span>
              </div>
            </fieldset>
          ))
        ) : (
          <div />
        )}
      </article>
    </div>
  );
};

FieldSetB.propTypes = {};

const mapStateToProps = (state) => ({
  job: state.job,
  description: state.description,
  experiences: state.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: (position, input) => dispatch(handleInput(position, input)),
  pushJobAndDescription: (job, description) =>
    dispatch(pushJobAndDescription(job, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldSetB);
