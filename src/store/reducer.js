// 合并所有 reducer, 然后返回
import { combineReducers } from "redux";
import { counter } from './index'
import { auth } from './Login'

export default combineReducers({counter,auth});