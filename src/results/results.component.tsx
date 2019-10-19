import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Question} from '../quiz/quiz.component';
import {ResultsActionPayload} from './results.reducer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';

const renderQuestion = (question: Question) => (
  <View style={styles.questionContainer}>
    {question.isCorrect ? (
      <Icon name="plus" size={18} color={colors.green} />
    ) : (
      <Icon name="minus" size={18} color={colors.red} />
    )}
    <View style={styles.questionTextContainer}>
      <Text style={styles.questionText}>{question.question}</Text>
    </View>
  </View>
);

interface MapProps {
  questions: Array<Question>;
  totalCorrect: number;
  totalIncorrect: number;
}

interface State {
  correct: number;
}

interface DispatchProps {
  updateLifetimeStats: (info: ResultsActionPayload) => void;
  clearLifetimeStats: () => void;
}

type Props = DispatchProps & MapProps;

export default class Results extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      correct: props.questions.filter(x => x.isCorrect).length,
    };
  }

  componentDidMount() {
    Icon.loadFont();
    const {updateLifetimeStats, questions} = this.props;
    const {correct} = this.state;

    const info = {
      correct,
      incorrect: questions.length - correct,
    };

    updateLifetimeStats(info);
  }

  render() {
    const {
      questions,
      clearLifetimeStats,
      totalIncorrect,
      totalCorrect,
    } = this.props;

    const correctNumber = questions.filter(x => x.isCorrect).length;
    const resultsString = `${correctNumber}/${questions.length}`;
    const lifetimeResultsString = `${totalCorrect}/${totalCorrect +
      totalIncorrect}`;

    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>You Scored</Text>
        <Text style={styles.sectionTitle}>{resultsString}</Text>
        <Text style={styles.sectionTitle}>{lifetimeResultsString}</Text>
        <TouchableOpacity onPress={() => clearLifetimeStats()}>
          <Text>CLEAR</Text>
        </TouchableOpacity>
        <FlatList
          data={questions}
          renderItem={({item}) => renderQuestion(item)}
          keyExtractor={(item, i) => i.toString()}
        />
        <TouchableOpacity
          onPress={() => Actions.popTo('home')}
          style={styles.playAgainContainer}>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
    marginVertical: 2,
    minHeight: 50,
  },
  questionTextContainer: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  questionText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  playAgainContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
