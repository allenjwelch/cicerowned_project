import React, { Component } from 'react';
import { Row, Col, CardPanel, Card, Container } from "react-materialize";
import BarChart from '../../components/Charts/BarChart';
import StreamGraph from '../../components/Charts/StreamGraph';
import worlddata from '../../components/Charts/world';
import Achievement from '../../components/Achievements';
import { range } from 'd3-array';
import { scaleThreshold } from 'd3-scale';
import { geoCentroid } from 'd3-geo';
import API from "../../utils/API";

const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
  })


// let barData = [5,5,6,7,8,9,10];
let barData = [];

let updateBarData = function(pbarData) {
  barData = pbarData
  return barData;
}

const colorScale = scaleThreshold().domain([5,10,20,30]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])


class UserProfile extends Component {
  
  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40], email: this.props.email }
  }

  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

  onHover(d) {
    this.setState({ hover: d.id })
  }

  onBrush(d) {
    this.setState({ brushExtent: d })
  } 
  
  componentDidMount() {
    this.loadUserbyId(this.props.email);
  }

  loadUserbyId = () => {
    API.loadUserbyId(this.props.email)
      .then(res =>
        // use the variables passed onto state below to populate user information
        {
          this.barData = res.data[0].decksCompleted[1];
          console.log('============================================')
          updateBarData(res.data[0].decksCompleted[1]);
          console.log(barData);
          this.setState({ decksCompleted: res.data[0].decksCompleted, barData: res.data[0].decksCompleted[1], badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
        })
      .then(console.log(this.state.deckScore))
      .catch(err => console.log(err));
  };


  render() {
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1])
    return (
      <div>
        {console.log(this.props)}
        <Row>
          <Col s={12} m={12}>
            <CardPanel className="teal lighten-4 black-text center-align">
                <span>
                  <h4>Hello, {this.props.name}!</h4>
                  <h4>Email: {this.props.email}</h4>
                  <h4>Decks completed {this.state.decksCompleted}</h4>
                  <h4>Score {this.state.deckScore}</h4>
                  <h4>Badges Earned {this.state.badgesEarned}</h4>
                  <h4>Decks Created {this.state.decksCreated}</h4>
                  <h4>Logged In {this.state.loggedInDates}</h4>
                </span>
            </CardPanel>
          </Col>
        </Row>

        <Row>
        <Container>
        <Col m={6} s={12}>
          <Card 
          className= 'amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange medium material-icons">dvr</i>} 
          actions={<a href='/user/study'>This is a link</a>}>
          <h3>Study</h3><p>Select Your Deck!</p>
          </Card>
        </Col>
      
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">loyalty</i>} 
          actions={[<a href='/user/create'>This is a link</a>]}>
          <h3>Create</h3><p>Customize Your Own Deck</p>
          </Card>
        </Col>
        </Container>
        </Row>

        <Achievement {...this.props}
        />
    
      <Container>
      <div className="chart">
        <div>
          <BarChart data={barData} size={[500,500]} />
        </div>
        <div>
          {/* <StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} /> */}
        </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default UserProfile;
