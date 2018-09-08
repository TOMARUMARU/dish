export interface State {
  isRequesting: boolean;
  datas: {};
  favorites: number[];
}

const INITIAL_STATE: State = {
  isRequesting: false,
  datas: '',
  favorites: []
};

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: [] }
) => {
  switch (action.type) {
    case 'FETCH_DEFAULT_CARDS':
      return { ...state, isRequesting: true };
    case 'FETCH_CARD_SUCCESS':
      return { ...state, isRequesting: false, datas: action.payload };
    case 'ADD_FAVORITE_CARDS':
      return { ...state };
    default:
      return state;
  }
};
