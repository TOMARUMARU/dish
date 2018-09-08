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
    case 'ADD_FAVORITE_CARDS':
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};
