import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Question from '../_shared/question/question.component';
import Text from '../_shared/text/text.component';
import colors from '../_shared/colors';
import { Actions } from 'react-native-router-flux';

export default class Quiz extends PureComponent {
  state = {
    questions: this.props.questions,
    questionIndex: 0,
  };
  
  answeredWith(answer) {
    const { questionIndex, questions } = this.state;
    const newQuestions = questions;

    newQuestions[questionIndex].userAnswer = answer;
    
    this.setState({
      questions: newQuestions,
      questionIndex: questionIndex + 1,
    })

    if (questionIndex + 1 === 10) {
      Actions.pop()
    }
  }

  render() {
    const { questions, questionIndex } = this.state;
    
    if (questionIndex === questions.length) {
      return <View />;
    }

    const activeQuestion = questions[questionIndex];
    
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>{activeQuestion.category}</Text>
        <Question statement={activeQuestion.question} />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() =>this.answeredWith(false)}><Text>False</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.answeredWith(true)}><Text>True</Text></TouchableOpacity>
        </View>
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
