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
    console.log('userinfo',userinfo);
    let msgGroup = [];
    this.props.chat.msgList.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup)
    // console.log('msgGroup',msgGroup)
    return (
      <div className="msg-list">
        <List>
          { chatList.map(item=>{
            const lastItem = this.getLastItem(item)
            const targetId = lastItem.from == userid ? lastItem.to : lastItem.from;
            const unreadNum = item.filter(v=>!v.read && v.to ==userid).length
            if (!userinfo[targetId]) {
              return null
            }
            const name = userinfo[targetId] ? userinfo[targetId].name : ''
            const avatar = userinfo[targetId] ? userinfo[targetId].avatar : ''
            return (
              <Item
                key={lastItem._id}
              extra={<Badge>{unreadNum}</Badge>}
                thumb={require(`../img/${avatar}.png`)}
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
