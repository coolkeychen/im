import React from 'react';
import Logo from '../../component/logo/logo';
import { List,InputItem,Radio,WingBlank,WhiteSpace,Button,Toast } from 'antd-mobile';
import { register } from '../../store/user'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import './register.css';
import imForm from "../../component/im-form/im-form";


function offline(params) {
  return Toast.offline(params, 1);
}

@connect(
  state=>state.user,
  { register }
)

@imForm
class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // user: '',
      // pwd: '',
      // repeatPwd: '',
      // type: 'genius'
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
		this.props.handleChange('type','genius')
	}

  login() {
    this.props.history.push('/login')
  }

  onChange(type) {
    // console.log('type',type)
    this.setState({
      type
    })
  }

  // handleChange(key,val) {
  //   this.setState({
  //     [key]: val
  //   })
  // }

  handleSubmit() {
    console.log(this.state);
    const {user,pwd, repeatPwd,type} = this.props.state;
    this.props.register(user,pwd, repeatPwd,type);
  }

  render() {
    const RadioItem = Radio.RadioItem;
    const { type } = this.props.state;
    const toastInfo = (params) => {
      return Toast.offline('Network connection failed !!!', 1);
    }
    return  (
      <div>
        <Logo></Logo>
        <WingBlank>
          {this.props.msg ? <p className="warn-tip">{this.props.msg}</p>: null}
          {this.props.redirectTo? <Redirect to={this.props.redirectTo} /> : null}
          <List>
            <InputItem onChange={v=>this.props.handleChange('user',v)}>用户:</InputItem>
            <InputItem 
              type="password"
              onChange={v=>this.props.handleChange('pwd',v)}>密码:</InputItem>
            <InputItem 
              type="password"
              onChange={v=>this.props.handleChange('repeatPwd',v)}>确认密码:</InputItem>
            <RadioItem checked={type==='genius'} onChange={() => this.props.handleChange('type','genius')}>牛人</RadioItem>
            <RadioItem checked={type==='boss'} onChange={() => this.props.handleChange('type','boss')}>Boss</RadioItem>
          </List>
          <WhiteSpace />
          <Button 
            type="primary"
            onClick={this.handleSubmit}>注册</Button>
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