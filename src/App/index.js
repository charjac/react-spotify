import React, { Component } from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
            { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
