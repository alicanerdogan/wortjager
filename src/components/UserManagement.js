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
    return showSignUp
      ? <SignUp signUp={signUp} showLogin={() => this.showLogin()} />
      : <Login login={login} showSignUp={() => this.showSignUp()} />;
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
      <div>
        <input type="text" ref="email" />
        <input type="password" ref="password" />
        <button className="button primary" onClick={() => this.login()}>
          Login
        </button>
        <button className="button default" onClick={() => showSignUp()}>
          SignUp
        </button>
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
      <div>
        <input type="text" ref="email" />
        <input type="password" ref="password" />
        <button className="button primary" onClick={() => this.signUp()}>
          SignUp
        </button>
        <button className="button default" onClick={() => showLogin()}>
          Login
        </button>
      </div>
    );
  }
}
