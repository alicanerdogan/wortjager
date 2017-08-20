import React, { PureComponent } from 'react';

export default class UserManagement extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false
    };
  }

  showSignUp() {
    this.setState(() => ({ showSignUp: true }));
  }

  showLogin() {
    this.setState(() => ({ showSignUp: false }));
  }

  render() {
    const { login, signUp } = this.props;
    const { showSignUp } = this.state;
    return <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        {
          showSignUp
      ? <SignUp signUp={signUp} showLogin={() => this.showLogin()} />
      : <Login login={login} showSignUp={() => this.showSignUp()} />
        }
      </div>
      <div className="col-md-2"></div>
    </div> ;
  }
}

class Login extends PureComponent {
  login() {
    const { login, showSignUp } = this.props;
    login(this.refs.email.value, this.refs.password.value).then(() => showSignUp());
  }

  render() {
    const { showSignUp } = this.props;
    return (
      <div className="user-management">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" ref="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" ref="password" className="form-control" placeholder="Password"/>
        </div>
        <button className="btn btn-primary btn-lg" onClick={() => this.login()}>Login</button>
        <button className="btn btn-secondary btn-lg" onClick={() => showSignUp()}>Sign Up</button>
      </div>
    );
  }
}

class SignUp extends PureComponent {
  signUp() {
    const { signUp, showLogin } = this.props;
    signUp(this.refs.email.value, this.refs.password.value).then(() => showLogin());
  }

  render() {
    const { showLogin } = this.props;
    return (
      <div className="user-management">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" ref="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" ref="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Repeat Password</label>
          <input type="password" ref="passwordRepeat" className="form-control" placeholder="Repeat Password"/>
        </div>
        <button className="btn btn-primary btn-lg" onClick={() => this.signUp()}>Sign Up</button>
        <button className="btn btn-secondary btn-lg" onClick={() => showLogin()}>Login</button>
      </div>
    );
  }
}
