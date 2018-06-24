import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './SendButton.module.css';

export default class SendButton extends Component {
  render() {
    const { canSend, sendLetter } = this.props;
    return (
      <h3 className={classNames(styles.button, { [styles.slide]: canSend })}
        onClick={sendLetter}
      >
        Send
      </h3>
    )
  }
}