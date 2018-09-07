import actionCreatorFactory from 'typescript-fsa';
import axios from 'axios';
import { DEFAULT_CARDS } from '../../actions/types';

// const actionCreator = actionCreatorFactory();

// export const defaultCards = {
//   submit: {} = actionCreator<{datas: {}}>(DEFAULT_CARDS)
// }

// export const defaultCards = () => {
//   return (dispatch: Function) => {
//     axios
//       .get('http://localhost:3000/dish')
//       .then(response => DefalutData(dispatch, response));
//   };
// };

// const DefalutData = (dispatch: Function, datas: {}) => {
//   dispatch({
//     type: DEFAULT_CARDS,
//     payload: datas
//   });
// };

export const fetchDefaultCards = () => {
  return { type: 'FETCH_DEFAULT_CARDS' };
};
