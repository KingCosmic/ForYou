import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './share.module.css';

export default class ShareLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://kingcosmic.github.io/ForYou/1827398172'
    }
  }

  render() {
    const { send } = this.props;

    return (
      <div className={classNames(styles.container, { [styles.show]: send })}>
        <h1 className={styles.title}>SHARE</h1>
        <h3 className={styles.link}><a className={styles.link} href={this.state.url}>{this.state.url}</a></h3>
        <ul className={styles.list}>
          <li className={styles.option}>Copy</li>
        </ul>
      </div>
    )
  }
}