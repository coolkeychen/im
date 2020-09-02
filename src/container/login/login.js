import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../store/user';
import { Redirect } from "react-router-dom";
import './login.css';


function hello() {
  console.log('Hello cat, I love cat');
}

function hi(fn) {
  return function () {
    console.log('Say hello before')
    fn();
    console.log('Say hello after')
  }
}
hello = hi(hello)
hello();

@connect(
  state=>state.user,
  {login}
)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
    }
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(key,val) {
    this.setState({
      [key]:val
    })
  }

  handleLogin() {
    // console.log(this.state);
    const {user,pwd} = this.state;
    this.props.login(user,pwd)
  }

  register() {
    this.props.history.push('/register')
  }
  render() {
    // console.log('login',this.props.redirectTo);
    return (
      <div>
        {(this.props.redirectTo&&this.props.redirectTo!='/login')? <Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <WingBlank>
          {this.props.msg ? <p className="warn-tip">{this.props.msg}</p>: null}
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
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;