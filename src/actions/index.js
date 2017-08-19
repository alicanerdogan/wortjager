import { createAsyncActionType } from 'Util/helper';

export const GET_WORD = createAsyncActionType('GET_WORD');
export const GET_QUESTION = createAsyncActionType('GET_QUESTION');
export const SEND_ANSWER = createAsyncActionType('SEND_ANSWER');
export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_WRONG = 'ANSWER_WRONG';
export const LOGIN = createAsyncActionType('LOGIN');
export const SIGN_UP = createAsyncActionType('SIGN_UP');
