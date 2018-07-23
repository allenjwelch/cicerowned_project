import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-materialize';
import API from "../../utils/API";
import "./style.css";


class Achievement extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: this.props.email,
      badgesEarned: []
    }
  }

  componentDidMount() {
    //checks that the user data is loaded before the page
    this.loadUserbyId(this.props.email);
  }
  
  loadUserbyId = (email) => {
    API.loadUserbyId(email)
      .then(res =>
        // use the variables passed onto state below to populate user information
        
        this.setState({ decksCompleted: res.data[0].decksCompleted.map, deckScore: res.data[0].decksCompleted[1], badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
      )
      .catch(err => console.log(err));

      // console.log("console.log in component", this.state);
    
  };

  render() {
    return(
      <div className = "achievementContainer">
        <Row>
          <Container>
            <Col m={12} s={12}>
              <Card
                className='amber darken-1 center-align' 
                textClassName='white-text' 
                title={<i className="icon-orange large material-icons">local_activity</i>}>
                  <h3 className="titleFont">Achievements</h3>
                  {
                    this.state.badgesEarned.includes("Belgians") ? (
                    <img src={require("../../images/belgians-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/belgians-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Bocks") ? (
                    <img src={require("../../images/bocks-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/bocks-locked.png")} width='20%' />
                    )
                  }
                 {
                    this.state.badgesEarned.includes("IPAs") ? (
                    <img src={require("../../images/ipas-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/ipas-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Pilseners and Pale Lagers") ? (
                    <img src={require("../../images/lagerpils-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/lagerpils-locked.png")} width='20%' />
                    )
                  }
                 {
                    this.state.badgesEarned.includes("Porters") ? (
                    <img src={require("../../images/porter-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/porter-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Scotch Ales") ? (
                    <img src={require("../../images/scotchales-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/scotchales-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Specialty Beers") ? (
                    <img src={require("../../images/specialty-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/specialty-locked.png")} width='20%' />
                    )
                  }          
                 {
                    this.state.badgesEarned.includes("Strong Ales") ? (
                    <img src={require("../../images/strongales-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/strongales-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Wheats") ? (
                    <img src={require("../../images/wheats-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/wheats-locked.png")} width='20%' />
                    )
                  }
                  {
                    this.state.badgesEarned.includes("Wild and Sour Beers") ? (
                    <img src={require("../../images/wildsourbeers-unlocked.png")} width='20%' />
                    ) : (
                    <img src={require("../../images/wildsourbeers-locked.png")} width='20%' />
                    )
                  }

              </Card>
            </Col>
          </Container>
        </Row>
      </div>
    );
  };
};

export default Achievement;