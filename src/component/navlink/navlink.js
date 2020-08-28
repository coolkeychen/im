import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";

@withRouter
class NavLinkBar extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    const navList = this.props.data.filter(
      item => !item.hide
    )
    const {pathname}  = this.props.location
    // console.log('data',this.props.data)
    // console.log('navList',navList)
    return (
      <TabBar>
        {navList.map(item => (
          <TabBar.Item 
            key={item.path}
            title= {item.text}
            icon = {{ uri: require(`./img/${item.icon}.png`)}}
            selectedIcon = {{ uri: require(`./img/${item.icon}-active.png`)}}
            selected={ item.path === pathname }
            onPress={() => {
              this.props.history.push(item.path)
            }}
          >
          </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

export default NavLinkBar;