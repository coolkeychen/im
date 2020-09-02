import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk'
import { BrowserRouter, Route, Link ,Redirect,Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
// import { counter } from './store/index'
import Auth from "./Auth";
// import Dashboard from "./Dashboard";
import reducers from './store/reducer'
import Login from "./container/login/login";
import Resgister from "./container/register/register";
import Bossinfo from "./container/bossinfo/bossinfo";
import Geniusinfo from "./container/geniusinfo/geniusinfo";
import AuthRoute from "./component/authroute/authroute";
import Dashboard from "./component/dashboard/dashboard";
import Chat from "./component/chat/chat";
import './tools/http'




const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  // window.detToolsExtenstion?window.detToolsExtenstion(): f=>f
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
// const store = createStore(reducers)

// console.log(store.getState());


// class Test extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props)
//   }
//   render() {
//   return <h2>测试组件{this.props.match.params.location}</h2>
//   }
// }


ReactDOM.render(
  (<Provider store = {store}>
    <BrowserRouter>
      <div>
          <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/bossinfo" component={Bossinfo}></Route>
          <Route path="/geniusinfo" component={Geniusinfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Resgister}></Route>
          <Route path="/chat/:user" component={Chat}></Route>
          <Route component={Dashboard}></Route>
          {/* <Redirect to="/dashboard"></Redirect> */}
        </Switch>
      </div>
      
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
