import { createRESTCallAction, createAuthorizedRESTAction } from 'Util/rest';
import { GET_WORD, SEND_ANSWER, LOGIN, SIGN_UP, GET_QUESTION } from './';

const HOSTNAME = '/api';

export function getWord(index) {
  return createRESTCallAction(
    GET_WORD,
    `${HOSTNAME}/words?_page=${index || 1}&_limit=1`,
    undefined,
    undefined,
    undefined,
    response =>
      response.json().then(json => ({
        word: json[0],
        totalCount: response.headers.get('X-Total-Count')
      }))
  );
}

export function signUp(email, password) {
  return createRESTCallAction(SIGN_UP, `${HOSTNAME}/users`, 'POST', {
    body: {
      email,
      password
    }
  });
}

export function login(email, password) {
  return dispatch =>
    createRESTCallAction(LOGIN, `${HOSTNAME}/sessions`, 'POST', {
      body: {
        email,
        password
      }
    })(dispatch).then(payload => {
      return payload;
    });
}

export function getQuestion(email, password) {
  return createAuthorizedRESTAction(GET_QUESTION, `${HOSTNAME}/question`);
}

export function sendAnswer(response, word_id, type) {
  return createAuthorizedRESTAction(SEND_ANSWER, `${HOSTNAME}/answers`, 'POST', {
    body: {
      response,
      word_id,
      type
    }
  });
}
