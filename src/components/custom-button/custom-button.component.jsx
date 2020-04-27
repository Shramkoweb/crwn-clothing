import React from 'react';
import cls from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted,  ...otherButtonProps }) => {
  const componentClassName = cls('custom-button', {
    'google-sign-in': isGoogleSignIn,
    'inverted': inverted,
  });

  return (
    <button
      className={componentClassName}
      {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;

