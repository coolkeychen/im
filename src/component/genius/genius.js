import React, { Component } from 'react';
import Usercard from '../usercard/usercard';
import { connect } from "react-redux";
import { getUserList } from '../../store/chatuser'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Genius extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.getUserList('boss')
  }
  render() {
    return (
      <Usercard data={this.props.userlist}></Usercard>
    );
  }
}

export default Genius;