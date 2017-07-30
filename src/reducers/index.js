import { GET_WORD, ANSWER_CORRECT, ANSWER_WRONG } from 'Actions';

const DEFAULT_STATE = {
  word: null,
  isAnswerCorrect: null,
  totalCount: null,
  pageIndex: 0
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_WORD.success:
      const { word, totalCount } = action.payload;
      return Object.assign({}, state, { word, totalCount, pageIndex: state.pageIndex + 1, isAnswerCorrect: null });
    case ANSWER_CORRECT:
      return Object.assign({}, state, { isAnswerCorrect: true });
    case ANSWER_WRONG:
      return Object.assign({}, state, { isAnswerCorrect: false });
    default:
      return state;
  }
};
