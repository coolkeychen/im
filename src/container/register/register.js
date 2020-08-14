import React from 'react';
import Logo from '../../component/logo/logo';
import { List,InputItem,Radio,WingBlank,WhiteSpace,Button } from 'antd-mobile';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius'
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    this.props.history.push('/login')
  }

  onChange(type) {
    console.log('type','type')
    this.setState({
      type
    })
  }

  render() {
    const RadioItem = Radio.RadioItem;
    const { type } = this.state;
    return  (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户:</InputItem>
            <InputItem>密码:</InputItem>
            <InputItem>确认密码:</InputItem>
            <RadioItem checked={type==='genius'} onChange={() => this.onChange('genius')}>牛人</RadioItem>
            <RadioItem checked={type==='boss'} onChange={() => this.onChange('boss')}>Boss</RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </WingBlank>
        
        <WhiteSpace />
        <WingBlank>
          <Button type="primary"  onClick={this.login}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register;