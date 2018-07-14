import React, { Component } from "react";
import { Row, Col, Input, Button } from 'react-materialize';
// import API from "../../utils/API"; 
import './ChatRoom.css'; 
import {subscribeToTimer} from "../../chat.js";
import io from 'socket.io-client';
 
const socket = io('http://localhost:8000');


class ChatRoom extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }
  
  // constructor() {
  //   super();
  //   this.state = {
  //     response: false,
  //     endpoint: "http://127.0.0.1:4001"
  //   };
  // }

  state = {
    timestamp: 'no timestamp yet',
    chatInput: '',
    // response: false,
    // endpoint: "http://localhost:8000"
  };

  
  // componentDidMount() {
  //   const { endpoint } = this.state.endpoint;
  //   const socket = socketIOClient(this.state.endpoint);
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // }

  // $(function () {
  //   var socket = io();
  //   $('form').submit(function(){
  //     socket.emit('chat message', $('#m').val());
  //     $('#m').val('');
  //     return false;
  //   });
  // });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  sendChat = event => {
    event.preventDefault();
    // const socket = io();
    socket.emit('chat message', this.state.chatInput);

    // socket.on("connect", () => {
    //   console.log('socket established'); 
    //   socket.emit('chat message', 'chatInput test');
    //   return false; 
    // });
    // const socket = socketIOClient(this.state.endpoint);
    // socket.emit('chat message', this.state.chatInput);
    console.log(this.state.chatInput); 
  }
 
  render() {
    return (
      <div>
        <p className="chat">
          This is the timer value: {this.state.timestamp}
          Response Data: { this.state.response }
        </p>
        <ul id="messages">
        {/* {
          socket.on('chat message', function(msg){
            // <li>{msg}</li>
            console.log(msg)
          })
        } */}
        </ul>
        <form action="">
          <Input 
            s={12} 
            label="Chat Input" 
            name="chatInput" 
            value={this.state.chatInput}
            onChange={this.handleInputChange}
          />
          {/* <input autocomplete="off" /> */}
          <Button 
            onClick={this.sendChat}>
            Send
          </Button>
        </form>
      </div>
    )
  }




}; 

export default ChatRoom; 