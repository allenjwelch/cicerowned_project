import React, { Component } from "react";
import { Row, Col, Input, Button, Collection, CollectionItem } from 'react-materialize';
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

  state = {
    user: this.props, 
    timestamp: 'no timestamp yet',
    chatInput: '',
    chatHistory: [],
  };
  
  componentDidMount() {
    this.registerHandler(this.onMessageReceived)
  }

  componentDidUpdate() {
  }

  registerHandler(onMessageReceived) {
    console.log('in registerHandler')
    socket.on('chat message', onMessageReceived)
  }

  onMessageReceived = (entry) => {
    console.log('onMessageReceived:', entry);
    let chatLog = []; 
    chatLog.push(...this.state.chatHistory); 
    chatLog.push(entry);
    this.setState({ chatHistory: chatLog });
    // setTimeout(this.updateScroll,3000);
    this.scrollChatToBottom()

    // this.updateScroll();
    // this.updateChatHistory(entry)
  }

  // updateChatHistory(entry) {
  //   this.setState({ chatHistory: entry })
  // }
  
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
 

 

  


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // updateScroll(){
  //   const element = document.getElementsByClassName("chatDiv");
  //   element.scrollTop = element.scrollHeight;
  // }

  scrollChatToBottom = () => {
    // this.panel.scrollTo(0, this.panel.scrollHeight)
    console.log(this.panel); 
    // this.panel.scrollTop = this.panel.scrollHeight;
  }

  sendChat = event => {
    event.preventDefault();
    // const socket = io();
    socket.emit('chat message', this.state.user.name + ': ' + this.state.chatInput);

    // socket.on("connect", () => {
    //   console.log('socket established'); 
    //   socket.emit('chat message', 'chatInput test');
    //   return false; 
    // });
    // const socket = socketIOClient(this.state.endpoint);
    // socket.emit('chat message', this.state.chatInput);
    console.log('sending chat: ', this.state.chatInput); 
    console.log('user: ', this.state.user); 
    this.setState({ chatInput: '' }); 

  }
 
  render() {
    return (
      <div>
        {/* <p className="chat">
          This is the timer value: {this.state.timestamp}
          Response Data: { this.state.response }
        </p> */}
        {
          this.state.chatHistory.length ? (
           <Collection className="chatBox" ref={(panel) => { this.panel = panel; }}>
            {this.state.chatHistory.map(chats => (
              <CollectionItem key={chats}>
                {chats}
              </CollectionItem>
            ))}
          </Collection>
          ) : (
            <h4>No Chatting Yet</h4>
          )
        }
        {console.log('chat history: ', this.state.chatHistory)}
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