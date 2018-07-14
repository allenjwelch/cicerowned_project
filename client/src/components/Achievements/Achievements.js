import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-materialize';
import API from "../../utils/API";


class Achievement extends Component {

  state = {
    email: this.props.email,
    badgeProps: this.props.badgesEarned
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
                  <h4>{this.state.badgesEarned}</h4>
              </Card>
            </Col>
          </Container>
        </Row>
      </div>
    );
  };
};

export default Achievement;