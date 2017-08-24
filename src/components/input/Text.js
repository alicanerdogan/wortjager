import React, { PureComponent } from 'react';

export default class Verb extends PureComponent {
  componentDidMount() {
    this.refs.answer.focus();
  }

  constructor(props) {
    super(props);

    this.state = {
      answerCommitted: false
    };
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.onClick();
    }
  }

  onClick() {
    const answer = this.refs.answer.value.trim();
    answer && this.props.onSubmit && this.props.onSubmit(answer);
  }

  render() {
    const { disabled } = this.props;

    return (
      <div className="input-text">
        <button className="btn btn-outline-primary" onClick={() => this.onClick()}>
          enter
        </button>
        <div className="input-container">
          <input ref="answer" type="text" onKeyDown={event => this.onKeyDown(event)} disabled={disabled} />
        </div>
      </div>
    );
  }
}
