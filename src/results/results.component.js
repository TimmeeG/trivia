import React, { PureComponent } from 'react';
import {
  StyleSheet, View, TouchableOpacity, FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';

export default class Results extends PureComponent {
  componentDidMount() {
    Icon.loadFont();
  }

  renderQuestion(question) {
    console.log(question);
    return (
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <Text>{question.question}</Text>
      </View>
    );
  }

  render() {
    const { questions } = this.props;
    const correctNumber = questions.filter((x) => x.isCorrect).length;

    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>You Scored</Text>
        <Text style={styles.sectionTitle}>
          {correctNumber}
            /
          {questions.length}
        </Text>

        <FlatList
          data={questions}
          renderItem={({ item }) => this.renderQuestion(item)}
          keyExtractor={(item, i) => i}
        />
        <TouchableOpacity onPress={() => Actions.popTo('home')}>
          <Text>Play Again?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
});

Results.propTypes = {
  questions: PropTypes.arrayOf.isRequired,
};
