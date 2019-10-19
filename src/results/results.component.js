import React, { PureComponent } from 'react';
import {
  StyleSheet, View, TouchableOpacity, FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';

const renderQuestion = (question) => (
  <View style={styles.questionContainer}>
    {question.isCorrect
      ? <Icon name="plus" size={30} color={colors.green} />
      : <Icon name="minus" size={30} color={colors.red} />}
    <Text style={styles.questionText}>
      {question.question}
    </Text>
  </View>
);

export default class Results extends PureComponent {
  componentDidMount() {
    Icon.loadFont();
  }

  render() {
    const { questions } = this.props;

    const correctNumber = questions.filter((x) => x.isCorrect).length;
    const resultsString = `${correctNumber}/${questions.length}`;

    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>You Scored</Text>
        <Text style={styles.sectionTitle}>{resultsString}</Text>
        <FlatList
          data={questions}
          renderItem={({ item }) => renderQuestion(item)}
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
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
  },
  questionText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

Results.propTypes = {
  questions: PropTypes.arrayOf.isRequired,
};
