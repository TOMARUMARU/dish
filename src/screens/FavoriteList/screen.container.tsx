import { connect } from 'react-redux';
import { RootState } from '../../reducer';
import Component, { StateProps } from './screen.component';
import { cardsSchema } from '../../entities/cards/schema';
import { Card } from '../../entities';
import { denormalize } from 'normalizr';

const mapStateToProps = (state: RootState): StateProps => {
  const cards: Array<Card> = denormalize(
    Object.keys(state.entities.cards),
    cardsSchema,
    state.entities
  );
  return { cards };
};

export default connect(mapStateToProps)(Component);
