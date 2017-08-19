import { connect } from 'react-redux';

import Question from 'Components/Question';
import { sendAnswer, getQuestion } from 'Actions/api';

const mapStateToProps = ({ word, questionType, isAnswerCorrect }) => ({ word, questionType, isAnswerCorrect });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { sendAnswer } = dispatchProps;
  const { word, questionType } = stateProps;
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    sendAnswer: answer => sendAnswer(answer, word.id, questionType)
  });
};

export default connect(mapStateToProps, { getQuestion, sendAnswer }, mergeProps)(Question);
