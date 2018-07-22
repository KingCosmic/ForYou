import React, { Component } from 'react';
import axios from 'axios';

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

    axios.get(`https://foryou.glitch.me/${letterId}`)
    .then((res) => {
      this.setState({
        content: res.data.data.content,
        loaded: true
      })
    })
    .catch((error) => {
      console.log(error);
    });
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