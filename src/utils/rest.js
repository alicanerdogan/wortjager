import { createAction } from './helper';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function createRESTCall(endpoint, method = 'GET', options = {}, responseParser) {
  options = Object.assign({}, { method }, options);
  options.headers = Object.assign({}, { 'Content-Type': 'application/json' }, options.headers);
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  return fetch(endpoint, options).then(function(response) {
    if (responseParser) {
      return responseParser(response);
    }
    if (response.status >= 400 || response.status < 200) {
      throw new Error(`Failed request. Respons status: ${response.status}`);
    }
    return response.json();
  });
}

export function createRESTCallAction(asyncActionType, endpoint, httpMethod, options, callback, responseParser) {
  return dispatch => {
    dispatch(createAction(asyncActionType.default));
    return createRESTCall(endpoint, httpMethod, options, responseParser)
      .then(payload => {
        dispatch(createAction(asyncActionType.success, payload));
        return payload;
      })
      .then(payload => (callback ? callback(payload, dispatch) : payload))
      .catch(error => dispatch(createAction(asyncActionType.failure, error)));
  };
}

export function createAuthorizedRESTAction(asyncActionType, endpoint, httpMethod, options, callback, responseParser) {
  return dispatch => {
    const jwt = localStorage.getItem('jwt');
    const headers = Object.assign({}, { Authorization: `Bearer ${jwt}` }, (options && options.headers) || {});
    options ? (options.headers = headers) : (options = { headers });
    const responseParserWrapper = response => {
      if (response.status === 400) {
        dispatch({ type: 'AUTHORIZATION_FAILURE' });
      }
      if (responseParser) {
        return responseParser(response);
      }
      if (response.status >= 400 || response.status < 200) {
        throw new Error(`Failed request. Respons status: ${response.status}`);
      }
      return response.json();
    };
    return createRESTCallAction(asyncActionType, endpoint, httpMethod, options, callback, responseParserWrapper)(
      dispatch
    );
  };
}
