import React from 'react';
import classNames from 'classnames';

import styles from './SendButton.module.css';

const sendButton = (props) => {
  const { checks: { canSend }, send } = props;

  return (
    <p className={classNames(styles.button, { [styles.slide]: canSend })}
      onClick={send}
    >
      Send
    </p>
  )
}

export default sendButton;