import PropTypes from 'prop-types';
import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...props}) => {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
};
