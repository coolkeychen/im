import React, { Component } from 'react';
import { List, InputItem,NavBar, Icon } from "antd-mobile";
import { connect } from "react-redux";
import { getMsgList ,sendMsg ,recvMsg } from "../../store/chat";
import { getChatId } from "../../tools/util";
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
    if (this.props.chat.msgList.length === 0) {
      this.props.recvMsg();
      this.props.getMsgList();
    } 
    
    // socket.on('recvmsg',(data)=>{
    //   this.setState({
    //     msg: [...this.state.msg,data.text]
    //   })
    //   console.log('recvmsg',data);
    // })
  }


  render() {
    const userid =  this.props.match.params.user;
    const users = this.props.chat.users;
    const chatId = getChatId(userid,this.props.user._id)
    const msgList = this.props.chat.msgList.filter(v=>v.chatid === chatId)
    if (!users[userid]) {
      return null
    }
    const Item = List.Item;
    return (
      <div id="chat-page">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
        >{users[userid].name}</NavBar>
        {
          msgList.length> 0 
          ? msgList.map((v)=>{
            const avatar = require(`../img/${users[v.from].avatar}.png`)
            return userid == v.from ? (
              <List key={v._id}>
                <Item
                  thumb={avatar}
                >{v.content}</Item>
              </List>
            ) : (
              <List key={v._id} >
                <Item 
                  extra={<img src={avatar}/>}
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