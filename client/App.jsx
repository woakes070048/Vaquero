import React from 'react';

import {Base} from './containers/Base.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Base />
      </div>
    );
  }
}
