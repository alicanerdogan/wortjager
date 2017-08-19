import React, { PureComponent } from 'react';

import Word from './Word';
import Answer from './Answer';

export default class Question extends PureComponent {
  componentDidMount() {
    this.props.getQuestion();
  }

  render() {
    const { word, questionType, isAnswerCorrect, sendAnswer, getQuestion } = this.props;
    if (!word) {
      return null;
    }
    return (
      <div className="question">
        {isAnswerCorrect === null
          ? <Word word={word} qType={questionType} sendAnswer={sendAnswer} />
          : <Answer word={word} isAnswerCorrect={isAnswerCorrect} getQuestion={getQuestion} />}
      </div>
    );
  }
}
