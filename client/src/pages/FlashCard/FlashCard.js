import React, { Component } from "react";
import API from "../../utils/API"; 
import { Collapsible, CollapsibleItem, Button, Row, Col, Collection, CollectionItem } from 'react-materialize';
import FlashCards from "../../components/FlashCards";
import "./FlashCard.css";


// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 



class FlashCard extends Component {
  state = {
    user: this.props, 
    beerStyles: [], 
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
    //   }, {
    //     styleName: 'style3', 
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
    //   },
    // ], 
  }

  //TODO function to make API call to save user decks to state
  //! Currently pulling ALL cards in singe deck
  componentDidMount() {
    this.loadUserDecks()
    this.loadStyleDecks()
  }

  loadUserDecks = () => {
    API.getBeers()
      .then(res => 
        this.setState({ userDecks: res.data }) )
      .catch(err => console.log(err));
  };

  loadStyleDecks = () => {
    API.getBeersByStyle()
      .then(res => 
        this.setState({ beerStyles: res.data }) )
      .catch(err => console.log(err));
  };

  loadPublicDecks = () => {

  }

  
  //TODO function for adding userDecks to Active Deck (should contain only 1 deck at a time)

  loadActiveDeck = (familyName) => {    
    // this.setState({ activeDeck : [] });
    // console.log(this.state.activeDeck); 
    function filterByFamily(beer) {
      if (beer.familyName === familyName) {
        return true;
      } 
      return false; 
    }
    
    let beerFamily = this.state.userDecks.filter(filterByFamily);
    // console.log(beerFamily); 
    this.setState({ activeDeck: beerFamily });
    console.log('activeDeck', this.state.activeDeck); 
  }
  
  // getUnique = () => {
  //   let arr = this.state.userDecks; 
  //   let unique_array = arr.filter(function(elem, index, self) {
  //     return index === self.indexOf(elem);
  //   });
  //   console.log(unique_array); 
  //   this.setState({ beerStyles : unique_array })
  //   return unique_array;
  // }
  


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
              <Button className="addDeck">Add a new Deck</Button>
              <hr />
              <CollapsibleItem header='Beer Styles' icon='filter_drama'>
                List of user's beer style decks here.
                {/* //TODO add all userDecks of 'Beer Styles' into lists */}
                
                <Collection>
                  {
                    this.state.beerStyles.map(beer => (
                    //TODO change cursor of CollectionItems
                    <CollectionItem style={{"cursor":"pointer"}} key={beer} onClick={() => this.loadActiveDeck(beer)} >
                      {beer}
                    </CollectionItem>
                  ))}
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