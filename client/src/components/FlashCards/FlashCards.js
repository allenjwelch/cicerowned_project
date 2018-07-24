import React, { Component } from 'react';
import { Col } from 'react-materialize';
import API from "../../utils/API"; 
import "./FlashCards.css";

let cardArray; 

class FlashCards extends Component {

  state = {
    flipped: false,
    cardPos: 0,
    activeDeck: this.props.activeDeck,
    userScore: 0,
    user: this.props.user,
    badgesEarned: 'blank', 
  }

  componentWillReceiveProps(nextProps) {
    let obj = nextProps; 
    cardArray = Object.keys(obj).map(function(key) {
      return obj[key];
    });
    
<<<<<<< HEAD
    // console.log(cardArray); 
    this.setState({ activeDeck : cardArray[0], cardPos: 0, flipped: false  }); 
    this.saveUserScore(this.state.user.email, this.state.activeDeck[0].familyName, this.state.userScore, this.state.badgesEarned)
    // console.log(this.state.user.email, this.state.activeDeck[0].familyName, this.state.userScore, this.state.badgesEarned)
=======
    console.log(cardArray); 
    
    this.saveUserScore(this.state.user.email, this.state.activeDeck[0].familyName, this.state.userScore, this.state.badgesEarned)
    this.setState({ activeDeck : cardArray[0], cardPos: 0, flipped: false, userScore:0 }) ; 
  
    console.log('new deck + save data')
    console.log(this.state.user.email, this.state.activeDeck[0].familyName, this.state.userScore, this.state.badgesEarned)
>>>>>>> 3d8bb43bd91a6c49aafde53c6bcbbac65ec4f5d7
    return cardArray; 
  }

  componentDidMount() {
    this.objectToArray(); 
  };

  objectToArray = () => {
    let obj = this.props; 
    cardArray = Object.keys(obj).map(function(key) {
      return obj[key];
    });
    this.setState({ activeDeck : cardArray[0] }) 
    return cardArray; 
  }

  saveUserScore = (email, familyName, score, badgesEarned) => {
    API.updateScore(email, familyName, score, badgesEarned)
      .then(res => console.log('User Achievements Updated'))
      .catch(err => console.log(err));
  }

  flip = () => {
    if (this.state.flipped === false) {
      this.setState({ flipped: true });
    } else {
      this.setState({ flipped: false });
    }
  };

  changeCard = () => {
    // move user to next card in deck ====
    this.setState({ cardPos: this.state.cardPos + 1 });
    if (this.state.cardPos > this.state.activeDeck.length - 2) { //! Changed length of deck check
      this.setState({ cardPos: 0 });
    }
    return this.state.cardPos; 
  }

  nailedIt = () => {
    let cardCount = this.countInArray(this.state.activeDeck, this.state.activeDeck[this.state.cardPos]); 
    if (cardCount > 1) {
      this.state.activeDeck.shift(); 
    }
    this.setState({ userScore: this.state.userScore + 1 })
    console.log('User Score: ', this.state.userScore); 
    if (this.state.userScore >= 9 && this.state.activeDeck[0].hasOwnProperty('styleName') ) {
      this.setState({ badgesEarned: this.state.activeDeck[0].familyName}); 
    }
    this.changeCard(); 
  }
  
  failedIt = () => {
    this.state.activeDeck.splice(Math.ceil(this.state.activeDeck.length / 2), 0, this.state.activeDeck[this.state.cardPos])
    this.setState({ userScore: this.state.userScore - 1 })
    console.log('User Score: ', this.state.userScore); 
    this.changeCard(); 
  }

  // function to count cards in array
  countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === what) {
        count++; 
      }
    }
    return count; 
  }

  render() {
    return (
      <div className="flashCardContainer" >
        {console.log('activeDeck: ', this.state.activeDeck)}
        {console.log('cardPos: ', this.state.cardPos)}
        <Col offset="m1 l1 xl1" s={12} m={10} l={10} xl={10} className='cardContainer'>
          <div 
            onClick={this.flip}
            className={
              this.state.flipped === false ? "flashCard" : "flashCard flipped"
            }>
              {
                this.state.activeDeck[this.state.cardPos].hasOwnProperty('styleName') ?
                  
                  <div className="front">
                    <h2>{this.state.activeDeck[this.state.cardPos].familyName}</h2>
                    <h3>{this.state.activeDeck[this.state.cardPos].styleName}</h3> 
                  </div> :

                  <div className="front">
                    <h2>{this.state.activeDeck[this.state.cardPos].deckName}</h2>
                    <h3>{this.state.activeDeck[this.state.cardPos].front}</h3>
                  </div>
              }

              {
                this.state.activeDeck[this.state.cardPos].hasOwnProperty('styleName') ?

                  <div className="back">
                    <img id="beerImage" src={this.state.activeDeck[this.state.cardPos].image} alt="beer style"/>
                    <p id="stats">ABV: {this.state.activeDeck[this.state.cardPos].ABV}</p>
                    <p id="stats">IBUs: {this.state.activeDeck[this.state.cardPos].IBU}</p>
                    <p id="stats">SRM: {this.state.activeDeck[this.state.cardPos].SRM}</p>
                    <p id="des"><b>Description:</b> {this.state.activeDeck[this.state.cardPos].briefDescription}</p>
                    <p id="ex"><b>Examples:</b></p>
                    <p id="ex">{this.state.activeDeck[this.state.cardPos].examples[0]}</p>
                    <p id="ex">{this.state.activeDeck[this.state.cardPos].examples[1]}</p>
                    <a className="flashCardBtns" id="nailed" onClick={this.nailedIt}>Nailed it!</a>
                    <a className="flashCardBtns" id="almost" onClick={this.changeCard}>Almost...</a>
                    <a className="flashCardBtns" id="failed" onClick={this.failedIt}>Failed it</a>
                  </div>  :

                  <div className="back">
                    <h3>{this.state.activeDeck[this.state.cardPos].back}</h3>
                    <a className="flashCardBtns" id="nailed" onClick={this.nailedIt}>Nailed it!</a>
                    <a className="flashCardBtns" id="almost" onClick={this.changeCard}>Almost...</a>
                    <a className="flashCardBtns" id="failed" onClick={this.failedIt}>Failed it</a>
                  </div>
              }
          </div>
        </Col>
      </div>
    );
  }
}

export default FlashCards;