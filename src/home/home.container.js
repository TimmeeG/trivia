import { connect } from 'react-redux';
import HomeComponent from './home.component';
import { getQuestions } from './home.actions';

export const Home = connect(
  undefined,
  { getQuestions },
)(HomeComponent);
