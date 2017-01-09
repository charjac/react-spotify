import React, { Component } from 'react';
import './index.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default Search;
