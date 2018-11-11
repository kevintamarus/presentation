import React from 'react';

const AnswerCard = ({ letter, choice, selected, onClick }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: selected ? '1px solid black' : '1px solid gray',
    backgroundColor: selected ? 'yellow' : 'lightBlue',
    height: 50,
    width: 400,
    cursor: 'pointer',
    alignItems: 'center'
  };

  return (
    <div style={styles.padding} onClick={onClick}>
      <div style={containerStyle}>
        <div style={styles.letter}>{letter}</div>
        <div style={styles.choice}>{choice}</div>
      </div>
    </div>
  );
};

const styles = {
  padding: {
    padding: 20
  },
  letter: {
    paddingLeft: 10,
    color: 'blue',
    fontWeight: 'bold'
  },
  choice: {
    paddingLeft: 20
  }
};

export default AnswerCard;
