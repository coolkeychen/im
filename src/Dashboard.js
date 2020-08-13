import React from 'react';
import { Link, Route,Redirect } from "react-router-dom";
import App from './App';
import { connect } from "react-redux";
import { logout } from "./store/Login"

function erying() {
  return (
    <div>
      <h2>二营</h2>
    </div>
  )
}

function qibinglian() {
  return (
    <div>
      <h2>骑兵连</h2>
    </div>
  )
}

@connect(
  state=>state.auth,
  {logout}
)

class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    const match = this.props.match;
    const redirectTo = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        <h1>独立团</h1>
        {this.props.isAuth? <button onClick={this.props.logout}>注销</button>: null}
        <ul>
          <li>
            <Link to={`${match.url}`}>一营</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>二营</Link>
          </li>
          <li>
            <Link to={`${match.url}/qibinglian`}>骑兵营</Link>
          </li>
        </ul>
        <Route path={`${match.url}`} exact component={App}></Route>
        <Route path={`${match.url}/erying`} component={erying}></Route>
        <Route path={`${match.url}/qibinglian`} component={qibinglian}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectTo
  }
}

export default Dashboard;