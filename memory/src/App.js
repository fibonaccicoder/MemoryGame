
import React, { Component } from "react";
import imagecards from './imagecards.json';
import PicCards from "./components/PicCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";


class App extends React.Component {

  state = {
    imagecards,
    score: 0,
    bestScore: 0,
    picked: false,
    correctGuesses: []
  };

  setClicked = id => {

    let correctGuesses = this.state.correctGuesses;


    const clickedMatch = correctGuesses.filter(match => match.id === id);

    console.log(clickedMatch);


    if (clickedMatch[0].picked) {

      console.log("Correct Guesses: " + correctGuesses);
      console.log("Best Score: " + this.state.bestScore);

      correctGuesses = 0;

      for (let i = 0; i < correctGuesses.length; i++) {
        correctGuesses[i].picked = false;
      }

      this.setState({ correctGuesses });
      this.setState({ picked: true });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {

      // Set its value to true
      clickedMatch[0].picked = true;

      // increment the appropriate counter
      correctGuesses++;

      if (correctGuesses > this.state.bestScore) {
        this.setState({ bestScore: correctGuesses });
      }

      // Shuffle the array to be rendered in a random order
      correctGuesses.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ correctGuesses });
      this.setState({ bestScore: this.bestScore });
    } else {

      // Set its value to true
      clickedMatch[0].picked = true;

      // restart the guess counter
      correctGuesses = 0;


      this.setState({ bestScore: 12 });

      for (let i = 0; i < correctGuesses.length; i++) {
        correctGuesses[i].picked = false;
      }

      // Shuffle the array to be rendered in a random order
      correctGuesses.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.matches equal to the new matches array
      this.setState({ bestScore: this.state.bestScore });
      this.setState({ correctGuesses });

    }
  };


  render() {
    return (
      <div className="App">
        <Wrapper>

          <Title><h1>MEMORY GAME</h1>
            <p className="App-intro">
              Enhance your memory with this matching game! Click on images to earn points, but don't click on any more than once!
              </p>
          </Title>


          {this.state.imagecards.map(imagecards => (
            <PicCards id={imagecards.id} image={imagecards.image} >
            </PicCards>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
