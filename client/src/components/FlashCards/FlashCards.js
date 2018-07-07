import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./FlashCards.css";

//TODO - Add ternary statement and setState of 'flipped: true/false' to toggle classes'


class FlashCards extends Component {

  state = {
    flipped: false,
  }

  componentDidMount() {
    
  }
  
  flip = () => {
    if (this.state.flipped === false) {
      this.setState({ flipped: true });
    } else {
      this.setState({ flipped: false });
    }
  };

  // constructor(props) {
  //   super(props);
  // }


  // flip() {
  //   if (this.setState === false) {
  //     this.setState({ flipped: true });
  //   } else {
  //     this.setState({ flipped: false });
  //   }

    // let card = this.card 
    // alert(this.card); 
    // console.log(card); 
    // card.classList.toggle("flipped");
    // let card = ReactDOM.findDOMNode(this.refs.card);
    // card.classList.toggle('flipped');
  // }


  render() {
    return (
      <div className="flashCard" >
        <h3>Flash Cards Component</h3>
        <h4>{this.props.test}</h4>

        <section class="container">
          <div 
            onClick={this.flip}
            className={
              this.state.flipped === false ? "card" : "card flipped"
            }>
            <div className="front">
              <h1>familyName</h1>
              <h3>Style: styleName</h3>
            </div>
            <div className="back">
              <img src="image" alt="beer style image"/>
              <p>ABV: "#"</p>
              <p>IBUs: "#"</p>
              <p>SRM: "#"</p>
              <p>briefDescription: "#"</p>
              <p>examples</p>
              <a class="cardBtns" id="nailed" href="#">Nailed it!</a>
              <a class="cardBtns" id="almost" href="#">Almost</a>
              <a class="cardBtns" id="failed" href="#">Failed it</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FlashCards;