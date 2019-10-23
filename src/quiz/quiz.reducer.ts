import { Actions } from 'react-native-router-flux';
import { Question } from './quiz.types';

export interface QuizState {
  questions: Array<Question>;
  loading: boolean;
  error: string;
}

interface UpdateQuestionActionPayload {
  index: number;
  answer: string;
}
interface QuestionFulfilledActionPayload {
  results: Array<Question>;
}

interface QuizReducerAction {
  type: string;
  payload: QuestionFulfilledActionPayload & UpdateQuestionActionPayload;
}

const initialState: QuizState = {
  questions: [],
  loading: false,
  error: '',
};

export const quizReducer = (
  state = initialState,
  action: QuizReducerAction,
) => {
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
      const questions = action.payload.results;
      questions.map(x => {
        x.isAnswered = false;
        return x;
      });

      return {
        ...state,
        loading: false,
        questions: action.payload.results,
        error: '',
      };
    }
    case 'UPDATE_QUESTION': {
      const { payload } = action;
      const { index, answer } = payload;

      const newQuestions = state.questions;
      newQuestions[index].userAnswer = answer;
      newQuestions[index].isAnswered = true;
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
