/* eslint-disable import/prefer-default-export */
const initialState = {
  questions: [],
  loading: false,
  error: '',
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'CLEAR_QUESTIONS':
      return { ...initialState };
    case 'QUESTIONS_REQUESTED':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'QUESTIONS_REJECTED':
      return {
        ...state,
        loading: false,
        emailError: 'Error',
      };
    case 'QUESTIONS_FULFILLED': {
      return {
        ...state,
        loading: false,
        questions: action.payload,
        error: '',
      };
    }
  }
};
