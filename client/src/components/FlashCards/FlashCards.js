import React, { Component } from 'react';
import { Col, Button } from 'react-materialize';
import "./FlashCards.css";

let cardArray; 

class FlashCards extends Component {

  state = {
    flipped: false,
    cardPos: 0,
    activeDeck: this.props,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ activeDeck: nextProps });  
  }

  componentDidMount() {
    this.objectToArray(); 
      // .then(
      //   console.log(cardArray));
      //   this.setState({ activeDeck : cardArray })
      // .catch(err => console.log(err));
  };

  objectToArray = () => {
    let obj = this.props; 
    // console.log(obj); 
    cardArray = Object.keys(obj).map(function(key) {
      return obj[key];
    });
    this.setState({ activeDeck : cardArray }) //! Needs either callback or promise to run sync
    return cardArray; 
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
    console.log('card Pos', this.state.cardPos); 
    console.log('deck length', this.state.activeDeck.length); 
    console.log(this.state.activeDeck); 

    if (this.state.cardPos > this.state.activeDeck.length - 2) { //! Changed length of deck check
      this.setState({ cardPos: 0 });
      console.log(this.state.cardPos); 
    }
    return this.state.cardPos; 
  }

  nailedIt = () => {
    //! deletes too many cards if first failedit
    let cardCount = this.countInArray(this.state.activeDeck, this.state.activeDeck[this.state.cardPos]); 
    console.log('cardCount', cardCount)
    if (cardCount > 1) {
      this.state.activeDeck.shift(); 
    }
    this.changeCard(); 
  }

  failedIt = () => {
    this.state.activeDeck.splice(Math.ceil(this.state.activeDeck.length / 2), 0, this.state.activeDeck[this.state.cardPos])
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

  // constructor(props) {
  //   super(props);
  //   this.state.activeDeck = this.props; 
  //   cardPos = 0; 
  // };


  render() {
    return (
      <div className="flashCard" >
        <Col offset="m1 l1 xl1" s={12} m={10} l={10} xl={10} className='container'>
        {/* <section class="container"> */}
          <div 
            onClick={this.flip}
            className={
              this.state.flipped === false ? "card" : "card flipped"
            }>
            <div className="front">
              <h2>{this.state.activeDeck[this.state.cardPos].familyName}</h2>
              <h3>{this.state.activeDeck[this.state.cardPos].styleName}</h3>
            </div>
            <div className="back">
              <img id="beerImage" src={this.state.activeDeck[this.state.cardPos].image} alt="beer style image"/>
              <p id="stats">ABV: {this.state.activeDeck[this.state.cardPos].ABV}</p>
              <p id="stats">IBUs: {this.state.activeDeck[this.state.cardPos].IBU}</p>
              <p id="stats">SRM: {this.state.activeDeck[this.state.cardPos].SRM}</p>
              <p id="des"><b>Description:</b> {this.state.activeDeck[this.state.cardPos].briefDescription}</p>
              <p id="ex"><b>Examples:</b></p>
              <p id="ex">{this.state.activeDeck[this.state.cardPos].examples[0]}</p>
              <p id="ex">{this.state.activeDeck[this.state.cardPos].examples[1]}</p>
              <a className="cardBtns" id="nailed" onClick={this.nailedIt}>Nailed it!</a>
              <a className="cardBtns" id="almost" onClick={this.changeCard}>Almost...</a>
              <a className="cardBtns" id="failed" onClick={this.failedIt}>Failed it</a>
            </div>
          </div>
         {/* </section> */}
        </Col>
      </div>
    );
  }
}

export default FlashCards;