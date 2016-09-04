import React from 'react';
import {Link} from 'react-router';

export class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return(
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <Link to="/"><span className="material-icons">dashboard</span> Dashboard</Link>
            <Link to="/manage"><span className="material-icons">create</span> Manage</Link>
            <Link to="/calender"><span className="material-icons">date_range</span> Calender</Link>
            <Link to="/insight"><span className="material-icons">timeline</span> Insight</Link>
          </li>
        </ul>
      </div>
    )
  }
}
