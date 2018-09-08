import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../reducer';
import { defaultCardsActions, addFavoriteCards } from '../../action';
import Component, { StateProps, DispatchProp } from './screen.component';

const mapStateToProps = (state: RootState): StateProps => {
  const { isRequesting, datas } = state.screens.storeList;
  const { favorites } = state.screens.favoriteList;

  return { isRequesting, datas, favorites };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
  return {
    onFetchDefaultCards: () => dispatch(defaultCardsActions.fetch()),
    addFavoriteCards: (cardIndex: number) =>
      dispatch(addFavoriteCards(cardIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
