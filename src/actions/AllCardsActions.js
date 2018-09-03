import axios from 'axios';
import {
  DEFAULT_CARDS
}
 from './types';


export const defaultCards = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/dish')
      .then(response => DfalutData(dispatch, response));
  };
};

const DfalutData = (dispatch, datas) => {
  dispatch({
    type: DEFAULT_CARDS,
    payload: datas
  });
};
