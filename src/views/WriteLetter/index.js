import React from 'react';

import Letter from './Letter';
import Share from './Share';

import MadeWith from '../sharedComponents/MadeWith';

import styles from './WriteLetter.module.css';

const WriteLetter = (props) => {
  return (
    <div className={styles.container}>
      <Letter {...props} />
      <Share {...props} />

      <MadeWith />
    </div>
  );
}

export default WriteLetter;