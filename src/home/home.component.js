import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getResponse } from '../_shared/api';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';


export default class Home extends PureComponent {
  async componentDidMount() {
    const baseUrl = 'https://opentdb.com/api.php';
    const queryParams = [
      { param: 'amount', value: 10 },
      { param: 'difficulty', value: 'hard' },
      { param: 'type', value: 'boolean' }];
    const response = await getResponse(baseUrl, queryParams);

    console.log(response);
  }

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
    backgroundColor: colors.white,
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
    color: colors.black,
  },
});
