import React from "react"; 
import { Row, Col, Card } from "react-materialize";
import './style.css';
// import Auth from '../../components/Auth/Auth.js';

// const auth = new Auth();
// auth.login();

const Home = () => (
    <div container = "mainBody">
      <Row className = "card-container">
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange medium material-icons">book</i>} 
          actions={[<a className='white-text' href='/user/study'>Learn about Beer</a>]}>
          <h3>Study</h3><p>Learn the basics using our pre-made study guides.</p>
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card 
          className= 'amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange medium material-icons">select_all</i>} 
          actions={[<a className='white-text' href='/user/create'>Create a Deck</a>]}>
          <h3>Create</h3><p>Make your own custom study guides.</p>
          </Card>
        </Col>
      
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">question_answer</i>} 
          actions={[<a className='white-text' href='/chat'>Chat with other beer fans</a>]}>
          <h3>Chat</h3><p>Live chat with other Soon-to-Be Cicerones.</p>
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">loyalty</i>} 
          actions={[<a className='white-text' href='/user'>User Dashboard</a>]}>
          <h3>Get Better</h3><p>Track your progress and earn badges every time you successfully complete a deck!</p>
          </Card>
        </Col>
      </Row>
    </div>
);

export default Home; 