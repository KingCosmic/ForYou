import React, { Component } from 'react';
import classNames from 'classnames';

import renderHTML from 'react-render-html';

import styles from './styles.module.css';

export default class Paper extends Component {
  render() {
    const { open, content } = this.props;

    return ( 
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={classNames(styles.paper, { [styles.pull]: open })}
      >
        {renderHTML(content)}
      </div>
    )
  }
}