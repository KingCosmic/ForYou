import React, { Component } from 'react';
import classNames from 'classnames';
import snek from 'snekfetch';

import styles from './share.module.css';

class ShareLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letterSent: false,
      id: null
    }

    this.sendLetter = this.sendLetter.bind(this);
  }

  sendLetter() {
    snek.post('/write')
    .send({
      content: this.props.letter.content
    })
    .then((res) => {
      this.setState({
        id: res.body.data
      })
    })
  }

  render() {
    const { checks: { send } } = this.props;
    const { letterSent, id } = this.state;

    let url = `https://kingcosmic.github.io/ForYou/${id}`;

    if (id === null && send && letterSent === false) {
      this.sendLetter();
    }

    return (
      <div className={classNames(styles.container, { [styles.show]: send })}>
        {
          (id === null) ?
          <div className={styles.loader} />
          :
          <h3 className={styles.link}><a className={styles.link} href={url}>{url}</a></h3>
        }
        { /*
          commented out because atm we dont have a reason for the list
        <ul className={styles.list}>
          <li className={styles.option}>Copy</li>
        </ul> */} 
      </div>
    )
  }
}

export default ShareLetter;