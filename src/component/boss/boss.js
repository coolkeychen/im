import React, { Component } from "react";
import axios from "axios";
import { Card, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import { getUserList } from '../../store/chatuser'


@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get("/user/list?type=genius",)
      .then(res => {
        if (res.data.code ===0) {
          this.setState({
            data: res.data.data
          })
        }
      })
  }
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        { this.state.data.map(item => (
          item.avatar?
          <Card 
            key = { item._id }
            style={{marginBottom: 15}}>
            <Header
              title = {item.user}
              thumb= {require(`../img/${item.avatar}.png`) }
              extra={<span>{item.title}</span>}
            ></Header>
            <Body>
              { item.desc.split('\n').map(v=> (
                <div style={{marginBottom: 6}} key="v"> {v}</div>
              ))} 
            </Body>
          </Card>
          :null
        ))}
      </WingBlank>
  )}
}

export default Boss;