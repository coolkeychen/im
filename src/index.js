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
import Dashboard from "./Dashboard";
import reducers from './store/reducer'
import './tools/http'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.detToolsExtenstion?window.detToolsExtenstion(): f=>f
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
      <Switch>
        <Route path="/login" component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
      
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
