import axios from "axios";
import io from 'socket.io-client';

const socket = io('ws://localhost:9093')


const MSG_LIST = 'MSG_LIST'
const MSG_READ = 'MSG_READ'
const MSG_RECV = 'MSG_RECV'

const initState = {
  msgList: [],
  users: [],
  unread: 0,
}

export function chat(state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      const { msgs, userid, users } = action.payload
      return { ...state,msgList: msgs, unread: msgs.filter(v => !v.read && v.to == userid ).length ,users: users}
    case MSG_RECV:
      const n = action.payload.msg.to == action.payload.userid ? 1 : 0;
      return { ...state, msgList: [...state.msgList, action.payload.msg],unread:state.unread + n }
    case MSG_READ:
      const {from,num} = action.payload
      return { ...state, msgList: state.msgList.map(v=> ({ ...v,read: v.from ==from ?true :v.read})),unread: state.unread -num}
    default:
      return state
  }
}

function msgList(msgs,users,userid) {
  return { type:MSG_LIST ,payload: {msgs,users,userid} }
}

function msgRecv(msg,userid) {
  return { type:MSG_RECV ,payload: {msg, userid}}
}

function msgRead(from, to, num ) {
  return { type: MSG_READ, payload: {from, to, num}}
}

export function readMsg(from) {
  return (dispatch, getState) => {
    const userid = getState().user._id
    axios.post('/user/readMsg',{from})
    .then(res => {
      if ( res.data.code ===0 ) {
        dispatch(msgRead({userid,from,num: res.data.num}))
      }
    })
  }
}

export function recvMsg() {
  return (dispatch,getState) => {
    socket.on('recvmsg',function(data) {
      dispatch(msgRecv(data,getState().user._id));
    })
  }
}

export function sendMsg({from,to,msg}) {
  return dispatch => {
    socket.emit('sendmsg',{from,to,msg})
  }
}

export function getMsgList() {
  return (dispatch,getState) => {
    axios.get('/user/getmsglist')
    .then(res => {
      if ( res.data.code ===0 ) {
        // console.log('getState',getState());
        dispatch(msgList(res.data.data,res.data.users,getState().user._id))
      }
    })
  }
}