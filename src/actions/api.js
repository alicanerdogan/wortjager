import { createRESTCallAction } from 'Util/rest';
import { GET_WORD, CREATE_ANSWER } from './';

const HOSTNAME = '/api';

export function getWord(index) {
  return createRESTCallAction(
    GET_WORD,
    `${HOSTNAME}/words?_page=${index || 1}&_limit=1`,
    undefined,
    undefined,
    undefined,
    response => {
      return response.json().then(json => {
        return {
          word: json[0],
          totalCount: response.headers.get('X-Total-Count')
        };
      });
    }
  );
}

export function createAnswer(answer) {
  return createRESTCallAction(CREATE_ANSWER, `${HOSTNAME}/answers`, 'POST', {
    body: {
      answer,
      createdAt: new Date().toISOString()
    }
  });
}
