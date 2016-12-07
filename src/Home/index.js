import React, { Component } from 'react';
import Slideshow from '../Slideshow';
import List from '../List';
import Player from '../Player'
import Button from '../Button'
import './index.css';
import tracks from '../data/tracks'

class Home extends Component {

  loadTrack = (track) => {
    this.setState({
      track: track
    })
  }

  state = {
    track: null
  }

  render() {
    return (
      <div className="Home">
        <Slideshow items={[{url: 'http://www.lebeaubug.fr/wp-content/uploads/2015/08/NTM-19981-1050x595.jpg'}, {url: 'http://images1.laweekly.com/imager/u/745xauto/7317884/nirvana-with-the-lights-out-cover.jpg'}, {url: 'http://media.melty.fr/article-1941593-ratio265_1020-f33759138/daft-punk-get-lucky-random-access-memories.jpg'}]} />
        <div className="container-fluid">
          <div className="page-heading">
            <h2>Découvrir</h2>
            <Button text='Lire la playlist' customClass='buttonHome' />
          </div>
          <List tracks={tracks} loadTrack={ this.loadTrack } />
        </div>
        <div className="bottom">
          <Player track={ this.state.track } />
        </div>
      </div>
    );
  }
}

export default Home;
