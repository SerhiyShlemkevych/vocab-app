import React from "react";
import styled, { injectGlobal } from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import * as selectors from './selectors';
import AppBar from './components/AppBar';

export class BrowsePage extends React.Component {
  render() {

    return (
      <div>
        <AppBar title="Browse" />
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect
)(BrowsePage);
