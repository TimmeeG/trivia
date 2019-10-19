import {Actions} from 'react-native-router-flux';

interface Questions {
  userAnswer: string;
  isCorrect: boolean;
  correct_answer: string;
}

interface QuizState {
  questions: Array<Questions>;
  loading: boolean;
  error: string;
}

interface UpdateQuestionActionPayload {
  index: number;
  answer: string;
}
interface QuestionFulfilledActionPayload {
  results: Array<Object>;
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
