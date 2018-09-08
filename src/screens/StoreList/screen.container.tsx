import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../reducer';
import { fetchDefaultCards, addFavoriteCards } from '../../actions';
import Component, { StateProps, DispatchProp } from './screen.component';

const mapStateToProps = (state: RootState): StateProps => {
  const { isRequesting, datas, favorites } = state.screens.storeList;

  return { datas, isRequesting, favorites };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProp => {
  return {
    onFetchDefaultCards: () => dispatch(fetchDefaultCards()),
    addFavoriteCards: () => dispatch(addFavoriteCards())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
