import React, { Component } from "react";
import API from "../../utils/API"; 
import { Collapsible, CollapsibleItem, Button, Row, Col, Collection, CollectionItem, Modal, Input } from 'react-materialize';
import FlashCards from "../../components/FlashCards";
import "./FlashCard.css";
// let _ = require("lodash");


// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 


class FlashCard extends Component {
  state = {
    user: this.props, 
    beerStyles: [], 
    pubDecks: [], 
    allBeers: [], 
    userDecks: [], //! MAY NOT NEED
    activeDeck: [], 
    beerSearch: '', 
    brewerySearch: '',
    searchResults: [],
  }

  //TODO function to make API call to save user decks to state
  componentDidMount() {
    // this.loadUserData()
    // this.loadUserDecks()
    this.loadAllDecks()
    this.loadStyleDecks()
    this.loadPublicDecks()
  }

   loadAllDecks = () => {
    API.getBeers()
      .then(res => 
        this.setState({ allBeers: res.data }) )
      .catch(err => console.log(err))

      .then(
        API.getAllPubDecks()
        .then(res => 
          this.setState({ allBeers: [...this.state.allBeers, ...res.data] })
        ))
      
        .catch(err => console.log(err));
  };

  //TODO need to change to pulling ONLY from user's profile
  // loadUserData = () => {
  //   API.loadUserbyId(this.state.user.email)
  //     .then(res => 
  //       this.setState({ user: res.data[0] }) )
  //     .catch(err => console.log(err));
  // };

  // GETs distinct styles from user decks
  // loadUserDecks = () => {
  //   //! TODO: Needs to first find by user then pull back user custom cards    
  //   API.getUserDecks()
  //     .then(res => 
  //       // console.log(res.data))
  //       this.setState({ userDecks: res.data }) )
  //     .catch(err => console.log(err));
  // };

  // Loads all beer style decks to the "Add a Deck" Btn fro user to choose and add to their profile. 
  loadStyleDecks = () => {
    API.getBeersByStyle()
      .then(res => 
        this.setState({ beerStyles: res.data }) )
      .catch(err => console.log(err));
  };

  // Function for adding public decks
  loadPublicDecks = () => {
    API.getPubDecks()
    .then(res => 
      this.setState({ pubDecks: res.data }) )
    .catch(err => console.log(err));
  }

  
  // Function for adding userDecks to Active Deck (should contain only 1 deck at a time)
  loadActiveDeck = (deck) => {    
    function filterByFamily(card) {
      if (card.familyName === deck || card.deckName === deck) {
        return true;
      } 
      return false; 
    }
    let beerFamily = this.state.allBeers.filter(filterByFamily);
    this.setState({ activeDeck: beerFamily });
  }

  //! TODO: function for adding beer style deck from "Add a Deck" to user's profile.
  // addDeckToUser = (familyName) => {  
  //   function filterByFamily(beer) {
  //     if (beer.familyName === familyName) {
  //       return true;
  //     } 
  //     return false; 
  //   }
  //   console.log('state.user', this.state.user)

  //   let beerFamily = this.state.allBeers.filter(filterByFamily);
  //   //TODO: instead of setting to state, need to post to User's profile, then loadUserDecks pull distinct from user
  //   this.setState({ userDecks: beerFamily });
  //   // console.log('userDecks', this.state.userDecks); 
  //   // this.loadUserDecks()

  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log('beerSearch: ', this.state.beerSearch); 
    console.log('brewerySearch: ', this.state.brewerySearch); 
  };

  beerSearchBtn = event => {
    event.preventDefault();
    let query = this.state.beerSearch + ' ' + this.state.brewerySearch;
      API.untapped(query)
        .then(res => {
          this.setState({ 
            searchResults: res.data, 
            beerSearch: '',
            brewerySearch: '',
          })})
        .then(console.log(this.state.searchResults))
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h4>Flash Card Page</h4>
      {/* {console.log(this.state)} */}
      {console.log('allBeers ', this.state.allBeers)}
      {console.log(process.env.REACT_APP_UNTAPPED_CLIENTSECRET)}
      {console.log(process.env.REACT_APP_TEST)}
      {/* {console.log('activeDeck ', this.state.activeDeck)}
      {console.log('pubDecks ', this.state.pubDecks)}
      {console.log('beerStyles ', this.state.beerStyles)} */}
        <Row>
          <Col s={12} m={8} l={8} xl={8} className='col1'>

            {
              this.state.activeDeck.length ? 
                <FlashCards key={this.state.activeDeck.styleName} {...this.state.activeDeck} /> :
                <h3>Select a deck from the side menu to get started!</h3>
            }

          </Col>
         
          <Col s={12} m={4} l={4} xl={4} className='col2'>
            <Collapsible accordion defaultActiveKey={1}>

              <Modal
                header='Select a deck to add to your stack'
                trigger={<Button className="addDeck">Add a Deck!</Button>}>
                <Collection>

                  {
                    this.state.pubDecks.map(deck => (

                    <CollectionItem style={{"cursor":"pointer"}} key={deck} onClick={() => this.addDeckToUser(deck)} >
                      {deck}
                    </CollectionItem>
                    ))
                  }

                </Collection>
              </Modal>

              <hr />
              <CollapsibleItem header='Beer Styles'>
                
                <Collection>

                  {
                    this.state.beerStyles.map(beer => (
                      <CollectionItem style={{"cursor":"pointer"}} key={beer} onClick={() => this.loadActiveDeck(beer)} >
                        {beer}
                      </CollectionItem>
                    ))
                  }

                </Collection>

              </CollapsibleItem>
              <CollapsibleItem header='Public Decks'>

                <Collection>
                {/* //! Changed from only showing user's custom decks, to ALL public decks */}
                { this.state.pubDecks.length ? 
                    
                    this.state.pubDecks.map(deck => (
                      <CollectionItem style={{"cursor":"pointer"}} key={deck} onClick={() => this.loadActiveDeck(deck)} >
                        {deck}
                      </CollectionItem>
                    ))
                    : <p>There are currently no public decks to choose from. Create a new deck to add to our community collection!</p>
          
                }
                </Collection>

              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={12} l={12} xl={12} className='col3'>
            <form className='searchForm'>
              <Input 
                s={6} l={5}
                label="Brewery" 
                name="brewerySearch" 
                value={this.state.brewerySearch}
                onChange={this.handleInputChange}
              />
              <Input 
                s={6} l={5}
                label="Beer" 
                name="beerSearch" 
                value={this.state.beerSearch}
                onChange={this.handleInputChange}
              />
              <Button 
                l={2}
                className="customCardBtns saveCreateNew teal darken-1" 
                onClick={this.beerSearchBtn}>
                  Explore
              </Button>
            </form> 

          </Col>
        </Row>

      </div>

    )
  }
}; 

export default FlashCard; 