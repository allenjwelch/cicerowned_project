import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Collection, CollectionItem, Button, Modal,Row, Col, CardPanel, Card, Container } from "react-materialize";
import BarChart from '../../components/Charts/BarChart';
import worlddata from '../../components/Charts/world';
import Achievement from '../../components/Achievements';
import { range } from 'd3-array';
import { scaleThreshold } from 'd3-scale';
import { geoCentroid } from 'd3-geo';
import API from "../../utils/API";
import './style.css';


// data that was to be used for the world map
const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
  })

  
// variables used for math calculations and statistics
let barData = [];
let barDataFinal =[];
let barDTotal =0;
let barDAverage = 0;
let barDMax = 0;


// used to create a running total of the scores a user has on a specific deck after clicking. This allows for calculations like average
const parseBar = function(barData) {
  barDTotal = 0;
  for (let value of barData){
    barDTotal += parseInt(value);
  }
  barDAverage = (barDTotal / barData.length).toFixed(1);
  return barDAverage
}

// this is used to figure out the max score a user got on a deck
const parseMax = function(barData) {
  barDMax = parseInt(Math.max(...barData));
  return barDMax
}

// color scales for labels on the charts
const colorScale = scaleThreshold().domain([5,10,20,30]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])


class UserProfile extends Component {
  
  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40], email: this.props.email, beerStyles:[], barData:[],barDTotal:0,barDAverage:0,barDMax:0, loggedInDates:[]}
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

  componentDidUpdate(){
  }

  // loads user profile stuff when the dashboard loads. This has alot of the mongodb items that are used for badges earned and charts
  loadUserbyId = () => {
    API.loadUserbyId(this.props.email)
      .then(res =>
        // use the variables passed onto state below to populate user information
        {
          this.barData = res.data[0].decksCompleted;
          this.setState({ decksCompleted: res.data[0].decksCompleted, beerStyles: res.data[0].decksLearned,barData: res.data[0].decksCompleted, badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
        })
      .then(console.log(this.state.deckScore))
      .catch(err => console.log(err));
  };

  // function that determines what the variable data is for the chart
  updateBarData2 = (familyChosen) =>{
    if (familyChosen == null){
      barData = []
      parseBar(barData);
      parseMax(barData);
      this.setState({barData: this.state.barData, familyChosen: familyChosen})
    } else {
        let i = 0;
        barDataFinal=[];
        for(i=0;i<this.barData.length;i++){
          if (this.barData[i][0] == familyChosen){
            barDataFinal.push(this.barData[i][1]);
          }
        }
      parseBar(barDataFinal);
      parseMax(barDataFinal);
      barData = barDataFinal
      this.setState({barData: barDataFinal,familyChosen: familyChosen})
    }
  }

  render() {
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1])
    return (
      <div>
        {console.log(this.state)}
        <Row>
          <Col s={12} m={12}>
            <div className="center-align">
                <span>
                  <h2 className="profile-titles">Prost, {this.props.name}!</h2>
                </span>
            </div>
          </Col>
        </Row>

        <Row>
        <Container>
        <Col m={6} s={12}>
          <Card 
          className= 'amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange large material-icons">dvr</i>} 
          actions={<a className='white-text' href='/user/study'>Study a Deck</a>}>
          <h3 className='titleFont'>Study</h3><p>Select one of our pre-made decks and earn badges or choose a deck created by one of our other users. The more you study the better you get! </p>
          </Card>
        </Col>
      
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange large material-icons">loyalty</i>} 
          actions={[<a className='white-text' href='/user/create'>Create a New Deck</a>]}>
          <h3 className='titleFont'>Create</h3><p>Customize Your Own Deck. Create a study guide for your favorite beers or that new brewery, and share your knowledge!</p>
          </Card>
        </Col>
        </Container>
        </Row>

        <Achievement {...this.props}
        />
    
      <Row>
        <Container>
          <Col s={12} m={12} l={12} xl={12}>
            <div className='black-text center-align'>
              <span>
                <h3 className="profile-titles">Study Stats for {this.state.familyChosen}</h3>
              </span>
            </div>
          </Col>
        </Container>
        
      </Row>

      <Row>
        <Container>

          <Col s={12} m={4} l={4} xl={4}>
            <div className="statsForNerds">
              {<i className="icon-orange medium material-icons">equalizer</i>} 
              <h3>Nurd Stats</h3>
              <h6>You normally get a {barDAverage} on this card deck.</h6>
              <h6>You've studied this deck {barData.length} times.</h6>
              <h6>Your bestest score is {barDMax}.</h6>
              <h6>You have logged in {this.state.loggedInDates.length} times to study. Good job! </h6>

            </div>
          </Col>

          <Col s={12} m={5} l={5} xl={5}>
            <div className="barchart">
              <div>
                <BarChart data={barData} size={[500,500]} />
              </div>
            </div>
          </Col>

          <Col s={12} m={3} l={3} xl={3} className='col4'>
            <Collapsible accordion defaultActiveKey={1}>
              <CollapsibleItem header='Beer Styles'>               
                <Collection>
                  {
                    this.state.beerStyles.map(beer => (
                      <CollectionItem style={{"cursor":"pointer"}} key={beer} onClick={() => this.updateBarData2(beer)} >
                        {beer}
                      </CollectionItem>
                    ))
                  }
                </Collection>
              </CollapsibleItem>
            </Collapsible>
          </Col>

          <Col m={12} s={12}>
            <Card 
            className= 'amber darken-1 center-align' 
            textClassName='white-text' 
            title={<i className="icon-orange large material-icons">question_answer</i>} 
            actions={<a className='white-text' href='/user/chat'>Enter Chat Room</a>}>
            <h4>Chat</h4>
            <p>Share your knowledge. Ask Questions. Raise a Toast.</p>
            </Card>
          </Col>
        </Container>
      </Row>


      </div>
    );
  }
}

export default UserProfile;
