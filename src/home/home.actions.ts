import { getResponse } from '../_shared/api';
import { ThunkAction } from 'redux-thunk';
import { AppState } from 'react-native';
import { AnyAction } from 'redux';

export const getQuestions = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => async dispatch => {
  dispatch(questionsRequested());

  const baseUrl = 'https://opentdb.com/api.php';
  const queryParams = [
    { param: 'amount', value: 10 },
    { param: 'difficulty', value: 'hard' },
    { param: 'type', value: 'boolean' },
  ];

  getResponse(baseUrl, queryParams)
    .then((response: Response) => dispatch(questionsFulfilled(response)))
    .catch((err: Object) => dispatch(questionsRejected()));
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

function questionsFulfilled(response: Object) {
  return {
    type: 'QUESTIONS_FULFILLED',
    payload: response,
  };
}
