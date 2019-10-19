/* eslint-disable import/prefer-default-export */
import { getResponse } from '../_shared/api';

export const getQuestions = () => async (dispatch) => {
  dispatch(questionsRequested());

  const baseUrl = 'https://opentdb.com/api.php';
  const queryParams = [
    { param: 'amount', value: 10 },
    { param: 'difficulty', value: 'hard' },
    { param: 'type', value: 'boolean' }];


  getResponse(baseUrl, queryParams)
    .then((response) => dispatch(questionsFulfilled(response.results)))
    .catch((err) => dispatch(questionsRejected()));
};

function questionsRequested() {
  return {
    type: 'QUESTIONS_REQUESTED',
  };
}

function questionsRejected() {
  return {
    type: 'QUESTIONS_REJECTED',
  };
}

function questionsFulfilled(response) {
  return {
    type: 'QUESTIONS_FULFILLED',
    payload: response,
  };
}
