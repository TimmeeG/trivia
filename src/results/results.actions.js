/* eslint-disable import/prefer-default-export */
export const updateLifetimeStats = (info) => async (dispatch) => {
  dispatch(newLifetimeStats(info));
};

function newLifetimeStats(info) {
  return {
    type: 'UPDATE_LIFETIME_STATS',
    payload: info,
  };
}

export const clearLifetimeStats = () => async (dispatch) => {
  dispatch(clearUserStats());
};

function clearUserStats() {
  return {
    type: 'CLEAR_LIFETIME_STATS',
  };
}
