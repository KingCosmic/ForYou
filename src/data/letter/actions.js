import Dispatcher from '../dispatcher';

import actionTypes from './actionTypes';

export default {
  setContent: (content) => {
    Dispatcher.dispatch({
      type: actionTypes.SET_CONTENT,
      content
    })
  },

  setId: (id) => {
    Dispatcher.dispatch({
      type: actionTypes.SET_ID,
      id
    })
  },

  setLetter: (letter) => {
    Dispatcher.dispatch({
      type: actionTypes.SET_LETTER,
      letter
    })
  }
}