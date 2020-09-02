import React, { Component } from 'react';


class Chat extends Component {
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