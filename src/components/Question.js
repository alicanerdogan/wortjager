import React, { Component } from 'react';

import Word from './Word';
import Answer from './Answer';

export default class Question extends Component {
  componentDidMount() {
    this.props.getWord();
  }

  render() {
    const { word, questionType, isAnswerCorrect, createAndCheckAnswer, getNextWord } = this.props;
    if (!word) {
      return null;
    }
    return (
      <div>
        {isAnswerCorrect === null
          ? <Word word={word} qType={questionType} createAndCheckAnswer={createAndCheckAnswer} />
          : <Answer word={word} isAnswerCorrect={isAnswerCorrect} getNextWord={getNextWord} />}
      </div>
    );
  }
}
