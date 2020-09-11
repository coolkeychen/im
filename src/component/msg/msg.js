import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Badge } from "antd-mobile";



@connect(
  state => state
)
class Msg extends Component {

  getLastItem(arr) {
    return arr[arr.length - 1]
  }

  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    const userinfo = this.props.chat.users;
    const userid = this.props.user['_id'];
    let msgGroup = [];
    this.props.chat.msgList.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup).sort((a,b) => {
      const a_last = this.getLastItem(a).create_time;
      const b_last = this.getLastItem(b).create_time;
      return b_last - a_last
    })
    // console.log('msgGroup',msgGroup)
    return (
      <div className="msg-list">
        <List>
          { chatList.map(item=>{
            const lastItem = this.getLastItem(item)
            const targetId = lastItem.from == userid ? lastItem.to : lastItem.from;
            const unreadNum = item.filter(v=>!v.read && v.to == userid).length
            console.log('item',item);
            console.log('unreadNum',unreadNum);
            if (!userinfo[targetId]) {
              return null
            }
            const name = userinfo[targetId] ? userinfo[targetId].name : ''
            const avatar = userinfo[targetId] ? userinfo[targetId].avatar : ''
            return (
              <Item
                key={lastItem._id}
                extra={<Badge text={unreadNum}></Badge>}
                thumb={require(`../img/${avatar}.png`)}
                arrow="horizontal"
                onClick={()=>{
                  this.props.history.push(`/chat/${targetId}`)
                }}
              >
                { lastItem.content }
              <Brief >{ name }</Brief>
              </Item>
            )
          })}
        </List>
      </div>
    );
  }
}

export default Msg;
