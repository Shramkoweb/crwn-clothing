import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import {getSections} from '../../redux/directory/directory.selectors';
import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({id, ...menuItemProps}) => (
        <MenuItem key={id} {...menuItemProps}/>
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: getSections,
});

export default connect(mapStateToProps)(Directory);

Directory.propTypes = {
  sections: PropTypes.array,
};
