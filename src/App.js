import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import { Button } from 'antd-mobile';
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
    return (
      <div>
        <Button type="primary" onClick={this.addSolder}>新兵入伍</Button>
        <ul>
          {this.state.solders.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
