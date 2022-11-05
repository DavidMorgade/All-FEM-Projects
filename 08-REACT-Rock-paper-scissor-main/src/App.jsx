import Container from './components/UI/Container';
import Header from './components/UI/Header';
import Button from './components/UI/Button';
import RulesModal from './components/UI/modal/RulesModal';

import GameContainer from './components/game/GameContainer';
import ButtonSelector from './components/game/ButtonSelector';
import PlayerText from './components/game/start/PlayerText';
import ModalContext from './context/modal-context';

import './App.css';

import { paper, rock, scissors } from './images/images';
import { useEffect, useState } from 'react';
import GameContext from './context/game-context';
import GameStartContainer from './components/game/start/GameStartContainer';
import FinishedGame from './components/game/finish/FinishedGame';
import Result from './components/game/finish/Result';
import ButtonPlayAgain from './components/game/finish/ButtonPlayAgain';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [browserOption, setBrowserOption] = useState('');
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState(localStorage.getItem('score'));
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);
  const browserOptionHandler = (option) => {
    setBrowserOption(option);
  };
  const selectOptionHandler = (option) => {
    setSelectedOption(option);
  };
  const startGameHandler = (value) => {
    setStartGame(value);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };
  const openModalHandler = () => {
    setModalOpen(true);
  };
  const scoreHandler = (value) => {
    setScore((prevScore) => prevScore - value);
  };

  return (
    <GameContext.Provider
      value={{
        startGame: startGameHandler,
        gameStart: startGame,
        setSelectedOption: selectOptionHandler,
        selectedOption,
        setBrowserOption: browserOptionHandler,
        browserOption,
        winner,
        setWinner,
        score,
        setScore: scoreHandler,
      }}
    >
      <ModalContext.Provider
        value={{
          modalOpen,
          openModal: openModalHandler,
          closeModal: closeModalHandler,
        }}
      >
        <Container>
          {modalOpen && <RulesModal />}
          <Header gameStarted={(!startGame && 'gameWait') || ''} />

          {!startGame && (
            <GameContainer>
              <ButtonSelector id="paper" option={paper} position="paper" />
              <ButtonSelector
                id="scissors"
                option={scissors}
                position="scissors"
              />
              <ButtonSelector id="rock" option={rock} position="rock" />
            </GameContainer>
          )}
          {startGame && (
            <GameStartContainer>
              <ButtonSelector
                type={selectedOption}
                option={
                  selectedOption === 'paper'
                    ? paper
                    : selectedOption === 'rock'
                    ? rock
                    : scissors
                }
                position="left"
              />
              <PlayerText
                type="human"
                animation="textHumanAnimation"
                text="YOU PICKED"
              />
              <ButtonSelector
                type={browserOption}
                option={
                  browserOption === 'paper'
                    ? paper
                    : browserOption === 'rock'
                    ? rock
                    : scissors
                }
                position="right"
              />
              <PlayerText
                type="browser"
                animation="textBrowserAnimation"
                text="THE HOUSE PICKED"
              />
              <FinishedGame>
                <Result result={winner} />
                <ButtonPlayAgain />
              </FinishedGame>
            </GameStartContainer>
          )}

          <Button type="rules">RULES</Button>
        </Container>
      </ModalContext.Provider>
    </GameContext.Provider>
  );
};

export default App;
