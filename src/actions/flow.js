import { createAnswer, getWord } from './api';
import { createAction } from 'Util/helper';
import checkAnswer from 'Util/checkAnswer';
import { ANSWER_CORRECT, ANSWER_WRONG } from './';

export function createAndCheckAnswer(answer, word) {
  return dispatch => {
    return createAnswer(answer)(dispatch)
      .then(() => checkAnswer(answer, word))
      .then(isTrue => (isTrue ? dispatch(createAnswerCorrect()) : dispatch(createAnswerWrong())));
  };
}

function createAnswerCorrect() {
  return createAction(ANSWER_CORRECT);
}

function createAnswerWrong() {
  return createAction(ANSWER_WRONG);
}
