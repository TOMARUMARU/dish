import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../reducer';
import { defaultCardsActions, favoriteActions } from '../../action';
import Component, { StateProps } from './screen.component';

const mapStateToProps = (state: RootState): StateProps => {
  const { datas } = state.screens.storeList;
  const { favorites } = state.screens.favoriteList;

  return { datas, favorites };
};

export default connect(mapStateToProps)(Component);
