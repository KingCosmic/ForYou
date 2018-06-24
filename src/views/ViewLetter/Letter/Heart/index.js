import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default class Heart extends Component {
  render() {
    const { open, toggleEnvelope } = this.props;
    return (
      <div className={classNames(styles.heart, { [styles.moveHeart]: open })} onClick={toggleEnvelope} />
    )
  }
}