import React, { Component } from "react";
import { Collapsible, CollapsibleItem, Button, Row, Col } from 'react-materialize';
import FlashCards from "../../components/FlashCards"; 
import "./FlashCard.css";


// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 


class FlashCard extends Component {
  state = {
    userDecks: [], 
    activeDecks: [], 
    test: "Test State"
  }

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

  render() {
    return (
      <div>
        <h4>Flash Card Page</h4>
        <Row>
          <Col s={12} m={8} l={8} xl={8} className='col1'>

            <FlashCards {...this.state} />

          </Col>
          <Col s={12} m={4} l={4} xl={4} className='col2'>
            <Collapsible accordion defaultActiveKey={1}>
              <Button className="addDeck">Add a new Deck</Button>
              <hr />
              <CollapsibleItem header='Beer Styles' icon='filter_drama'>
                List of user's beer style decks here.
              </CollapsibleItem>
              <CollapsibleItem header='Public Decks' icon='place'>
                List of user's public decks here.
              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      </div>

    )
  }




}; 

export default FlashCard; 