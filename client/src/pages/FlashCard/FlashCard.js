import React, { Component } from "react";
import API from "../../utils/API"; 
import { Toast, Collapsible, CollapsibleItem, Button, Row, Col, Collection, CollectionItem, Modal, Input } from 'react-materialize';
import FlashCards from "../../components/FlashCards";
import "./FlashCard.css";
import untapped from "../../images/pbu_40_black.png"
import * as emailjs from 'emailjs-com';


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
        .then(res => {
          setTimeout( () => {
            this.setState({ allBeers: [...this.state.allBeers, ...res.data] })
          }, 3000);
        }))
      
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
    let query = this.state.brewerySearch + ' ' + this.state.beerSearch + ' ';
    console.log(query);
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

  handleSend = event => {
    event.preventDefault();
    emailjs.sendForm('gmail', 'cicerowned_complaint', this.form, 'user_11WHsfD7vGZzuQnVR4wbU')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   }); 
    alert("Thank you for your message!");

    
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={8} l={8} xl={8} className='col1'>

            {
              this.state.activeDeck.length ? 
                <div>
                <Col s={12} m={12} l={12} xl={12} className='col11'>

                  <FlashCards key={this.state.activeDeck.styleName} {...this.state.activeDeck} /> 
                </Col>  
                
                <Col s={12} m={12} l={12} xl={12} className='col12'>

                  <Modal style={{"text-align":"center"}}
                    header="Please tell us about the issue"
                    trigger={<p className="report" style={{"cursor":"pointer"}}>Have an issue with a card? Please let us know!</p>}>
                    
                    <form className="complaintForm" ref={(form) => { this.form = form; }}>
                      <Input name='deck' label="Deck Name" value={this.state.activeDeck[0].familyName || this.state.activeDeck[0].deckName} />
                      <Input name='card' label="Card Name" />
                      <Input name='cardIssue' s={12} type='select' label='Issue' defaultValue='Select an issue'>
                        <option value='Select an issue' disabled>Select an issue</option>
                        <option value='card is inappropiate/offensive'>Card is inappropiate/offensive</option>
                        <option value='card is off topic'>Card is off topic from deck</option>
                        <option value='information is incorrect'>Information is incorrect</option>
                      </Input>
                    
                    </form>

                    <Button 
                      className="customCardBtns saveCreateNew teal darken-1" 
                      onClick={this.handleSend}>
                        Send!
                    </Button>
                  </Modal>
                </Col>
                </div>  :

                <h5 className="noResults">Select a deck from the side menu to get started!</h5>
            }

          </Col>
         
          <Col s={12} m={4} l={4} xl={4} className='col2'>
            <Collapsible accordion>

              {/* <Modal
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
              </Modal> */}

              {/* <hr /> */}
              <CollapsibleItem header='Beer Styles'>
                
                <Collection>
                  <p><em>Beer style information respectfully borrowed from <a href="https://www.craftbeer.com/" target="_blank">CraftBeer.com</a></em></p>
                  <hr />
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
        <Row>
          <Col s={12} m={12} l={12} xl={12} className='col4'>
              {this.state.searchResults.hasOwnProperty('response') ? 
                <div className="searchResults">
                  <img className="resultsImg" src={this.state.searchResults.response.beers.items[0].beer.beer_label} alt="beer label"/>
                  <h3>{this.state.searchResults.response.beers.items[0].brewery.brewery_name}</h3>
                  <h4>{this.state.searchResults.response.beers.items[0].beer.beer_name}</h4>
                  <p>ABV: {this.state.searchResults.response.beers.items[0].beer.beer_abv}</p>
                  <p>IBU: {this.state.searchResults.response.beers.items[0].beer.beer_ibu}</p>
                  <p>Description: {this.state.searchResults.response.beers.items[0].beer.beer_description}</p>
                  <div className="searchFooter"><img src={untapped} alt="untapped"/></div>
                </div>
              : <h5 className="noResults">Search results unavailable</h5> }
              
            {/* <Modal
              header='Select a deck to add to your stack'
              trigger={
                <Button 
                  l={2}
                  className="customCardBtns saveCreateNew teal darken-1" 
                  onClick={this.beerSearchBtn}>
                    Explore
                </Button>}>
              {this.state.searchResults.length ? 
                <div>
                  <h3>{this.state.searchResults.response.beers.items[0].brewery.brewery_name}</h3>
                  <h3>{this.state.searchResults.response.beers.items[0].brewery.brewery_name}</h3>
                  <h3>{this.state.searchResults.response.beers.items[0].beer.beer_description}</h3>
                  <h3></h3>
                  <h3></h3>
                </div>
              : <h3>Search results unavailable</h3> }
            </Modal> */}
          

          </Col>
        </Row>

      </div>

    )
  }
}; 

export default FlashCard; 