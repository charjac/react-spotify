import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './index.css';

class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    customClass: PropTypes.string
  }

  static defaultProps = {
    text: '',
    action: () => {}
  }

  render() {
    return (
      <div
        className={classNames('Button', this.props.customClass)}
        onClick={ this.props.action }>
        { this.props.text }
      </div>
    );
  }
}

export default Button;
