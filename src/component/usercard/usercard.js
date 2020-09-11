import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";
import { Card, WingBlank } from "antd-mobile";
import { withRouter } from "react-router-dom";


@withRouter
class Usercard extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChat = this.handleChat.bind(this)
  }

  handleChat(v) {
    // console.log('chat',v);
    this.props.history.push(`/chat/${v}`)
  }

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        { this.props.data.map(item => (
          item.avatar?
          <Card 
            key = { item._id }
            onClick={() => this.handleChat(item._id) }
            style={{marginBottom: 15}}>
            <Header
              title = {item.user}
              thumb= {require(`../img/${item.avatar}.png`) }
              extra={<span>{item.title}</span>}
            ></Header>
            <Body>
              { item.type === 'boss' ? <div style={{marginBottom: 6}}>公司：{item.company}</div> : null }
              { item.desc.split('\n').map((v,index)=> (
                <div style={{marginBottom: 6}} key={index}> {v}</div>
              ))} 
              { item.type === 'boss' ? <div>薪资：{item.money}</div> : null }
            </Body>
          </Card>
          :null
        ))}
      </WingBlank>
  )}
}

export default Usercard