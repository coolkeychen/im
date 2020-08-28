import axios from 'axios';

const USER_LIST = 'USER_LIST'

const initState = {
  userlist: []
}

// reducer
function chatuser(state = initState ,action) {
  switch (action.type) {
    case USER_LIST:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

// action
function  userlist(data) {
  return { type: USER_LIST, payload:data}
}

export function getUserList(type) {
  return dispath => {
    axios.get("/user/list?type="+type,)
      .then(res => {
        if (res.data.code ===0) {
          dispath(userlist(res.data.data))
        }
      })
  }
}