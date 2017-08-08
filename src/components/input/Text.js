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
      const answer = event.target.value;
      answer && this.props.onSubmit && this.props.onSubmit(answer);
    }
  }

  render() {
    const { disabled } = this.props;

    return (
      <div className="input-text">
        <input ref="answer" type="text" onKeyDown={event => this.onKeyDown(event)} disabled={disabled} />
        <button>→</button>
      </div>
    );
  }
}
