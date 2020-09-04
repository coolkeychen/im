// 合并所有 reducer, 然后返回
import { combineReducers } from "redux";
import { counter } from './index'
import { auth } from './Login'
import { user } from './user'
import { chatuser } from './chatuser'
import { chat } from "./chat";

export default combineReducers({counter,user, chatuser, chat});