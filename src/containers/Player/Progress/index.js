import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './index.css'

const Progress = ({
  min = 0,
  max = 100,
  limit = 0,
  value = 0,
  mouseUp = () => {},
  mouseDown = () => {},
  slide = () => {},
  mouseMove = () => {},
  customClass = null
}) =>

<div className={ classNames(styles.root, {
  [customClass]: customClass
})}>
    <div
      className={ styles.progress }
      style={{
        width: `${((value / max) * 100)}%`
      }}>
    </div>
    <input
      type="range"
      className={ styles.range }
      min={ min }
      max={ max }
      value={ value }
      onChange={(e) => {
        const value = parseInt(e.target.value, 10);
        const newValue = value > limit ? limit : value;
        slide(newValue);
      }}
      onMouseDown={(e) => {
        const value = parseInt(e.target.value, 10);
        const newValue = value > limit ? limit : value;
        mouseDown(newValue);
      }}
      onMouseUp={(e) => {
        const value = parseInt(e.target.value, 10);
        const newValue = value > limit ? limit : value;
        console.log('value', value)
        mouseUp(newValue);
      }}
      onMouseMove={(e) => {
        mouseMove(e);
      }}
    />
</div>

Progress.propTypes = {
    mouseUp: PropTypes.func,
    mouseDown: PropTypes.func,
    slide: PropTypes.func,
    mouseMove: PropTypes.func,
    mouseOver: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    limit: PropTypes.number,
    value: PropTypes.number,
    customClass: PropTypes.string
}

export default Progress
