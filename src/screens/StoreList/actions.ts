import axios from "axios";
import { DEFAULT_CARDS } from "../../actions/types";

export const defaultCards = () => {
  return dispatch => {
    axios
      .get("http://localhost:3000/dish")
      .then(response => DefalutData(dispatch, response));
  };
};

const DefalutData = (dispatch, datas) => {
  dispatch({
    type: DEFAULT_CARDS,
    payload: datas
  });
};
