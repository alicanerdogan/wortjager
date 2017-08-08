import React, { Component } from 'react';

import Word from './Word';
import Answer from './Answer';

export default class Question extends Component {
  componentDidMount() {
    this.props.getNextQuestion();
  }

  render() {
    const { word, questionType, isAnswerCorrect, checkAnswer, getNextQuestion } = this.props;
    if (!word) {
      return null;
    }
    return (
      <div className="question">
        {isAnswerCorrect === null
          ? <Word word={word} qType={questionType} checkAnswer={checkAnswer} />
          : <Answer word={word} isAnswerCorrect={isAnswerCorrect} getNextQuestion={getNextQuestion} />}
      </div>
    );
  }
}
