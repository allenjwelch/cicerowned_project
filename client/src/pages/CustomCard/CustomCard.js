import React, { Component } from "react";
import { Row, Col, Input, Button } from 'react-materialize';
import API from "../../utils/API"; 
import './CustomCard.css'; 

class CustomCard extends Component {
  state = {
    user: this.props,
    deckName: '', 
    cardFront: '', 
    cardBack: '', 
  }

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  //! FUNCTIONS SHOULD ALSO SAVE CARD TO USER'S DECKS
  handleSaveCreate = event => {
    event.preventDefault();
    API.savePubDecks({
      deckType: 'public',
      deckName: this.state.deckName,
      front: this.state.cardFront,
      back: this.state.cardBack
    })
    .then(
      this.setState({ 
          cardFront: '',
          cardBack: '',
      }))
    .then(console.log(this.state))
    .catch(err => console.log(err));
  };
  
  handleSaveFinish = event => {
    event.preventDefault();
      API.savePubDecks({
          deckType: 'public',
          deckName: this.state.deckName,
          front: this.state.cardFront,
          back: this.state.cardBack
        })
        .then(
          this.setState({ 
              deckName: '',
              cardFront: '',
              cardBack: '',
          }))
        .then(console.log(this.state))
        .catch(err => console.log(err));
  };

  
  render() {
    return (
      <div>
        <Row className='directions center-align'>
            <h1>Create Custom Card Page</h1>
            <h3>Directions on making your custom flashcard!</h3>
        </Row>
        <Row>  
            <form className="customForm">
              {/* <Button className="customCardBtns createNewDeck" onClick={this.handleFormSubmit}>Create a new Deck</Button> */}
              <Input 
                s={12} 
                label="Deck Name" 
                name="deckName" 
                value={this.state.deckName}
                onChange={this.handleInputChange}
              />
              <Input 
                s={12} 
                label="Front of Card" 
                name="cardFront" 
                value={this.state.cardFront}
                onChange={this.handleInputChange}
              />
              <Input 
                s={12}
                // type="textarea" 
                label="Back of Card" 
                name="cardBack" 
                value={this.state.cardBack}
                onChange={this.handleInputChange}
              />
              <Button 
                className="customCardBtns saveCreateNew teal darken-1" 
                onClick={this.handleSaveCreate}>
                  Save and create another
              </Button>
              <Button 
                className="customCardBtns saveFinish deep-orange darken-4" 
                onClick={this.handleSaveFinish}>
                  Save and finish deck
              </Button>
            </form>
        </Row>


      </div>
    )
  }




}; 

export default CustomCard; 