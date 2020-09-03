import React, { Component } from 'react';
import { List, InputItem } from "antd-mobile";
import io from 'socket.io-client';
const socket = io('ws://localhost:9093')

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    socket.emit('sendmsg',{text:this.state.text})
    this.setState({text: ''})
    console.log(this.state);
  }

  componentDidMount() {
    const socket = io('ws://localhost:9093')
  }
  render() {
    console.log(this.props.match.params.user)
    return (
      <div className="stick-footer">
        chat with { this.props.match.params.user }
        <List>
          <InputItem
            placeholder="请输入"
            value= {this.state.text}
            onChange = {
              v=> {
                this.setState({text: v})
            }}
            extra={<span onClick={()=> this.handleSubmit()}>发送</span>}
          ></InputItem>
        </List>
      </div>
    );
  }
}

export default Chat;