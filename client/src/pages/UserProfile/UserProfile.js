import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Collection, CollectionItem, Button, Modal,Row, Col, CardPanel, Card, Container } from "react-materialize";
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


let barData = [];
let barDTotal =0;
let barDAverage = 0;
let barDMax = 0;

const parseBar = function(barData) {
  barDTotal = 0;
  for (let value of barData){
    barDTotal += parseInt(value);
  }
  barDAverage = (barDTotal / barData.length).toFixed(1);
  return barDAverage
}

const parseMax = function(barData) {
  barDMax = parseInt(Math.max(...barData));
  return barDMax
}

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

  loadUserbyId = () => {
    API.loadUserbyId(this.props.email)
      .then(res =>
        // use the variables passed onto state below to populate user information
        {
          this.barData = res.data[0].decksCompleted[1];
          // updateBarData(res.data[0].decksCompleted,res.data[0].decksCompleted[1],"Porters"); // manually calling a function to update bar data, this allows the data to be passed to the d3js charts

          this.setState({ decksCompleted: res.data[0].decksCompleted, beerStyles: res.data[0].decksCompleted[0],barData: res.data[0].decksCompleted[1], badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
        })
      .then(console.log(this.state.deckScore))
      .catch(err => console.log(err));
  };

  updateBarData2 = (familyChosen) =>{
    if (familyChosen == null){
      barData = this.state.deckScore
      parseBar(barData);
      parseMax(barData);
      this.setState({barData: this.state.barData, familyChosen: familyChosen})
    } else {
      console.log('====================' + this.state.beerStyles);
      let barIndex = this.state.beerStyles.indexOf(familyChosen);
      console.log(barIndex);
      barData = this.state.decksCompleted[barIndex+1]
      parseBar(barData);
      parseMax(barData);
      this.setState({barData: this.state.decksCompleted[barIndex+1],familyChosen: familyChosen})
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
            <CardPanel className="teal lighten-4 black-text center-align">
                <span>
                  <h4>Thanks for coming back {this.props.name}!</h4>
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
          actions={<a href='/user/study'>Study a Deck</a>}>
          <h3>Study</h3><p>Select one of our pre-made decks and earn badges or choose a deck created by one of our other users. The more you study the better you get! </p>
          </Card>
        </Col>
      
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">loyalty</i>} 
          actions={[<a href='/user/create'>Create a New Deck</a>]}>
          <h3>Create</h3><p>Customize Your Own Deck. Create a study guide for your favorite beers or that new brewery, and share your knowledge!</p>
          </Card>
        </Col>
        </Container>
        </Row>

        <Achievement {...this.props}
        />
    
      <Row>
        <Container>
          <Col s={12} m={12} l={12} xl={12}>
            <Card className='amber darken-1 center-align' textClassName='white-text'>
              <h3>{this.state.familyChosen}</h3>
            </Card>
          </Col>
        </Container>
        
      </Row>

      <Row>
        <Container>

          <Col s={12} m={4} l={4} xl={4}>
            <div className="statsForNerds">
              {<i className="icon-orange medium material-icons">equalizer</i>} 
              <h3>Nurd Stats</h3>
              <h6>Average score: {barDAverage}</h6>
              <h6>You've taken this quiz {barData.length} times!</h6>
              <h6>Your bestest score is {barDMax}</h6>
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
        </Container>
      </Row>

       <Row>
        <Container>
        
          <Col m={6} s={12}>
            <div className="streamchart">
              <div>
                {/* <StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} /> */}
              </div>
            </div>
          </Col>
        </Container>
      </Row>
      </div>
    );
  }
}

export default UserProfile;
