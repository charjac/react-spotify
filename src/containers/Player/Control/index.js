import React, { Component, PropTypes } from 'react';

import styles from './index.css';

class Control extends Component {

  static propTypes = {
    action: PropTypes.func,
    type: PropTypes.string,
  }

  static defaultProps = {
    action: () => {},
    type: 'play'
  }

  render() {

    return (
      <div className={styles.Control} onClick={ this.props.action }>
        { this.props.type === 'play' &&
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={{marginTop: '7px', marginLeft: '11px'}}>
            <path fill="#FFF" d="M6 4l20 12-20 12z"></path>
          </svg>
        }
        { this.props.type === 'pause' &&
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 32" style={{marginTop: '10px', marginLeft: '10px'}}>
            <path fill="#FFF" d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
          </svg>
        }
      </div>
    );
  }
}

export default Control;
