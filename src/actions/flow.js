import { createAnswer, getWord } from './api';
import { createAction } from 'Util/helper';
import checkAnswer from 'Util/checkAnswer';
import { ANSWER_CORRECT, ANSWER_WRONG, GET_QUESTION } from './';
import mapWordToQuestionType from 'Selectors/mapWordToQuestionType';

export function createAndCheckAnswer(answer, word, questionType) {
  return dispatch => {
    return createAnswer(answer, word.id, questionType)(dispatch)
      .then(() => checkAnswer(answer, word, questionType))
      .then(isTrue => (isTrue ? dispatch(createAnswerCorrect()) : dispatch(createAnswerWrong())));
  };
}

function createAnswerCorrect() {
  return createAction(ANSWER_CORRECT);
}

function createAnswerWrong() {
  return createAction(ANSWER_WRONG);
}

export function getQuestion(wordIndex) {
  return dispatch => {
    dispatch(createAction(GET_QUESTION.default));
    return getWord(wordIndex)(dispatch)
      .then(({ word, totalCount }) => {
        dispatch(
          createAction(GET_QUESTION.success, {
            word,
            totalCount,
            questionType: mapWordToQuestionType(word)
          })
        );
      })
      .catch(() => dispatch(createAction(GET_QUESTION.failure)));
  };
}
