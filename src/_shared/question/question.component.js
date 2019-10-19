import React, { PureComponent } from 'react';
import {
  View, StyleSheet, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../text/text.component';

const { width } = Dimensions.get('screen');

export default class Question extends PureComponent {
  render() {
    const { statement } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.question}>{statement}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    margin: 40,
    height: width - 80,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    textAlign: 'center',
    fontSize: 24,
  },
});

Question.propTypes = {
  statement: PropTypes.string.isRequired,
};
