import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Text from '../_shared/text/text.component';


export default class Home extends PureComponent {
  render() {
    return (
      <View style={[styles.body, styles.flexOne]}>
        <Text style={[styles.text, styles.flexOne, styles.sectionTitle]}>Welcome to the Trivia Challenge!</Text>
        <Text style={[styles.text, styles.flexOne]}>You will be presented with 10 True or False questions</Text>
        <Text style={[styles.text, styles.flexOne]}>Can you score 100%?</Text>
        <TouchableOpacity onPress={Actions.quiz}>
          <Text style={styles.text}>BEGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: '600',
  },
  text: {
    textAlign: 'center',
    width: '60%',
    fontSize: 24,
    color: 'black',
  },
});
