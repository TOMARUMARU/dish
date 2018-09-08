import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { denormalize } from 'normalizr';
import { RootState } from '../../reducer';
import { favoriteActions } from '../FavoriteList/actions';
import { defaultCardsActions } from '../../entities/cards/action';
import Component, { StateProps, DispatchProp } from './screen.component';
import { cardsSchema } from '../../entities/cards/schema';
import { Card } from '../../entities';

const mapStateToProps = (state: RootState): StateProps => {
  const { isRequesting } = state.screens.storeList;
  const cards: Array<Card | undefined> = denormalize(
    Object.keys(state.entities.cards),
    cardsSchema,
    state.entities
  );
  const { favorites } = state.screens.favoriteList;

  return { isRequesting, cards, favorites };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
  return {
    onFetchDefaultCards: () => dispatch(defaultCardsActions.fetch()),
    addFavoriteCards: (cardIndex: number) =>
      dispatch(favoriteActions.add(cardIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
