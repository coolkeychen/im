import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar,InputItem,TextareaItem,Button } from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
import { update } from "../../store/user";
import { Redirect } from "react-router-dom";


@connect(
  state => state.user,
  { update }
)
class Geniusinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {title,company,money, desc,avatar} = this.state;
    this.props.update({title,company,money, desc,avatar})
  }

  handleChange(type,val) {
    this.setState({
      [type]:val
    })
  }

  render() {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && path !==redirect ? <Redirect to={this.props.redirectTo} ></Redirect> :null}
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        <AvatarSelector
          selectAvatar = { (avatarName) => {
            this.setState({
              avatar: avatarName
            })
          }}
          ></AvatarSelector>
        <InputItem onChange={(v)=>this.handleChange('title',v)}>求职岗位</InputItem>
        <TextareaItem 
          onChange={(v)=>this.handleChange('desc',v)}
          rows={3}
          title="个人简介"
          ></TextareaItem>
        <Button 
          type="primary"
          onClick={this.handleSubmit}
          >保存</Button>
      </div>
    );
  }
}

export default Geniusinfo;