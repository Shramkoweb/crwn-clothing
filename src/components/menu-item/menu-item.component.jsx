import PropTypes from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);

MenuItem.propTypes = {
  history: PropTypes.object,
  imageUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  match: PropTypes.object,
  size: PropTypes.string,
  title: PropTypes.string,
};
