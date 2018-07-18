import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-materialize';
import API from "../../utils/API";


class Achievement extends Component {

  state = {
    email: this.props.email,
    badgeProps: this.props.badgesEarned,
    // badge: locked
  }

  componentDidMount() {
    //checks that the user data is loaded before the page
    this.loadUserbyId(this.props.email);
  }
  
  loadUserbyId = () => {
    API.loadUserbyId(this.props.email)
      .then(res =>
        // use the variables passed onto state below to populate user information
        
        this.setState({ decksCompleted: res.data[0].decksCompleted.map, deckScore: res.data[0].decksCompleted[1], badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
      )
      .catch(err => console.log(err));

      // console.log("console.log in component", this.state);
  };

  // unlockBadge = () => {
  //   if(this.state.locked === locked) {
  //     this.setState({ locked: unlocked });
  //   } else {
  //     this.setState({locked: locked}); 
  //   }
  // }

  


  render() {
    return(
      <div className = "achievementContainer">
        <Row>
          <Container>
            <Col m={12} s={12}>
              <Card 
                className='amber darken-1 center-align' 
                textClassName='white-text' 
                title={<i className="medium material-icons">local_activity</i>}>
                  <h3>Achievements</h3>
                  {/* <h4>{this.state.badgesEarned}</h4> */}

                  {/* <img src={require("../../images/belgians-locked.png")} 
                  data-locked={require("../../images/belgians-locked.png")}
                  data-unlocked={require("../../images/belgians-unlocked.png")}
                  state="locked" className="badge" width="30%" /> */}

                  <img src={require("../../images/belgians-locked.png")} alt="Belgians" familyName="Belgians" className="locked" width="20%" />
                  <img src={require("../../images/bocks-locked.png")} alt="Bocks" familyName="Bocks" className="locked" width="20%" />
                  <img src={require("../../images/ipas-locked.png")} alt="IPAs" familyName="IPAs" className="locked" width="20%" />
                  <img src={require("../../images/lagerpils-locked.png")} alt="Pils and Lagers" familyName="Pilseners and Pale Lagers" className="locked" width="20%" />
                  <img src={require("../../images/porter-locked.png")} alt="Porters" familyName="Porters" className="locked" width="20%" />
                  <img src={require("../../images/scotchales-locked.png")} alt="Scotch Ales" familyName="Scotch Ales" className="locked" width="20%" />
                  <img src={require("../../images/specialty-locked.png")} alt="Specialty" familyName="Specialty Beers" className="locked" width="20%" />
                  <img src={require("../../images/strongales-locked.png")} alt="Strong Ales" familyName="Strong Ales" className="locked" width="20%" />
                  <img src={require("../../images/wheats-locked.png")} alt="Wheats" familyName="Wheats" className="locked" width="20%" />
                  <img src={require("../../images/wildsourbeers-locked.png")} alt="Wild and Sour Beers" familyName="Wild and Sour Beers" className="locked" width="20%" />

              </Card>
            </Col>
          </Container>
        </Row>
      </div>
    );
  };
};

export default Achievement;