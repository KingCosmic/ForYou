import React from 'react';
import classNames from 'classnames';

import styles from './loader.module.css';

const Loader = (props) => {
  const { loaded } = props;

  return (
    <div className={classNames(styles.container, { [styles.hide]: loaded })}>
      <div className={styles.loader} />
    </div>
  )
}

export default Loader;