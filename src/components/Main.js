import React from 'react';
import AnswerCard from './AnswerCard';
import questions from '../questions.json';

const mapIndexToLetter = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D'
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: questions[0],
      selectedAnswer: null,
      answer: null,
      showContent: false
    };
  }

  selectAnswer = letter => {
    this.setState({ selectedAnswer: letter });
  };

  render() {
    const {
      currentQuestion: { id, question, choices },
      selectedAnswer,
      answer,
      showContent
    } = this.state;
    return (
      <div>
        <div style={styles.questionContainer}>
          <div style={styles.questionNumber}>{`Question #${id}:`}</div>
          <div style={styles.questionDescription}>{question}</div>
        </div>
        <div style={styles.answersContainer}>
          {choices.map((choice, i) => {
            const letter = mapIndexToLetter[i];
            return (
              <AnswerCard
                key={`answer${letter}`}
                letter={letter}
                choice={choice}
                selected={letter === selectedAnswer}
                onClick={() => this.selectAnswer(letter)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center'
  },
  questionContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  questionNumber: {},
  answersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};
