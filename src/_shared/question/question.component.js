import React, { PureComponent } from 'react';
import {
  View, StyleSheet, Dimensions, Text,
} from 'react-native';

const { width } = Dimensions.get('screen');

export default class Question extends PureComponent {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.questionText}>Filler</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    margin: 40,
    height: width - 80,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    color: 'black',
  },
});
