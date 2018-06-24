import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

const exec = (command, value = null) => document.execCommand(command, false, value);

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.defaultParagraphSeparator = 'div';
    exec('defaultParagraphSeparator', this.defaultParagraphSeparator);

    this.content = React.createRef();

    this.onInput = this.onInput.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  onInput({ target: { firstChild } }) {

    if (firstChild && firstChild.nodeType === 3) {
      exec('formatBlock', `<${this.defaultParagraphSeparator}>`);
    } else if (this.content.current.innerHTML === '<br>') {
      this.content.current.innerHTML = ''
    }

    this.props.onChange(this.content.current.innerHTML);
  }

  onKeydown(event) {
    if (event.key === 'Tab') {
      event.preventDefault(); // this will prevent us from tabbing out of the editor

      //add tab
      exec('insertHTML', '&#009');
    }
  }

  render() {
    const { send } = this.props;
    return ( 
      <div style={{ whiteSpace: 'pre-line' }} className={classNames(styles.paper, { [styles.send]: send })}
        ref={this.content} onInput={this.onInput} onKeyDown={this.onKeydown}
        contentEditable
      />
    )
  }
}