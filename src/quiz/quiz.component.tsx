import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import TrueOrFalse from '../_shared/questionTypes/trueOrFalse.component';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';
import {QUESTION_TYPES} from '../_shared/constants';

export default class Quiz extends PureComponent {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
    };
    this.answeredWith = this.answeredWith.bind(this);
  }

  answeredWith(answer) {
    const {questionIndex} = this.state;
    const {updateQuestion} = this.props;

    updateQuestion({index: questionIndex, answer});
    this.setState({
      questionIndex: questionIndex + 1,
    });
  }

  selectQuestionType(activeQuestion) {
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
    const {questionIndex} = this.state;
    const {questions} = this.props;

    if (questionIndex === questions.length) {
      return <View />;
    }
    console.log(questionIndex);
    console.log(questions);

    const activeQuestion = questions[questionIndex];

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
