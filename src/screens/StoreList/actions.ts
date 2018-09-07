import axios from 'axios';
import { DEFAULT_CARDS } from '../../actions/types';

export const defaultCards = () => {
  return (dispatch: Function) => {
    axios
      .get('http://localhost:3000/dish')
      .then(response => DefalutData(dispatch, response));
  };
};

const DefalutData = (dispatch: Function, datas: {}) => {
  dispatch({
    type: DEFAULT_CARDS,
    payload: datas
  });
};
