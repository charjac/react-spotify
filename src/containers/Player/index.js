import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Progress from './Progress'
import Control from './Control'

import styles from './index.css'

@connect(
  (state) => ({
    track: state.player.selectedTrack
  })
)
class Player extends Component {

  static propTypes = {
    track: PropTypes.string,
  }

  static defaultProps = {
    track: null
  }

  state = {
    playing: true,
    progress: 0,
    duration: 0
  }

  audio = null
  interval = null

  formatSeconds = (secs) => {

    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = secs - (hours * 3600) - (minutes * 60);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`
  }

  load = (track) => {
    this.audio.src = track;
    this.audio.load();
    this.initProgressInterval()
    this.play();
  }

  slide = (seek) => {
    this.clearProgressInterval();
    this.pause();
    this.setState({
      progress: seek
    });
  }

  play = () => {
    this.audio.play();
    this.setState({
      playing: true
    });
  }

  pause = () => {
    this.audio.pause();
    this.setState({
      playing: false
    });
  }

  seek = (seek) => {
    this.slide(seek);
    this.initProgressInterval()
    this.audio.currentTime = seek;
    this.play();
  }

  handleCanPlay = () => {
    this.setState({
      duration: Math.round(this.audio.duration)
    })
  }

  initProgressInterval = () => {
    this.clearProgressInterval()
    this.interval = setInterval(() => {
      this.setState({
        progress: Math.round(this.audio.currentTime),
        duration: Math.round(this.audio.duration)
      });
    }, 1000);
  }

  clearProgressInterval = () => {
    clearInterval(this.interval);
    this.interval = null;
  }

  componentWillReceiveProps(nextProps) {
    this.audio = this.refs['audio'];
    this.load(nextProps.track);
  }

  componentWillUnMount() {
    this.clearProgressInterval()
  }

  render() {

    const secondProgress = this.formatSeconds(this.state.progress)
    const secondDuration = this.formatSeconds(this.state.duration)

    return (
      <div className={styles.Player}>
        <audio ref='audio' className={styles.audio}/>

        <Progress
          slide={ this.slide }
          mouseUp={ this.seek }
          value={ this.state.progress }
          max={ this.state.duration }
          limit={ this.state.duration } />

        <div className={classNames(styles.second, styles.left)}> {secondProgress} </div>
        <div className={classNames(styles.second, styles.right)}> {secondDuration} </div>

        <Control
          type={ this.state.playing ? 'pause' : 'play' }
          action={ this.state.playing ? this.pause : this.play }
          rootStyle={ styles.control } />

      </div>
    );
  }
}

export default Player;
