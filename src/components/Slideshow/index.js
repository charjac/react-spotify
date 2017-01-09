import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

import Arrow from './Arrow'

import styles from './index.css'

class SlideShow extends Component {

  static propTypes = {
    items: PropTypes.array,
    customStyle: PropTypes.string
  }

  state = {
    activeSlide: 0
  }

  next = () => {
    let activeSlide = this.state.activeSlide + 1;

    if (activeSlide >= this.props.items.length) {
      activeSlide = 0;
    }

    this.setState({
      activeSlide
    });
  }

  prev = () => {
    let activeSlide = this.state.activeSlide - 1;

    if (activeSlide < 0) {
      activeSlide = this.props.items.length - 1;
    }

    this.setState({
      activeSlide
    })
  }

  goToSlide = (key) => {
    this.setState({
      activeSlide: key
    });
  }


  render() {


    const {
      items,
      customStyle
    } = this.props

    const {
      activeSlide
    } = this.state

    return (
      <div
        ref='container'
        className={ classNames(styles.slideshow, customStyle) }>

        <Arrow type='prev' action={ this.prev } />
        <Arrow type='next' action={ this.next } />

        { items.map((item, key) => {
          return (
            <div
              key={ key }
              className={ classNames(styles.slide ,{
                [styles.activeSlide]: key === activeSlide
              }) }>
              <img
                className={ styles.image }
                src={ item.url }
                alt='' />
              adasd
            </div>
          )
        })}

        <div className={ styles.controls }>
          { items.map((item, key) => {
            return(
              <div
                key={ key }
                onClick={ () => this.goToSlide(key) }
                className={ classNames(styles.control, {
                  [styles.activeControl]: key === activeSlide
                })}></div>
              )
            })}
          </div>



        </div>
      )
    }
  }

  export default SlideShow
