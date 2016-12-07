import React, { Component } from 'react';
import { Link } from 'react-router'
import Search from '../Search';

import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className='navbar-brand'><span className='green'>Assuron</span>tify</Link>
            </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Search /></li>
                <li><a href="#">Signin</a></li>
              </ul>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
