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
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {loggedIn ? <Question /> : <UserManagement signUp={signUp} login={login} />}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
