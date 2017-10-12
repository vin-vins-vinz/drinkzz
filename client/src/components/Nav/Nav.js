
// const Nav = () =>
//   <nav className="navbar navbar-inverse navbar-top">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="collapsed navbar-toggle">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" /> <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//         <a href="/" className="navbar-brand">
//           React Reading List
//         </a>
//       </div>
//     </div>
//   </nav>;

// export default Nav;

import React, { Component } from 'react'
import "./Nav.css"
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted>
          <Menu.Item name='empty heart'onClick={this.toggleVisibility}>
          <Icon name='empty heart' />
          </Menu.Item>
          <Link to='/'>
          <Menu.Item name='Home' active={this.activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Item name='Log In' />
          <Menu.Item name='Log Out' />         
        </Menu>
    )
  }
}