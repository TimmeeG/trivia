import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Question } from './../../quiz/quiz.types';
import Text from '../text/text.component';

const { width } = Dimensions.get('screen');

interface State {}

interface OwnProps {
  item: Question;
  answeredWith: Function;
}

type Props = OwnProps;

export default class TrueOrFalse extends PureComponent<Props, State> {
  render() {
    const { item, answeredWith } = this.props;
    const { question, correct_answer, incorrect_answers } = item;
    const possibleAnswers = [...incorrect_answers, correct_answer].sort();

    return (
      <View style={styles.flexOne}>
        <View style={styles.view}>
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.answerContainer}>
          {possibleAnswers.map(x => (
            <TouchableOpacity
              key={`answer-${x}`}
              onPress={() => answeredWith(x)}>
              <Text>{x}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  view: {
    padding: 10,
    margin: 40,
    height: width - 80,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  question: {
    textAlign: 'center',
    fontSize: 24,
  },
});
