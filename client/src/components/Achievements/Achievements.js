import React, { Component } from 'react';
import { Row, Container, Col, Card } from 'react-materialize';


class Achievement extends Component {
  // decksCompleted
  // state = {
  //   unlocked: false
  // }

  // unlockAchievement = () => {
  //   if (this.state.unlocked === false) {
  //     this.setState({ unlocked: true });
  //   } else {
  //     this.setState({ locked: false });
  //   }
  // };

  

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
                  <img src={require("../../images/porter.locked.png")} className="porterLocked" alt= "porter-locked" width="15%"  />
                  <img src={require("../../images/lagerpils.locked.png")} className="lagerpilsLocked" alt= "lagerpils-locked" width="15%"  />
              </Card>
            </Col>
          </Container>
        </Row>
      </div>
    );
  };
};

export default Achievement;