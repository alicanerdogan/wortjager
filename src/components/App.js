import React, { PureComponent } from 'react';

import Question from 'Containers/Question';
import Header from 'Components/Header';
import UserManagement from 'Components/UserManagement';

export default class App extends PureComponent {
  render() {
    const { loggedIn, signUp, login, loginWithGoogle } = this.props;
    return (
      <div className="app-root">
        <Header />
        <main>
          <div className="container">
            {loggedIn ? <Question /> : <UserManagement signUp={signUp} login={login} loginWithGoogle={loginWithGoogle} />}
          </div>
        </main>
      </div>
    );
  }
}
