import React, { PureComponent } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from '../home/home.component';
import Quiz from '../quiz/quiz.component';

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
        </Stack>
      </Router>
    );
  }
}
