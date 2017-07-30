import { connect } from 'react-redux';

import Question from 'Components/Question';
import mapStateToQuestionType from 'Selectors/mapStateToQuestionType';
import { getWord } from 'Actions/api';
import { createAndCheckAnswer } from 'Actions/flow';

const mapStateToProps = state => {
  return {
    word: state.word,
    questionType: mapStateToQuestionType(state),
    isAnswerCorrect: state.isAnswerCorrect,
    pageIndex: state.pageIndex,
    totalCount: state.totalCount
  };
};

const mapDispatchToProps = dispatch => ({
  getWord: () => dispatch(getWord()),
  createAndCheckAnswer: (answer, word) => dispatch(createAndCheckAnswer(answer, word)),
  getWordByIndex: index => dispatch(getWord(index))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  dispatchProps.getNextWord = () => dispatchProps.getWordByIndex(stateProps.pageIndex + 1);
  return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Question);
