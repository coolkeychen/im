import React from 'react';
import { Link, Route } from "react-router-dom";
import App from './App';

function erying() {
  return <h2>二营</h2>
}

function qibinglian() {
  return <h2>骑兵连</h2>
}

class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>一营</Link>
          </li>
          <li>
            <Link to='/dashboard/erying'>二营</Link>
          </li>
          <li>
            <Link to='/dashboard/qibinglian'>骑兵营</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/erying' component={erying}></Route>
        <Route path='/dashboard/qibinglian' component={qibinglian}></Route>
      </div>
    )
  }
}

export default Dashboard;