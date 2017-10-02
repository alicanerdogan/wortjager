import React, { PureComponent } from 'react';
import { GOOGLE_OAUTH_URI } from 'Configurations/runtime';

export default class UserManagement extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSignUp: false,
      googleLogin: window.location.pathname === '/auth/google'
    };
  }

  showSignUp() {
    this.setState(() => ({ showSignUp: true }));
  }

  showLogin() {
    this.setState(() => ({ showSignUp: false }));
  }

  render() {
    const { login, loginWithGoogle, signUp } = this.props;
    const { showSignUp, googleLogin } = this.state;

    if (googleLogin) {
      return <GoogleLogin login={loginWithGoogle} />;
    }

    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          {showSignUp ? (
            <SignUp signUp={signUp} showLogin={() => this.showLogin()} />
          ) : (
            <Login login={login} showSignUp={() => this.showSignUp()} />
          )}
        </div>
        <div className="col-md-3" />
      </div>
    );
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
        <div className="w-form">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              ref="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" ref="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <button className="btn btn-primary btn-block" onClick={() => this.login()}>
          Login
        </button>
        <a
          className="btn btn-secondary btn-block"
          href={GOOGLE_OAUTH_URI}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            version="1.0"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            style={{ verticalAlign: 'sub', marginRight: '8px' }}
          >
            <g id="surface1">
              <path d="M 12.546875 10.238281 L 12.546875 14.058594 L 17.988281 14.058594 C 17.277344 16.375 15.34375 18.03125 12.546875 18.03125 C 9.214844 18.03125 6.511719 15.332031 6.511719 12 C 6.511719 8.667969 9.214844 5.96875 12.546875 5.96875 C 14.042969 5.96875 15.410156 6.515625 16.464844 7.421875 L 19.28125 4.605469 C 17.503906 2.988281 15.140625 2 12.546875 2 C 7.019531 2 2.542969 6.476563 2.542969 12 C 2.542969 17.523438 7.019531 22 12.546875 22 C 20.941406 22 22.792969 14.148438 21.972656 10.253906 Z " />
            </g>
          </svg>
          Login with Google
        </a>
        <button className="btn btn-secondary btn-block" onClick={() => showSignUp()}>
          Sign Up
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
      <div className="user-management">
        <h2>Sign Up</h2>
        <div className="w-form">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              ref="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" ref="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Repeat Password</label>
            <input type="password" ref="passwordRepeat" className="form-control" placeholder="Repeat Password" />
          </div>
        </div>
        <button className="btn btn-primary btn-block" onClick={() => this.signUp()}>
          Sign Up
        </button>
      </div>
    );
  }
}

class GoogleLogin extends PureComponent {
  componentDidMount() {
    this.props.login(window.location.search.substr(6));
  }

  render() {
    return <p>Logging In With Google Credentials</p>;
  }
}
