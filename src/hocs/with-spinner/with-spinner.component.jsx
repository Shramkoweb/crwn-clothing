import PropTypes from 'prop-types';
import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const WithSpinnerEnchanced = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };


  WithSpinnerEnchanced.propTypes = {
    isLoading: PropTypes.bool,
  };

  return WithSpinnerEnchanced;
};

export default WithSpinner;
