import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { getSections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps}/>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: getSections,
});

export default connect(mapStateToProps)(Directory);
