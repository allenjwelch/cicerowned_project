import React, { Component } from "react";
import { Collapsible, CollapsibleItem, Button, Row, Col } from 'react-materialize';
import FlashCards from "../../components/FlashCards"; 
import "./FlashCard.css";


// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 



class FlashCard extends Component {
  state = {
    //! Hard coded user decks
    userDecks: [], 
    activeDeck: [
      {
        styleName: 'style1', 
        familyName: 'familyName',
        ABV: 5.5, 
        IBU: 10, 
        BU: 5.5, 
        SRM: 20, 
        image: '#',
        description: 'Sample', 
        example: [
          'example 1', 
          'example 2'
        ]
      }, {
        styleName: 'style2', 
        familyName: 'familyName',
        ABV: 5.5, 
        IBU: 10, 
        BU: 5.5, 
        SRM: 20, 
        image: '#',
        description: 'Sample', 
        example: [
          'example 1', 
          'example 2'
        ]
      }, {
        styleName: 'style3', 
        familyName: 'familyName',
        ABV: 5.5, 
        IBU: 10, 
        BU: 5.5, 
        SRM: 20, 
        image: '#',
        description: 'Sample', 
        example: [
          'example 1', 
          'example 2'
        ]
      },
    ], 
  }

  //TODO function to make API call to save user decks to state

  // componentDidMount() {
  //   this.loadDecks();
  // }

  // loadDecks = () => {
    //   API.getDecks()
    //     .then(res =>
    //       this.setState({ decks: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  //TODO function for adding userDecks to Active Deck (should contain only 1 deck at a time)



  render() {
    return (
      <div>
        <h4>Flash Card Page</h4>
        <Row>
          <Col s={12} m={8} l={8} xl={8} className='col1'>

            <FlashCards {...this.state.activeDeck} />

          </Col>
          <Col s={12} m={4} l={4} xl={4} className='col2'>
            <Collapsible accordion defaultActiveKey={1}>
              <Button className="addDeck">Add a new Deck</Button>
              <hr />
              <CollapsibleItem header='Beer Styles' icon='filter_drama'>
                List of user's beer style decks here.
                //TODO add all userDecks of 'Beer Styles' into lists
          
              </CollapsibleItem>
              <CollapsibleItem header='Public Decks' icon='place'>
                List of user's public decks here.
                //TODO add all userDecks of 'Public' type into lists

              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      </div>

    )
  }




}; 

export default FlashCard; 