import Dispatcher from '../dispatcher';

import actionTypes from './actionTypes';

export default {
  send: () => {
    Dispatcher.dispatch({
      type: actionTypes.SEND
    })
  }
}