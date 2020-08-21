import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';

/**
 * 获取用户信息
 * 是否登录
 * 现在的 url 地址 login 是不需要跳转
 * 用户的type 身份是 boss 还是 牛人
 * 用户是否完善信息（选择头像，个人简历）
 */

 @withRouter
class Authroute extends Component {
  componentDidMount() {
    const publicList = ['/login','/register'];
    const pathname  = this.props.location.pathname;
    if (publicList.indexOf(pathname)>-1) {
			return null
		}
    axios.get('/user/info')
    .then(res=>{
      console.log('res',res)
      if (res.status ===200) {
        if (res.data.code === 0) {

        } else {
          this.props.history.push('/login')
        }
      }
    })
  }
  render() {
    return (
      <div>
        <p>你好呀！！</p>
      </div>
    );
  }
}

export default Authroute;