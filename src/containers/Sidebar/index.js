import React, { PureComponent, PropTypes } from 'react'

import { playTrack } from 'actions/player'

import styles from './index.css'

class Sidebar extends PureComponent {
  static propTypes = {
    playlist: PropTypes.array,
    playTrack: PropTypes.func
  }

  render() {
    return (
      <div className={styles.Sidebar}>
        <h6 className={styles.title}>Playlist</h6>
      </div>
    )
  }
}

export default Sidebar
