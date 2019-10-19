import React, { PureComponent } from 'react';
import {
  View, StyleSheet, Dimensions,
} from 'react-native';
import Text from '../text/text.component';

const { width } = Dimensions.get('screen');

export default class Question extends PureComponent {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Filler</Text>
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
});
