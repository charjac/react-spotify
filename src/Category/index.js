import React, { Component, PropTypes } from 'react';
import List from '../List';

import tracks from '../data/tracks'

import './index.css';

class Category extends Component {

  static propTypes = {
    params: PropTypes.object
  }

  render() {

    const tracksFiltered = tracks.filter((track) => track.type === this.props.params.category)

    return (
      <div className="Category">
        <div className="container-fluid">
          <div className="page-heading">
            <h2 className='categoryTitle'>{this.props.params.category}</h2>            
          </div>
          <List tracks={ tracksFiltered } loadTrack={ this.loadTrack }/>
        </div>
      </div>
    );
  }
}

export default Category;
