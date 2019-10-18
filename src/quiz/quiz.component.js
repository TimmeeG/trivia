import React, { PureComponent } from 'react';
import {
  SafeAreaView, StyleSheet, View, Text,
} from 'react-native';

export default class Quiz extends PureComponent {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Quiz</Text>
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
