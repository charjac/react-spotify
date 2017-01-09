import React, { PureComponent, PropTypes } from 'react'

import styles from './index.css'

class Sidebar extends PureComponent {


  render() {
    return (
      <div className={styles.Sidebar}>
        <h6 className={styles.title}>Playlist</h6>

      </div>
    )
  }
}

export default Sidebar
