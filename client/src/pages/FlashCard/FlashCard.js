import React, { Component } from "react";
// import FlashCards from "../../components/FlashCards"; 
// import API from "../../utils/API"; 


class FlashCard extends Component {
  state = {
    decks: [], 
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
      <h1>Flash Card Page</h1>
    )
  }




}; 

export default FlashCard; 