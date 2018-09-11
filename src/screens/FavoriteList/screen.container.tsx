import { connect } from 'react-redux';
import { RootState } from '../../reducer';
import Component, { StateProps } from './screen.component';
import { cardsSchema } from '../../entities/cards/schema';
import { Card } from '../../entities';
import { denormalize } from 'normalizr';

const mapStateToProps = (state: RootState): StateProps => {
  const cards: Array<Card> = denormalize(
    Object.keys(state.entities.datas.cards),
    cardsSchema,
    state.entities.datas
  );
  return { cards };
};

export default connect(mapStateToProps)(Component);
