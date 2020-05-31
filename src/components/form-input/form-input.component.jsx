import PropTypes from 'prop-types';
import React from 'react';

import {FormInputContainer, FormInputLabel, GroupContainer} from './form-input.styles';

const FormInput = ({handleChange, label, ...props}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};
