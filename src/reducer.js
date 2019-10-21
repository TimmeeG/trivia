import {combineReducers} from 'redux';
import {resultsReducer} from './results/results.reducer';
import {quizReducer} from './quiz/quiz.reducer';

export default combineReducers({
  quizReducer,
  resultsReducer,
});
