import actionCreatorFactory from 'typescript-fsa';
import axios from 'axios';
import { DEFAULT_CARDS } from '../../actions/types';

export const fetchDefaultCards = () => {
  return { type: 'FETCH_DEFAULT_CARDS' };
};
