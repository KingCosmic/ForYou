import React, { Component } from 'react';
import classNames from 'classnames';

import Heart from './Heart';
import Paper from './Paper';

import styles from './styles.module.css';

export default class Letter extends Component {
  render() {
    const { toggleEnvelope, open, loaded, content } = this.props
    return (
      <div className={classNames(styles.container, { [styles.recieved]: loaded })}>
        <Heart open={open} toggleEnvelope={toggleEnvelope}/>
        <Paper open={open} content={content} />

        <div className={styles.bottom} />			
        <div className={styles.left} />
        <div className={styles.right} />
        <div className={classNames(styles.top, { [styles.open]: open })} />
      </div>
    );
  }
}