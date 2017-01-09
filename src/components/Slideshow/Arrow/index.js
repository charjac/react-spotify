import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

import styles from './index.css'

class Arrow extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    action: PropTypes.func,
    customStyle: PropTypes.string
  }

  render() {

    const {
      type,
      action,
      customStyle
    } = this.props

    return (
        <div className={ classNames(styles.arrow, {
          [styles.prev]: type === 'prev',
          [styles.next]: type === 'next'
        }, customStyle) }
        onClick={ action }>
          <div className={ styles.content }>
            <div className={ styles.icon }></div>
          </div>
        </div>
    )
  }

}

export default Arrow
