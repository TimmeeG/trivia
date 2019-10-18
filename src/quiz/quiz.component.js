import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Question from '../_shared/question/question.component';

export default class Quiz extends PureComponent {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Quiz</Text>
        <Question />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
