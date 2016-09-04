import React, {Component} from 'react';

import {Icon} from './Icon.jsx';

export class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar navbar-override">
        <div className="navbar-header">
          <Icon className="menu-toggle" iconName="menu" />
          <a className="navbar-brand-override">{this.props.title}</a>
        </div>
      </nav>
    );
  }
}
