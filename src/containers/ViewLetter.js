import { Container } from 'flux/utils';

import ViewLetter from '../views/ViewLetter';

import LetterStore from '../data/letter/store';
import LetterActions from '../data/letter/actions';


const getStores = () => [
  LetterStore
]

const getState = () => ({
  letter: LetterStore.getState(),
  setContent: LetterActions.setContent
})

export default Container.createFunctional(ViewLetter, getStores, getState);