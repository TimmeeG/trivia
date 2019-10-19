import React, { PureComponent } from 'react';
import {
  View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../text/text.component';

const { width } = Dimensions.get('screen');

export default class TrueOrFalse extends PureComponent {
  render() {
    const { statement } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.view}>
          <Text style={styles.question}>{statement}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => this.props.answeredWith('False')}><Text>False</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.answeredWith('True')}><Text>True</Text></TouchableOpacity>
        </View>
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

TrueOrFalse.propTypes = {
  statement: PropTypes.string.isRequired,
};
