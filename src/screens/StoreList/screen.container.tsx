import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { denormalize } from 'normalizr';
import { RootState } from '../../reducer';
import { CardsActions } from '../../entities/cards/action';
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
  return { isRequesting, cards };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
  return {
    onFetchDefaultCards: () => dispatch(CardsActions.fetch()),
    addFavoriteCards: (cardIndex: number) =>
      dispatch(CardsActions.favorite(cardIndex + 1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
