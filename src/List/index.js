import React, { Component, PropTypes } from 'react';
import './index.css';

class List extends Component {

  static propTypes = {
    loadTrack: PropTypes.func,
    tracks: PropTypes.array
  }

  static defaultProps = {
    loadTrack: () => {},
    tracks: []
  }

  render() {
    return (
      <div className="List">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Artiste</th>
              <th>Album</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tracks.map((track, key) => {
              return (
                <tr key={ key } className={'item'} onClick={ () => this.props.loadTrack(track.url) }>
                  <td>{ key }</td>
                  <td>{ track.title }</td>
                  <td>{ track.author }</td>
                  <td>{ track.album }</td>
                  <td>{ track.duration }</td>
                </tr>
              )
            })}


          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
