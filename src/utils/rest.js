import { createAction } from './helper';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function createRESTCall(endpoint, method = 'GET', options = {}) {
  options = Object.assign({}, { method }, options);
  options.headers = Object.assign({}, { 'Content-Type': 'application/json' }, options.headers);
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  return fetch(endpoint, options).then(function(response) {
    if (response.status >= 400 || response.status < 200) {
      throw new Error(`Failed request. Respons status: ${response.status}`);
    }
    return response.json();
  });
}

export function createRESTCallAction(asyncActionType, endpoint, callType, options, callback) {
  return dispatch => {
    dispatch(createAction(asyncActionType.default));
    return createRESTCall(endpoint, callType, options)
      .then(payload => {
        dispatch(createAction(asyncActionType.success, payload));
        return payload;
      })
      .then(payload => {
        if (callback) {
          return callback(payload, dispatch);
        }
      })
      .catch(error => dispatch(createAction(asyncActionType.failure, error)));
  };
}
