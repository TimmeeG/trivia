interface ResultsState {
  totalCorrect: number;
  totalIncorrect: number;
}

const initialState: ResultsState = {
  totalCorrect: 0,
  totalIncorrect: 0,
};

interface ResultsAction {
  type: string;
  payload: ResultsActionPayload;
}

export interface ResultsActionPayload {
  correct: number;
  incorrect: number;
}

export const resultsReducer = (state = initialState, action: ResultsAction) => {
  switch (action.type) {
    default:
      return state;
    case 'CLEAR_LIFETIME_STATS':
      return {...initialState};
    case 'UPDATE_LIFETIME_STATS':
      return {
        ...state,
        totalCorrect: state.totalCorrect + action.payload.correct,
        totalIncorrect: state.totalIncorrect + action.payload.incorrect,
      };
  }
};
