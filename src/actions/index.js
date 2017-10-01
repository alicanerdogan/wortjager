import { createAsyncActionType } from 'Util/helper';

export const GET_WORD = createAsyncActionType('GET_WORD');
export const GET_QUESTION = createAsyncActionType('GET_QUESTION');
export const SEND_ANSWER = createAsyncActionType('SEND_ANSWER');
export const LOGIN = createAsyncActionType('LOGIN');
export const LOGIN_WITH_GOOGLE = createAsyncActionType('LOGIN_WITH_GOOGLE');
export const LOGOUT = 'LOGOUT';
export const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE';
export const SIGN_UP = createAsyncActionType('SIGN_UP');
