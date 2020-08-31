import React, { Component } from 'react';
import { Result, List ,WhiteSpace,Modal } from "antd-mobile";
import { connect } from 'react-redux';
import browserCookies from "browser-cookies";

@connect(
  state => state.user
)
class Userinfo extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const alert = Modal.alert
      alert('注销', '确定退出登录码???', [
        { text: 'Cancel', onPress: () => console.log('cancel') },
        { text: 'Ok', onPress: () => {
          browserCookies.erase('userid');
          window.location.href = window.location.href;
          } },
      ])
  }

  render() {
    const myImg = src => <img src={src} className="spe am-icon am-icon-md" style={{ width: 50,height: 50 }} alt="" />;
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      this.props.avatar ?
      <div>
        <Result
          // img={myImg(require(`../img/${this.props.avatar}.png`))}
          img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt="" />}
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
          <Item 
            onClick={this.logout} 
            arrow="horizontal">
            退出登录
          </Item>
        </List>
      </div>: null
    );
  }
}

export default Userinfo