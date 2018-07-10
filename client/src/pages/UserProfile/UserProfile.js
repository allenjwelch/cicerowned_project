import React, { Component } from 'react';
import BarChart from '../../components/Charts/BarChart';
import StreamGraph from '../../components/Charts/StreamGraph';
import worlddata from '../../components/Charts/world';
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

const colorScale = scaleThreshold().domain([5,10,20,30]).range(["#75739F", "#5EAFC6", "#41A368", "#93C464"])


class UserProfile extends Component {
  constructor(props){
    super(props)
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40] }

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
        this.setState({ decksCompleted: res.data[0].decksCompleted, badgesEarned: res.data[0].badgesEarned, decksCreated: res.data[0].decksCreated, loggedInDates: res.data[0].loggedInDates})
      )
      .catch(err => console.log(err));
  };

 

  render() {
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1])
    return (
      <div className="chart">
        <h1>UserProfile</h1>
        <h1>Hello {this.props.name}</h1>
        <h1>email {this.props.email}</h1>
        <h1>Decks completed {this.state.decksCompleted}</h1>
        <h1>Badges Earned {this.state.badgesEarned}</h1>
        <h1>Decks Created {this.state.decksCreated}</h1>
        <h1>Logged In {this.state.loggedInDates}</h1>
        {/* <h1>Scores {this.barDataFunction(this.state.decksCompleted)}</h1> */}

        <div>
          <BarChart data={barData} size={[500,500]} />
        </div>
        <div>
          {/* <StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} /> */}
        </div>
      </div>
    );
  }
}

export default UserProfile;
