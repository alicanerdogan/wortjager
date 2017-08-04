import { connect } from 'react-redux';

import Question from 'Components/Question';
import { getWord } from 'Actions/api';
import { createAndCheckAnswer, getQuestion } from 'Actions/flow';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion()),
  createAndCheckAnswer: (answer, word, questionType) => dispatch(createAndCheckAnswer(answer, word, questionType)),
  getQuestionByIndex: wordIndex => dispatch(getQuestion(wordIndex))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  dispatchProps.getNextQuestion = () => dispatchProps.getQuestionByIndex(stateProps.pageIndex + 1);
  dispatchProps.checkAnswer = answer =>
    dispatchProps.createAndCheckAnswer(answer, stateProps.word, stateProps.questionType);
  return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Question);
