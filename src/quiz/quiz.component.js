import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import TrueOrFalse from '../_shared/questionTypes/trueOrFalse.component';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';
import { QUESTION_TYPES } from '../_shared/constants';

export default class Quiz extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      questions: props.questions,
      questionIndex: 0,
    };
    this.answeredWith = this.answeredWith.bind(this);
  }

  answeredWith(answer) {
    const { questionIndex, questions } = this.state;

    const newQuestions = questions;

    newQuestions[questionIndex].userAnswer = answer;
    newQuestions[questionIndex].isCorrect = newQuestions[questionIndex].correct_answer === answer;

    this.setState({
      questions: newQuestions,
      questionIndex: questionIndex + 1,
    });
  }

  selectQuestionType(activeQuestion) {
    switch (activeQuestion.type) {
      case QUESTION_TYPES.BOOLEAN:
        return <TrueOrFalse item={activeQuestion} answeredWith={this.answeredWith} />;
      default:
        return <TrueOrFalse item={activeQuestion} answeredWith={this.answeredWith} />;
    }
  }

  render() {
    const { questions, questionIndex } = this.state;

    if (questionIndex === questions.length) {
      Actions.results({ questions });
      return <View />;
    }

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

Quiz.propTypes = {
  questions: PropTypes.arrayOf.isRequired,
};
