import React, { Component } from 'react';
import io from 'socket.io-client';


class Chat extends Component {
  componentDidMount() {
    const socket = io('ws://localhost:9093')
  }
  render() {
    console.log(this.props.match.params.user)
    return (
      <div>
        chat with { this.props.match.params.user }
      </div>
    );
  }
}

export default Chat;