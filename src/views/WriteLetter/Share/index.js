import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './share.module.css';

export default class ShareLetter extends Component {
  render() {
    const { send, compressed } = this.props;

    let url = `https://kingcosmic.github.io/ForYou/${compressed}`;

    return (
      <div className={classNames(styles.container, { [styles.show]: send })}>
        <h3 className={styles.link}><a className={styles.link} href={url}>{url}</a></h3>
        <ul className={styles.list}>
          <li className={styles.option}>Copy</li>
        </ul>
      </div>
    )
  }
}