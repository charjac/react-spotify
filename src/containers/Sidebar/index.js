import React, { PureComponent, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { playTrack } from 'actions/player'

import styles from './index.css'

@connect(
  (state) => ({
    playlist: state.player.playlist
  }),
  (dispatch) => bindActionCreators({ playTrack }, dispatch)
)
class Sidebar extends PureComponent {
  static propTypes = {
    playlist: PropTypes.array,
    playTrack: PropTypes.func
  }

  render() {
    return (
      <div className={styles.Sidebar}>
        <h6 className={styles.title}>Playlist</h6>
        {
          this.props.playlist.length === 0 &&
            <span>No tracks</span>
        }
        {
          this.props.playlist.length > 0 &&
            this.props.playlist.map((track, index) => (
              <button className="btn btn-block btn-default" key={index} onClick={() => this.props.playTrack(track.preview_url)}>
                { track.name }
              </button>
            ))
        }
      </div>
    )
  }
}

export default Sidebar
