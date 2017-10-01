import React, { PureComponent } from 'react';

import Text from './input/Text';
import Artikel from './input/Artikel';

export default class Word extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answerCommitted: false
    };
  }

  sendAnswer(answer) {
    this.props.sendAnswer(answer);
  }

  onAnswerSubmit(answer) {
    this.setState(prevState =>
      Object.assign({}, prevState, {
        answerCommitted: true
      })
    );
    this.sendAnswer(answer);
  }

  getHint(word, qType) {
    if (qType === 'artikel') {
      return word.word;
    }
    if (word.type === 'noun') {
      return `${word.props.artikel} ${word.word}`;
    }
    return word.word;
  }

  getQuestion(word, qType) {
    return `What is the ${qType} for "${this.getHint(word, qType)}"?`;
  }

  getInput(qType) {
    if (qType === 'artikel') {
      return <Artikel disabled={this.state.answerCommitted} onSubmit={a => this.onAnswerSubmit(a)} />;
    }
    return <Text disabled={this.state.answerCommitted} onSubmit={a => this.onAnswerSubmit(a)} />;
  }

  render() {
    const { word, qType } = this.props;

    return (
      <div className="word">
        <p>{this.getQuestion(word, qType)}</p>
        {this.getInput(qType)}
        {this.state.correct === true && <p>YAY</p>}
        {this.state.correct === false && <p>NAY</p>}
      </div>
    );
  }
}
