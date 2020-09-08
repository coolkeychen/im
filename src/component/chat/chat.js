import React, { Component } from 'react';
import { List, InputItem,NavBar } from "antd-mobile";
import { connect } from "react-redux";
import { getMsgList ,sendMsg ,recvMsg } from "../../store/chat";
import io from 'socket.io-client';

const socket = io('ws://localhost:9093')

@connect(
  state => state,
  { getMsgList,sendMsg,recvMsg }
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
    const props = this.props;
    console.log(props.user._id);
    const from = props.user._id;
    const to = props.match.params.user;
    const msg = this.state.text;
    props.sendMsg({from,to, msg});
    this.setState({text: ''})
  }

  componentDidMount() {
    console.log(this.props);
    this.props.recvMsg();
    this.props.getMsgList();
    // socket.on('recvmsg',(data)=>{
    //   this.setState({
    //     msg: [...this.state.msg,data.text]
    //   })
    //   console.log('recvmsg',data);
    // })
  }


  render() {
    const msgList = this.props.chat.msgList
    const user =  this.props.match.params.user;
    const Item = List.Item;
    console.log(msgList)
    return (
      <div id="chat-page">
        <NavBar
          mode="dark"
        >{user}</NavBar>
        {
          msgList.length> 0 
          ? msgList.map((v)=>{
            return user == v.from ? (
              <List key={v._id}>
                <Item
                >{v.content}</Item>
              </List>
            ) : (
              <List key={v._id} >
                <Item 
                  className="chat-me"
                  >{v.content}</Item>
              </List>
            )
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