import { GET_QUESTION, SEND_ANSWER, ANSWER_CORRECT, ANSWER_WRONG, LOGIN, LOGOUT, AUTHORIZATION_FAILURE } from 'Actions';

const jwt = localStorage.getItem('jwt');

const DEFAULT_STATE = {
  loggedIn: !!jwt,
  word: null,
  isAnswerCorrect: null,
  questionType: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_QUESTION.success:
      const { word_id, type, translations, props, content, question_type } = action.payload;
      return Object.assign({}, state, {
        word: {
          id: word_id,
          type,
          translations,
          props,
          word: content
        },
        questionType: question_type,
        isAnswerCorrect: null
      });
    case SEND_ANSWER.success:
      return Object.assign({}, state, { isAnswerCorrect: action.payload.result });
    case LOGIN.success:
      const { payload } = action;
      localStorage.setItem('jwt', payload.jwt);
      localStorage.setItem('jwt-expiration', payload.exp);
      return Object.assign({}, state, { loggedIn: true });
    case AUTHORIZATION_FAILURE:
      localStorage.removeItem('jwt');
      localStorage.removeItem('jwt-expiration');
      return {
        loggedIn: false,
        word: null,
        isAnswerCorrect: null,
        question_type: null
      };
    case LOGOUT:
      localStorage.removeItem('jwt');
      localStorage.removeItem('jwt-expiration');
      return {
        loggedIn: false,
        word: null,
        isAnswerCorrect: null,
        question_type: null
      };
    default:
      return state;
  }
};
