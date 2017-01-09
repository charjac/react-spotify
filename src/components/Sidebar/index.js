import React, { Component } from 'react';
import { Link } from 'react-router'
import './index.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h6 className="title">Ma musique</h6>
        <Link to='/' className='link' activeClassName={ 'active' }>Tous</Link>
        <Link to='/category/rock' className='link' activeClassName={ 'active' }>Rock</Link>
        <Link to='/category/pop' className='link' activeClassName={ 'active' }>Pop</Link>
        <Link to='/category/electro' className='link' activeClassName={ 'active' }>Electro</Link>
        <Link to='/category/latina' className='link' activeClassName={ 'active' }>Latina</Link>
        <Link to='/category/rap' className='link' activeClassName={ 'active' }>Rap</Link>

        <h6 className="title">Playlist</h6>
        <a className="link" href="#">Ma musique</a>
        <a className="link" href="#">2016</a>
      </div>
    );
  }
}

export default Sidebar;
