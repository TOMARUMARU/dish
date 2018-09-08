import { favoriteActions } from '../../action';

export interface State {
  favorites: number[];
}

const INITIAL_STATE: State = {
  favorites: []
};

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case favoriteActions.add.type:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};
