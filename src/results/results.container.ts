import {connect} from 'react-redux';
import ResultsComponent from './results.component';
import {QuizState} from '../quiz/quiz.reducer';
import {clearLifetimeStats, updateLifetimeStats} from './results.actions';

interface State {
  quizReducer: QuizState;
  resultsReducer: Object;
}

const mapStateToProps = (state: State) => {
  const {quizReducer, resultsReducer} = state;
  return {
    questions: quizReducer.questions,
    ...resultsReducer,
  };
};

const Results = connect(
  mapStateToProps,
  {clearLifetimeStats, updateLifetimeStats},
)(ResultsComponent);

export default Results;
