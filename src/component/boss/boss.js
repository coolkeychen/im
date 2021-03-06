import React, { Component } from "react";
import axios from "axios";
import { Card, WingBlank } from "antd-mobile";
import Usercard from '../usercard/usercard';
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
    this.props.getUserList('genius')
  }
  render() {
    return (
      <Usercard data={this.props.userlist}></Usercard>
    );
  }
}

export default Boss;