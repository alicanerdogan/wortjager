import React, { PureComponent } from 'react';

import Question from 'Containers/Question';
import Header from 'Components/Header';
import UserManagement from 'Components/UserManagement';

export default class App extends PureComponent {
  render() {
    const { loggedIn, signUp, login } = this.props;
    return (
      <div className="app-root">
        <Header />
        <main>
          {loggedIn ? <Question /> : <UserManagement signUp={signUp} login={login} />}
        </main>
      </div>
    );
  }
}
