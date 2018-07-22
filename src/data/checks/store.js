import { ReduceStore } from 'flux/utils';
import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
      canSend: false,
      send: false
    }
  }

  reduce(state, action) {
    switch(action.type) {
      case actionTypes.SET_CONTENT:

        return Object.assign({}, state, {
          canSend: (action.content === '') ? false : true
        });

      case actionTypes.SEND:

        return Object.assign({}, state, {
          send: true,
          canSend: false
        });

      default:

        return state;
    }
  }
}

export default new Store();