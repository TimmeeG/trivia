import React, { PureComponent } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import TrueOrFalse from '../_shared/questionTypes/trueOrFalse.component';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';
import { Question } from './quiz.types';
import { QUESTION_TYPES } from '../_shared/constants';
import { Actions } from 'react-native-router-flux';

interface State {
  questionIndex: number;
}

interface DispatchProps {
  updateQuestion: Function;
  questions: Array<Question>;
}

type Props = DispatchProps;

export default class Quiz extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      questionIndex: props.questions.findIndex(x => !x.isAnswered),
    };
    this.answeredWith = this.answeredWith.bind(this);
  }

  answeredWith(answer: string) {
    const { questionIndex } = this.state;
    const { updateQuestion } = this.props;

    updateQuestion({ index: questionIndex, answer });
    this.setState({
      questionIndex: questionIndex + 1,
    });
  }

  selectQuestionType(activeQuestion: Question) {
    switch (activeQuestion.type) {
      case QUESTION_TYPES.BOOLEAN:
        return (
          <TrueOrFalse item={activeQuestion} answeredWith={this.answeredWith} />
        );
      default:
        return (
          <TrueOrFalse item={activeQuestion} answeredWith={this.answeredWith} />
        );
    }
  }

  render() {
    const { questionIndex } = this.state;
    const { questions } = this.props;

    if (questionIndex === questions.length) {
      return <View />;
    }

    const activeQuestion = questions[questionIndex];

    if (!activeQuestion) {
      return (
        <View style={styles.body}>
          <View style={styles.categoryContainer}>
            <Text>Error</Text>
            <Button title="Return to Home" onPress={Actions.pop} />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.body}>
        <View style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>{activeQuestion.category}</Text>
        </View>
        {this.selectQuestionType(activeQuestion)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    flex: 1,
  },
  categoryContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
});
