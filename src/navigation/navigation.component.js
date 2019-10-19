import React, { PureComponent } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from '../home/home.container';
import Quiz from '../quiz/quiz.container';
import Results from '../results/results.component';

export default class Navigation extends PureComponent {
  render() {
    return (
      <Router>
        <Stack>
          <Scene
            key="home"
            initial
            hideNavBar
            component={Home}
            title="Home"
          />
          <Scene
            key="quiz"
            hideNavBar
            component={Quiz}
            title="Quiz"
          />
          <Scene
            key="results"
            hideNavBar
            component={Results}
            title="Results"
          />
        </Stack>
      </Router>
    );
  }
}
