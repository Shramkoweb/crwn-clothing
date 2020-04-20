import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { directorySections } from '../../mocks/directory-sections';

class Directory extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sections: directorySections,
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
