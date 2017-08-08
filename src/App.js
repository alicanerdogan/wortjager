import React, { Component } from 'react';

import Question from 'Containers/Question';
import Header from 'Components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
        <Header />
        <main>
          <Question />
        </main>
      </div>
    );
  }
}
