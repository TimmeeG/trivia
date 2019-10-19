import { connect } from 'react-redux';
import HomeComponent from './home.component';
import { getQuestions } from './home.actions';

const Home = connect(
  undefined,
  { getQuestions },
)(HomeComponent);

export default Home;
