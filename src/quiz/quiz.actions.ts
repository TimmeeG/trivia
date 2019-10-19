import {ThunkAction} from 'redux-thunk';
import {AppState} from 'react-native';
import {AnyAction} from 'redux';

interface Info {
  index: number;
  answer: string;
}

export const updateQuestion = (
  info: Info,
): ThunkAction<void, AppState, null, AnyAction> => async dispatch => {
  dispatch(newQuestionDetails(info));
};

function newQuestionDetails(info: Info) {
  return {
    type: 'UPDATE_QUESTION',
    payload: info,
  };
}
