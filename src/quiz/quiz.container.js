import { connect } from 'react-redux';
import QuizComponent from './quiz.component';
import { updateQuestion } from './quiz.actions';


const mapStateToProps = (state) => state.quizReducer;


export const Quiz = connect(
  mapStateToProps,
  { updateQuestion },
)(QuizComponent);
