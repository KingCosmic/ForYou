import { ReduceStore } from 'flux/utils';
import actionTypes from './actionTypes';
import Dispatcher from '../dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
      id: '',
      content: ''
    }
  }

  reduce(state, action) {
    switch(action.type) {
      case actionTypes.SET_CONTENT:

        return Object.assign({}, state, { content: action.content });

      case actionTypes.SET_ID:

        return Object.assign({}, state, { id: action.id });

      case actionTypes.SET_LETTER:

        return Object.assign({}, state, action.letter);

      default:

        return state;
    }
  }
}

export default new Store();