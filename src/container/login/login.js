import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
    }
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key,val) {
    this.setState({
      [key]:val
    })
  }

  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem 
              onChange={v=>this.handleChange('user',v)}>用户:</InputItem>
            <WhiteSpace />
            <InputItem 
              type="password"
              onChange={v=>this.handleChange('pwd',v)}
              >密码:</InputItem>
          </List>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;