export function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export function createAsyncActionType(type) {
  return {
    default: type,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`
  };
}
