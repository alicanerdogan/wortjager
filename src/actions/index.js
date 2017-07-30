import { createAsyncActionType } from 'Util/helper';

export const GET_WORD = createAsyncActionType('GET_WORD');
export const CREATE_ANSWER = createAsyncActionType('CREATE_ANSWER');
export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_WRONG = 'ANSWER_WRONG';
