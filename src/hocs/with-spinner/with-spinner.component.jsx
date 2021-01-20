import PropTypes from 'prop-types';
import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const WithSpinnerEnhanced = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };


  WithSpinnerEnhanced.propTypes = {
    isLoading: PropTypes.bool,
  };

  return WithSpinnerEnhanced;
};

export default WithSpinner;
