import { connect } from 'react-redux';
import ResultsComponent from './results.component';
import { QuizState } from '../quiz/quiz.reducer';
import { clearLifetimeStats, updateLifetimeStats } from './results.actions';
import { getQuestions } from '../home/home.actions';

interface State {
  quizReducer: QuizState;
  resultsReducer: Object;
}

const mapStateToProps = (state: State) => {
  const { quizReducer, resultsReducer } = state;
  return {
    questions: quizReducer.questions,
    ...resultsReducer,
  };
};

const Results = connect(
  mapStateToProps,
  { clearLifetimeStats, updateLifetimeStats, getQuestions },
)(ResultsComponent);

export default Results;
