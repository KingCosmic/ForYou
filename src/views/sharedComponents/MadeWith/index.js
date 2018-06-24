import React, { Component } from 'react';

import styles from './credits.module.css';

export default class MadeWith extends Component {
  render() {
    return (
      <h3 className={styles.credits}>
        Made With <span className={styles.heart}>❤</span> By KingCosmic
      </h3>
    )
  }
}