import React from 'react';
import { connect } from "react-redux";
import { login } from "./store/Login"
import { Redirect } from 'react-router-dom';


@connect(
  state=>state.auth,
  {login}
)

class Auth extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashboard"></Redirect>: null}
        <h2>你没有权限，需要登录才能看！</h2>
        <button onClick={this.props.login}>点击登录</button>
      </div>
    )
  }
}

export default Auth;