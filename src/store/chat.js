import axios from "axios";
import io from 'socket.io-client';

const socket = io('ws://localhost:9093')


const MSG_LIST = 'MSG_LIST'
const MSG_READ = 'MSG_READ'
const MSG_REVC = 'MSG_REVC'

const initState = {
  msgList: [],
  unread: 0,
}

export function chat(state = initState, action) {
  switch (action.type) {
    case 'MSG_LIST':
      return { ...state,msgList: action.payload, unread: action.payload.filter(v => !v.read).length }
    default:
      return state
  }
}

function msgList(msgs) {
  return {type:'MSG_LIST',payload:msgs}
}

export function getMsgList() {
  return dispatch => {
    axios.get('/user/getmsglist')
    .then(res => {
      if ( res.data.code ===0 ) {
        dispatch(msgList(res.data.data))
      }
    })
  }
}