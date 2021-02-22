import React from "react";
import PropTypes from "prop-types";
import InputTypeText from "./InputTypeText";
import InputTypeRadio from "./InputTypeRadio";

const FieldSetA = (props) => {
  console.log(props);
  const { name, email, cpf, address, city, state, onChange } = props;
  return (
    <fieldset>
      <legend>My Personal Informations</legend>
      <InputTypeText name="name" value={name} onChange={(e) => onChange(e)} />
      <InputTypeText name="email" value={email} onChange={(e) => onChange(e)} />
      <InputTypeText name="cpf" value={cpf} onChange={(e) => onChange(e)} />
      <InputTypeText
        name="address"
        value={address}
        onChange={(e) => onChange(e)}
      />
      <InputTypeText name="city" value={city} onChange={(e) => onChange(e)} />
      <InputTypeText name="state" value={state} onChange={(e) => onChange(e)} />
      <InputTypeRadio onChange={(e) => onChange(e)} />
    </fieldset>
  );
};

FieldSetA.propTypes = {};

export default FieldSetA;
