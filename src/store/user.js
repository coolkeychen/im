import axios from "axios";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

// reducer
export function user (state = initState ,action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state,msg: '',isAuth: true,...action.payload};
    case ERROR_MSG:
      return {...state,  isAuth: false, msg:action.payload }
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { payload:msg, type: ERROR_MSG}
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}

// actions
export function register(user, pwd ,repeatpwd, type) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入！')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('密码与确认密码必须一致！')
  }
  return dispatch=> {
    axios.post('/user/register',{user, pwd, type})
    .then(res => {
      if (res.state === 200 && res.data.code === 0) {
        return dispatch(registerSuccess({user, pwd, type})) 
      } else {
        return dispatch(errorMsg(res.data.msg))
      }
    })
  }
  
}