import React from 'react';

import {NavBar} from '../components/NavBar.jsx';
import {SideNav} from '../components/SideNav.jsx';

export class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <NavBar title="Vaquero" />
        <div className="container-fluid">
          <div id="wrapper">
            <SideNav />
          </div>
        </div>
    </div>
    );
  }
}
