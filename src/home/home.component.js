import React, { PureComponent } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends PureComponent {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Welcome to the Trivia Challenge!</Text>
        <TouchableOpacity onPress={Actions.quiz}>
          <Text>BEGIN</Text>
        </TouchableOpacity>
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
