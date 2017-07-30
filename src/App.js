import React, { Component } from 'react';

import Question from 'Containers/Question';

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
        <Question />
      </div>
    );
  }
}
