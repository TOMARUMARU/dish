import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../reducer';
import { fetchDefaultCards, favoriteCards } from '../../actions';
import Component, { StateProps, DispatchProp } from './screen.component';

const mapStateToProps = (state: RootState): StateProps => {
  const { isRequesting } = state.screens.storeList;
  const { datas } = state.screens.storeList;
  // const favorites = state.favoriteCardIds;

  return { datas, isRequesting };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
  return {
    onFetchDefaultCards: () => dispatch(fetchDefaultCards())
    // favoriteCards: () => dispatch(favoriteCards())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
