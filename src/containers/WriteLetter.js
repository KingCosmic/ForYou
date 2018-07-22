import { Container } from 'flux/utils';

import WriteLetter from '../views/WriteLetter';

import LetterStore from '../data/letter/store';
import LetterActions from '../data/letter/actions';

import ChecksStore from '../data/checks/store';
import ChecksActions from '../data/checks/actions';

const getStores = () => [
  LetterStore,
  ChecksStore
]

const getState = () => ({
  letter: LetterStore.getState(),
  setContent: LetterActions.setContent,

  checks: ChecksStore.getState(),
  send: ChecksActions.send,
})

export default Container.createFunctional(WriteLetter, getStores, getState);