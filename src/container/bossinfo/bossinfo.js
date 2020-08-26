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
class Bossinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {title,company,money, desc} = this.state;
    this.props.update({title,company,money, desc})
  }

  handleChange(type,val) {
    this.setState({
      [type]:val
    })
  }

  render() {
    return (
      <div>
        {this.props.redirectTo? <Redirect to={this.props.redirectTo} ></Redirect> :null}
        <NavBar mode="dark">Boss完善信息页面</NavBar>
        <AvatarSelector
          selectAvatar = { (avatarName) => {
            this.setState({
              avatarName
            })
          }}
          ></AvatarSelector>
        <InputItem onChange={(v)=>this.handleChange('title',v)}>招聘职位</InputItem>
        <InputItem onChange={(v)=>this.handleChange('company',v)}>公司名称</InputItem>
        <InputItem onChange={(v)=>this.handleChange('money',v)}>职位薪资</InputItem>
        <TextareaItem 
          onChange={(v)=>this.handleChange('desc',v)}
          rows={3}
          title="职位要求"
          ></TextareaItem>
        <Button 
          type="primary"
          onClick={this.handleSubmit}
          >保存</Button>
      </div>
    );
  }
}

export default Bossinfo;