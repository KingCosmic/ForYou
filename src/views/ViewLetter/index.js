import React, { Component } from 'react';
import snek from 'snekfetch';

import Letter from './Letter';
import Loader from './Loader';

import MadeWith from '../sharedComponents/MadeWith';

import styles from './ViewLetter.module.css';

export default class ViewLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
  
      loaded: false,
      open: false
    }

    this.toggleEnvelope = this.toggleEnvelope.bind(this);
  }

  toggleEnvelope() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    const { letterId } = this.props.match.params;

    snek.get(`/${letterId}`)
    .send()
    .then((res) => {
      this.setState({
        content: res.body.data.content,
        loaded: true
      })
    })
  }

  render() {
    const { open, loaded, content } = this.state;

    return (
      <div className={styles.container}>
        <Letter loaded={loaded} content={content} open={open} toggleEnvelope={this.toggleEnvelope} />
        <Loader loaded={loaded} />

        <MadeWith />
      </div>
    );
  }
}