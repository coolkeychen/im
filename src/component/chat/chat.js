import React, { Component } from 'react';
import { List, InputItem } from "antd-mobile";
import { connect } from "react-redux";
import { getMsgList } from "../../store/chat";
import io from 'socket.io-client';

const socket = io('ws://localhost:9093')

@connect(
  state => state.chat,
  { getMsgList }
)
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    // socket.emit('sendmsg',{text:this.state.text})
    this.setState({text: ''})
    console.log(this.state);
  }

  componentDidMount() {
    this.props.getMsgList();
    // socket.on('recvmsg',(data)=>{
    //   this.setState({
    //     msg: [...this.state.msg,data.text]
    //   })
    //   console.log('recvmsg',data);
    // })
  }


  render() {
    const msgList = this.state.msg
    return (
      <div>
        {
          msgList.length> 0 
          ? msgList.map((v)=>{
            return <p key={v}>{v}</p>
          })
          : null
        }
        <div className="stick-footer">
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
      </div>
    );
  }
}

export default Chat;