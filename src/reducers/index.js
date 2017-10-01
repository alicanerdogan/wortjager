import { GET_QUESTION, SEND_ANSWER, ANSWER_CORRECT, ANSWER_WRONG, LOGIN, LOGOUT, AUTHORIZATION_FAILURE, LOGIN_WITH_GOOGLE, SIGN_UP } from 'Actions';

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
    case SIGN_UP.success:
    case LOGIN_WITH_GOOGLE.success:
      history.replaceState(null, null, '');
      const { payload } = action;
      localStorage.setItem('jwt', payload.jwt);
      localStorage.setItem('jwt-expiration', payload.exp);
      return Object.assign({}, state, { loggedIn: true });
    case LOGIN_WITH_GOOGLE.failure:
      history.replaceState(null, null, '');
      return state;
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
