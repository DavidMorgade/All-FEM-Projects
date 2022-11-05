import React from 'react';

const GameContext = React.createContext({
  gameStart: false,
  score: 0,
});

export default GameContext;
