import { connect } from 'react-redux';
import HomeComponent from './home.component';
import { getQuestions } from './home.actions';
import { QuizState } from '../quiz/quiz.reducer';

interface State {
  quizReducer: QuizState;
}

const mapStateToProps = (state: State) => {
  const { questions } = state.quizReducer;

  const isNotInProgress =
    questions.every(x => x.isAnswered) || questions.every(x => !x.isAnswered);

  return { isNotInProgress };
};

const Home = connect(
  mapStateToProps,
  { getQuestions },
)(HomeComponent);

export default Home;
