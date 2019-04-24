import React, { Component } from "react";
import "./style.css";
import Chatkit from '@pusher/chatkit';
import ChatRooms from "../ChatRooms";
import Messages from "../Messages";
import MessageForm from "../MessageForm";
import NewChatRoom from "../NewChatRoom";

class App extends Component {

  render() {
    return <div className="App">
      <ChatRooms />
      <Messages />
      <MessageForm />
      <NewChatRoom />
    </div>;
  }
}

export default App;
