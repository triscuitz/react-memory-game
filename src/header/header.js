import React, { Component } from 'react';
import './header.css';
import logo from '../burger-logo.png';


class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='header'>
          <img src={logo} className="logo" alt="logo" />
            <h1 className="title">Bob&#39;s Burgers Memory Game</h1>
        </div>
    );
  }
}

export default Header;
