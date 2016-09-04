import React from 'react';

export class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container-fluid">
        <br />
        <div className="row text-center">
          <h1>Page Not Found</h1>
          <p>Looks what you were trying to find isnt here,<br/>
          so try going to a different page.</p>
        </div>
      </div>
    );
  }
}
