/* eslint-disable import/prefer-default-export */
const initialState = {
  totalCorrect: 0,
  totalIncorrect: 0,
};

export const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'CLEAR_LIFETIME_STATS':
      return { ...initialState };
    case 'UPDATE_LIFETIME_STATS':
      return {
        ...state,
        totalCorrect: state.totalCorrect + action.correct,
        totalIncorrect: state.totalIncorrect + action.incorrect,
      };
  }
};
