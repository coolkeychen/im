import React from 'react';
import './App.css';
import { addGun,removeGun,addGunAsync } from './store/index'
import { Button } from 'antd-mobile';
import { connect } from "react-redux";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/* const mapStatetoProps = (state) => {
  return { num: state }
}

const actionCreators = { addGun, removeGun, addGunAsync}

App = connect(mapStatetoProps,actionCreators)(App) 
*/


@connect(
  // 你要什么state 放在 props里
  (state) => ({num: state}),
  // 你要什么方法，放在 props 里， 自动 dispath
  { addGun, removeGun, addGunAsync}
)

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子','柱子','王根生']
    }
  }

  componentWillMount() {
    console.log('组件马上就要加载了');
    
  }

  componentDidMount() {
    console.log('组件加载完毕');
    
  }

  addSolder = () => {
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载了')
    // const store = this.props.store;
    // const num = store.getState();
    // const addGun = this.props.addGun;
    // const removeGun = this.props.removeGun;
    // const addGunAsync = this.props.addGunAsync;
    const num = this.props.num;
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <Button type="primary" onClick={this.addSolder}>新兵入伍</Button>
        <ul>
          {this.state.solders.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <Button type="primary" onClick={this.props.addGun}>申请机枪</Button>
        <Button type="warning" onClick={this.props.removeGun}>上交机枪</Button>
        <Button type="warning" onClick={this.props.addGunAsync}>拖两天再给</Button>
      </div>
    )
  }
}


export default App;
