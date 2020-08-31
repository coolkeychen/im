import React, { Component } from 'react';
import { Result, List ,WhiteSpace } from "antd-mobile";
import { connect } from 'react-redux';

@connect(
  state => state.user
)
class Userinfo extends Component {
  render() {
    const myImg = src => <img src={src} className="spe am-icon am-icon-md" style={{ width: 50,height: 50 }} alt="" />;
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      this.props.avatar ?
      <div>
        <Result
          img={myImg(require(`../img/${this.props.avatar}.png`))}
          title={this.props.user}
          message={this.props.type === 'boss' ? this.props.company : this.props.desc }
        />
        <List renderHeader={() => '简介'}>
          <Item multipleLine>
            {this.props.title}
            {
              this.props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)
            }
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item arrow="horizontal">
            退出登录
          </Item>
        </List>
      </div>: 
      null
    );
  }
}

export default Userinfo