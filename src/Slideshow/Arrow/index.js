import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

import './index.css'

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
        <div className={ classNames('arrow', {
          'prev': type === 'prev',
          'next': type === 'next'
        }, customStyle) }
        onClick={ action }>
          <div className={ 'content' }>
            <div className={ 'icon' }></div>
          </div>
        </div>
    )
  }

}

export default Arrow
