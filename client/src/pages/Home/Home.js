import React from "react"; 
import { Row, Col, Card } from "react-materialize";
import './style.css';
// import Auth from '../../components/Auth/Auth.js';

// const auth = new Auth();
// auth.login();

const Home = () => (
    <div container = "mainBody">
      <Row>
        <Col m={6} s={12}>
          <Card 
          className='card amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange medium material-icons">book</i>} 
          actions={[<a href='#'>This is a link</a>]}>
          <h3>Study</h3><p>Learn the basics using our pre-made study guides.</p>
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card 
          className= 'amber darken-1 center-align' 
          textClassName='white-text' 
          title={<i className="icon-orange medium material-icons">select_all</i>} 
          actions={[<a href='#'>This is a link</a>]}>
          <h3>Create</h3><p>Make your own custom study guides.</p>
          </Card>
        </Col>
      
        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">loyalty</i>} 
          actions={[<a href='#'>This is a link</a>]}>
          <h3>Share</h3><p>Share study guides and learn from others by publishing custom cards.</p>
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card 
          className='amber darken-1 center-align' 
          textClassName='white-text' title={<i className="icon-orange medium material-icons">book</i>} 
          actions={[<a href='#'>This is a link</a>]}>
          <h3>Study</h3><p>Learn the basics using our pre-made study guides</p>
          </Card>
        </Col>
      </Row>
    </div>
);

export default Home; 