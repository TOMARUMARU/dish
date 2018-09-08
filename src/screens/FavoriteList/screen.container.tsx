import { connect } from 'react-redux';
import { RootState } from '../../reducer';
import Component, { StateProps } from './screen.component';

const mapStateToProps = (state: RootState): StateProps => {
  const { datas } = state.screens.storeList;
  const { favorites } = state.screens.favoriteList;

  return { datas, favorites };
};

export default connect(mapStateToProps)(Component);
