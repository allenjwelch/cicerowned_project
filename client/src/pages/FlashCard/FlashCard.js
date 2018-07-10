import React, { Component } from "react";
import API from "../../utils/API"; 
import { Collapsible, CollapsibleItem, Button, Row, Col, Collection, CollectionItem, Modal } from 'react-materialize';
import FlashCards from "../../components/FlashCards";
import "./FlashCard.css";
// let _ = require("lodash");


// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 


class FlashCard extends Component {
  state = {
    user: this.props, 
    beerStyles: [], 
    allBeers: [], 
    userDecks: [], 
    activeDeck: [], 
    
    //! Hard coded user decks
    // activeDeck: [
    //   {
    //     styleName: 'style1', 
    //     familyName: 'familyName',
    //     ABV: 5.5, 
    //     IBU: 10, 
    //     BU: 5.5, 
    //     SRM: 20, 
    //     image: '#',
    //     description: 'Sample', 
    //     example: [
    //       'example 1', 
    //       'example 2'
    //     ]
    //   }, {
    //     styleName: 'style2', 
    //     familyName: 'familyName',
    //     ABV: 5.5, 
    //     IBU: 10, 
    //     BU: 5.5, 
    //     SRM: 20, 
    //     image: '#',
    //     description: 'Sample', 
    //     example: [
    //       'example 1', 
    //       'example 2'
    //     ]
    //   }
    // ], 
  }

  //TODO function to make API call to save user decks to state
  componentDidMount() {
    this.loadUserData()
    this.loadStyleDecks()
    this.loadAllDecks()
  }

  loadAllDecks = () => {
    API.getBeers()
      .then(res => 
        this.setState({ allBeers: res.data }) )
      .catch(err => console.log(err));
  };

  //TODO need to change to pulling ONLY from user's profile
  loadUserData = () => {
    console.log('loading user decks...')
    API.loadUserbyId(this.state.user.email)
      .then(res => 
        // console.log(res.data)
        this.setState({ user: res.data }) 
      )
      .then( 
        console.log(this.state.user) )
      .catch(err => console.log(err));
    
  };

  // Loads all beer style decks to the "Add a Deck" Btn fro user to choose and add to their profile. 
  loadStyleDecks = () => {
    API.getBeersByStyle()
      .then(res => 
        this.setState({ beerStyles: res.data }) )
      .catch(err => console.log(err));
  };

  //TODO function for adding public decks
  loadPublicDecks = () => {

  }

  
  // function for adding userDecks to Active Deck (should contain only 1 deck at a time)
  loadActiveDeck = (familyName) => {    
    function filterByFamily(beer) {
      if (beer.familyName === familyName) {
        return true;
      } 
      return false; 
    }
    
    let beerFamily = this.state.userDecks.filter(filterByFamily);
    this.setState({ activeDeck: beerFamily });
    console.log('activeDeck', this.state.activeDeck); 
  }

  //TODO function for adding beer style deck from "Add a Deck" to user's profile.
  addDeckToUser = (familyName) => {    
    function filterByFamily(beer) {
      if (beer.familyName === familyName) {
        return true;
      } 
      return false; 
    }
    
    let beerFamily = this.state.allBeers.filter(filterByFamily);



    //! TODO: instead of setting to state, need to post to User's profile, then loadUserDecks pull distinct from user
    this.setState({ userDecks: beerFamily });
    console.log('userDecks', this.state.userDecks); 
    // this.loadUserDecks()

  }

    // addDeckToUser = (familyName) => {    
    //   API.getBeers()
    //   .then(res => 
    //     // this.beers = res.data.filter(filterByFamily),
    //     // console.log(this.beers),
    //     this.setState({ userDeck: res.data.filter(filterByFamily) }))
    //     .catch(err => console.log(err));
    //     // console.log('activeDeck', this.state.activeDeck); 
        
        
    //     function filterByFamily(beer) {
    //       console.log('addDecktoUser'); 
    //     if (beer.familyName === familyName) {
    //       return true;
    //     } 
    //     console.log(this.state.userDeck); 
    //     return false; 
    //   }
      
    // }
  
  // getUnique = (item) => {
  //   let uniqueArray = _.uniq(item);
  //   return uniqueArray; 
  // }
  //   let arr = this.state.userDecks; 
  //   let unique_array = arr.filter(function(elem, index, self) {
  //     return index === self.indexOf(elem);
  //   });
  //   console.log(unique_array); 
  //   this.setState({ beerStyles : unique_array })
  //   return unique_array;
  // }
  
  beerStyle; 
  uniqueArray; 

  render() {
    return (
      <div>
        <h4>Flash Card Page</h4>
      {/* {console.log(this.state.user)} */}
      {/* {console.log(this.state.userDecks)} */}
      {/* {console.log(this.state.beerStyles)} */}
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
                    this.state.beerStyles.map(beer => (

                    <CollectionItem style={{"cursor":"pointer"}} key={beer} onClick={() => this.addDeckToUser(beer)} >
                      {beer}
                    </CollectionItem>

                  ))}
                </Collection>
              </Modal>

              <hr />
              <CollapsibleItem header='Beer Styles' icon='filter_drama'>
                List of user's beer style decks here.
                {/* //TODO add all userDecks of 'Beer Styles' into lists */}
                
                <Collection>

                  { this.state.userDecks.length ? 
                    
                    this.state.userDecks.map(beer => (
                      <CollectionItem style={{"cursor":"pointer"}} key={beer.familyName} onClick={() => this.loadActiveDeck(beer.familyName)} >
                        {beer.familyName}
                      </CollectionItem>
                    ))
                    : <p>Click 'Add a Deck' to add new decks to your collection</p>
                    
                  }


                </Collection>

              </CollapsibleItem>
              <CollapsibleItem header='Public Decks' icon='place'>
                List of user's public decks here.
                {/* //TODO add all userDecks of 'Public' type into lists */}

                <Collection>
                  {
                    this.state.beerStyles.map(beer => (
                    //TODO change cursor of CollectionItems
                    <CollectionItem key={beer} onClick={() => this.loadActiveDeck(beer)} >
                      {beer}
                    </CollectionItem>
                  ))}
                </Collection>

              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      </div>

    )
  }
}; 

export default FlashCard; 