import React, { Component } from 'react';

import Letter from './Letter';

import Credits from '../sharedComponents/Credits';

import styles from './WriteLetter.module.css';

export default class WriteLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      
      open: false
    }

    this.toggleEnvelope = this.toggleEnvelope.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  toggleEnvelope() {
    this.setState({ open: !this.state.open });
  }

  setContent(content) {
    this.setState({ content });
  }

  render() {
    const { open } = this.state;

    return (
      <div className={styles.container}>
        <Letter open={open} toggleEnvelope={this.toggleEnvelope} onChange={this.setContent} />

        <Credits />
      </div>
    );
  }
}