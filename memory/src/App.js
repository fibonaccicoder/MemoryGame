
import React, { Component } from 'react';
import imagecards from './imagecards.json';
import PicCards from "./components/PicCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";


class App extends Component {

  state = {
    imagecards: imagecards,
    score: 0,
    bestScore: 0,
    guesses: []
  };


  shuffleImages = imagearray => {
    for (let i = imagearray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagearray[i], imagearray[j]] = [imagearray[j], imagearray[i]];
    }
    this.setState(imagearray);
  }

  clickToMatch = id => {
    console.log('clicked');

    let guesses = this.state.guesses

    if (this.state.guesses.includes(id)) {
      this.setState({ score: 0 });
      this.setState({ guesses: [] });
      this.shuffleImages(imagecards);
    } else {
      if (!guesses.includes(id))
        guesses.push(id);
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score })
      }
      this.setState(function (prevState, props) { return ({ score: prevState.score + 1 }) });
      this.setState({ guesses: guesses });
      this.shuffle(imagecards);
    }



  };

  componentDidRun() {
    this.shuffle(imagecards)
  }

  render() {
    return (

      <div className="App">
        <Wrapper>
          <Title
            score={this.state.score}
            bestScore={this.state.bestScore}
          />

          {this.state.imagecards.map(imagecards => (
            <PicCards
              id={imagecards.id}
              image={imagecards.image}
            />
          ))
          }
        </Wrapper>
      </div>
    );
  }
}



export default App;


//   setClicked = id => {

//     let correctGuesses = this.state.correctGuesses;


//     const clickedMatch = correctGuesses.filter(match => match.id === id);

//     console.log(clickedMatch);


//     if (clickedMatch[0].picked) {

//       console.log("Correct Guesses: " + correctGuesses);
//       console.log("Best Score: " + this.state.bestScore);

//       correctGuesses = 0;

//       for (let i = 0; i < correctGuesses.length; i++) {
//         correctGuesses[i].picked = false;
//       }

//       this.setState({ correctGuesses });
//       this.setState({ picked: true });

//       // Otherwise, if clicked = false, and the user hasn't finished
//     } else if (correctGuesses < 11) {

//       // Set its value to true
//       clickedMatch[0].picked = true;

//       // increment the appropriate counter
//       correctGuesses++;

//       if (correctGuesses > this.state.bestScore) {
//         this.setState({ bestScore: correctGuesses });
//       }

//       // Shuffle the array to be rendered in a random order
//       correctGuesses.sort(function (a, b) { return 0.5 - Math.random() });

//       this.setState({ correctGuesses });
//       this.setState({ bestScore: this.bestScore });
//     } else {

//       // Set its value to true
//       clickedMatch[0].picked = true;

//       // restart the guess counter
//       correctGuesses = 0;


//       this.setState({ bestScore: 12 });

//       for (let i = 0; i < correctGuesses.length; i++) {
//         correctGuesses[i].picked = false;
//       }

//       // Shuffle the array to be rendered in a random order
//       correctGuesses.sort(function (a, b) { return 0.5 - Math.random() });

//       // Set this.state.matches equal to the new matches array
//       this.setState({ bestScore: this.state.bestScore });
//       this.setState({ correctGuesses });

//     }
//   };


//   render() {
//     return (
//       <div className="App">
//         <Wrapper>

//           <Title />

//           {this.state.imagecards.map(imagecards => (
//             <PicCards id={imagecards.id} image={imagecards.image} />
//           ))
//           }
//         </Wrapper>
//       </div>
//     );
//   }
// }

// export default App;
