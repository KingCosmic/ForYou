import React, { Component } from 'react';

import Letter from './Letter';
import Share from './Share';

import MadeWith from '../sharedComponents/MadeWith';

import styles from './WriteLetter.module.css';

export default class WriteLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      canSend: false,

      send: false
    }

    this.setContent = this.setContent.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
  }

  setContent(content) {
    this.setState({
      content,
      canSend: (content === '') ? false : true
    });
  }

  sendLetter() {
    this.setState({
      send: true,
      canSend: false
    })
  }

  render() {
    const { canSend, send } = this.state;

    return (
      <div className={styles.container}>
        <Letter onChange={this.setContent} send={send} canSend={canSend} sendLetter={this.sendLetter} />
        <Share send={send} />

        <MadeWith />
      </div>
    );
  }
}