import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { sectionsData } from '../../mocks/sections-data';

class Directory extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sections: sectionsData,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...menuItemProps }) => (
          <MenuItem key={id} {...menuItemProps}/>
        ))}
      </div>
    );
  }

}

export default Directory;
