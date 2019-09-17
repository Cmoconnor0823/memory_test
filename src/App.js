import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import _ from 'lodash'

import NavBar from './components/navbar'
import Title from './components/title'
import Container from './components/container'
import Footer from './components/footer'

// see if you can name the villagers here instead of img number
const villagers = ['Jodi_image1', 'Caroline_image2', 'Pierre_image3', 'Jas_image4', 'Vincent_image5', 'Willy_image6', 'Sandy_image7', 'Wizard_image8', 'Gus_image9', 'Maru_image10', 'Demetrius_image11', 'Leah_image12']

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      info: 'Click a Photo of a Villager to begin!',
      score: 0,
      topScore: 0,
      villagers: villagers,
      selectedVillagers: []
    }
  };

  // lodash is used here to shuffle the array easier than using a math.random function
  shuffleVillagers () {
    this.setState({ villagers: _.shuffle(villagers) })
  };

  // _.delay waits for the number of specified mili seconds before moving on
  // try to add a else if win condition when score = 12
  topScoreUpdater (currentScore, currentTopScore, name) {
    currentScore++
    _.delay(() => {
      this.setState({ info: 'Choose your next villager!' })
    }, 900)
    if (currentScore >= currentTopScore) {
      return this.setState({ score: currentScore, topScore: currentScore, info: `${name} (Correct!)` })
    };
    return this.setState({ score: currentScore, info: `${name} (Correct! Choose Another Villager!)` })
  };

  checkUserChoice (name) {
    if (this.state.selectedVillagers.indexOf(name) === -1) {
      //
      this.state.selectedVillagers.push(name)
      this.topScoreUpdater(this.state.score, this.state.topScore, name)
      //
      if (this.state.selectedVillagers.length === villagers.length) {
        _.delay(() => {
          this.setState({ score: 0, selectedVillagers: [], info: `${name} (You've Won!!! Click another Villager to Play Again!)` })
        }, 900)
      };
    } else {
      //
      _.delay(() => {
        this.setState({ info: 'Try Again!' })
      }, 900)
      //
      this.setState({ score: 0, selectedVillagers: [], info: `${name} (You've Chosen This one Already! Try Again!)` })
    }
    // now call the shuffle function again
    this.shuffleVillagers()
  };
  // eslint-disable-next-line lines-between-class-members
  handleSelectVillagers (name) {
    this.checkUserChoice(name)
  }
  ;
  render () {
    return (
      <div>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.info}
        />
        <Title />
        <div className="row"></div>
        <Container
          villager={villagers}
          villagers={this.state.villagers}
          onImageClick={name => { this.handleSelectVillagers(name) }}
        />
        <Footer />
      </div>
    )
  };
};
export default App
//ReactDOM.render(<App />, document.getElementById('root'));
