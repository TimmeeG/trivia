import {Actions} from 'react-native-router-flux';

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
      return {...initialState};
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
        questions: action.payload.results,
        error: '',
      };
    }
    case 'UPDATE_QUESTION': {
      const {payload} = action;
      const {index, answer} = payload;

      const newQuestions = state.questions;
      newQuestions[index].userAnswer = answer;
      newQuestions[index].isCorrect =
        answer === newQuestions[index].correct_answer;

      if (index + 1 === state.questions.length) {
        Actions.results();
      }

      return {
        ...state,
        questions: newQuestions,
      };
    }
  }
};
