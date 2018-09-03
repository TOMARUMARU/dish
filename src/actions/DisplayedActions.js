import {
  CARD_DISPLAYED
}
 from './types';


export const cardDisplayed = ({ id }) => {
  return {
    type: CARD_DISPLAYED,
    payload: { id }
  };
};
