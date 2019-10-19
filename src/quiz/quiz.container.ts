import {connect} from 'react-redux';
import QuizComponent from './quiz.component';
import {updateQuestion} from './quiz.actions';

interface State {
  quizReducer: Object;
}

const mapStateToProps = (state: State) => state.quizReducer;

const Quiz = connect(
  mapStateToProps,
  {updateQuestion},
)(QuizComponent);

export default Quiz;
