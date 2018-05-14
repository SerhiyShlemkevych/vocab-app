import React from "react";
import styled, { injectGlobal } from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import * as selectors from './selectors';
import AppBar from './components/AppBar';
import menuWidth from '../main-menu/width';
import { withStyles } from "material-ui/styles";
import reducer from './reducer';
import saga from './saga';
import WordList from './components/WordList';
import Layout from './components/Layout';
import MainButton from './components/MainButton';
import Pagination from './components/Pagination';
import {
  fetchLibrary,
  setPage,
  changeCriterion,
  changeDirection,
  markWordsRevised,
  incrementWordPriority,
  decrementWordPriority
} from './actions';

export class BrowsePage extends React.Component {
  componentDidMount() {
    this.props.fetchLibrary();
  }

  render() {
    const {
      reviseModeEnabled,
      markWordsRevised,
      page,
      setPage,
      changeCriterion,
      changeDirection,
      incrementWordPriority,
      decrementWordPriority,
    } = this.props;
    return (
      <Layout>
        <AppBar
          title="Browse"
          changeCriterion={changeCriterion}
          changeDirection={changeDirection}
          sortCriterion={page.sortCriterion}
          sortDirection={page.sortDirection}
        />
        <WordList items={page.items} 
        onPlusClick={incrementWordPriority} 
        onMinusClick={decrementWordPriority} />
        <Pagination
          maxPage={page.maxPage}
          currentPage={page.currentPage}
          setPage={setPage}
        />
        <MainButton
          icon={
            reviseModeEnabled
              ? 'done'
              : 'add'
          }
          onClick={
            reviseModeEnabled
              ? () => markWordsRevised(page.items)
              : () => console.log(212)
          } />
      </Layout>
    );
  }
};


const mapStateToProps = (state) => ({
  page: selectors.getPage(state),
  reviseModeEnabled: selectors.getReviseModeEnabled(state)
});

const mapDispatchToProps = {
  incrementWordPriority,
  decrementWordPriority,
  markWordsRevised,
  changeDirection,
  changeCriterion,
  fetchLibrary,
  setPage
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const widthReducer = injectReducer({ key: 'browsePage', reducer });
const widthSaga = injectSaga({ key: 'browsePage', saga });


export default compose(
  widthReducer,
  widthSaga,
  withConnect
)(BrowsePage);
