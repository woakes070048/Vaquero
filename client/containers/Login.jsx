import React from 'react';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { email: '', password: ''}

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  
  handleLoginButtonClick() {
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          <div className="well well-lg">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" className="form-control"
                value={this.state.email} onChange={this.handleEmailChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control"
                value={this.state.password} onChange={this.handlePasswordChange} required />
            </div>
            <div className="form-group text-center">
              <a className="btn btn-raised btn-success"
                onClick={this.handleLoginButtonClick}>Login</a>
            </div>
            <div className="row text-center">
              Not registered? Sign up <a href="/auth/register">here</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
