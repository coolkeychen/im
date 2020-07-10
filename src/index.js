import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk'
import { BrowserRouter, Route, Link ,Redirect,Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { counter } from './store/index'


const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.detToolsExtenstion?window.detToolsExtenstion(): f=>f
));

function erying() {
  return <h2>二营</h2>
}

function qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
  return <h2>测试组件{this.props.match.params.location}</h2>
  }
}

ReactDOM.render(
  (<Provider store = {store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>一营</Link>
          </li>
          <li>
            <Link to='/erying'>二营</Link>
          </li>
          <li>
          <Link to='/qibinglian'>二营</Link>
          </li>
        </ul>
        {/* <Redirect to='/qibinglin'></Redirect> */}
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/erying" component={erying}></Route>
          <Route path="/qibinglian" component={qibinglian}></Route>
          
        </Switch>
        <Route path="/:location" component={Test}></Route>
      {/* <App />  */}
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
