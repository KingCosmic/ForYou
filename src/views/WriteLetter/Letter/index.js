import React, { Component } from 'react';
import classNames from 'classnames';

import Paper from './Paper';
import SendButton from './SendButton';

import styles from './styles.module.css';

export default class Letter extends Component {
  render() {
    const { checks: { send } } = this.props;

    return (
      <div className={classNames(styles.container, { [styles.send]: send })}>
        <div className={styles.envelope}>
          <Paper {...this.props} />

          <div className={styles.bottom} />			
          <div className={styles.left} />
          <div className={styles.right} />
          <div className={classNames(styles.top, { [styles.close]: send })} />

          <SendButton {...this.props} />
        </div>
      </div>
    );
  }
}