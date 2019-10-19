import {ThunkAction} from 'redux-thunk';
import {AppState} from 'react-native';
import {AnyAction} from 'redux';

interface Info {
  correct: number;
  incorrect: number;
}

export const updateLifetimeStats = (
  info: Info,
): ThunkAction<void, AppState, null, AnyAction> => async dispatch => {
  dispatch(newLifetimeStats(info));
};

function newLifetimeStats(info: Info) {
  return {
    type: 'UPDATE_LIFETIME_STATS',
    payload: info,
  };
}

export const clearLifetimeStats = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => async dispatch => {
  dispatch(clearUserStats());
};

function clearUserStats() {
  return {
    type: 'CLEAR_LIFETIME_STATS',
  };
}
