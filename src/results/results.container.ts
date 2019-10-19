import { connect } from 'react-redux';
import ResultsComponent from './results.component';
import { clearLifetimeStats, updateLifetimeStats } from './results.actions';

const mapStateToProps = (state) => {
  const { quizReducer, resultsReducer } = state;
  return {
    questions: quizReducer.questions,
    ...resultsReducer,
  };
};

const Results = connect(
  mapStateToProps,
  { clearLifetimeStats, updateLifetimeStats },
)(ResultsComponent);

export default Results;
