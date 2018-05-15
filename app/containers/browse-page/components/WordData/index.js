import React from 'react';
import Word from '../Word';
import { connect } from 'react-redux';
import * as selectors from './selectors';
import * as menuSelectors from '../MenuItem/selectors'
import {
    incrementWordPriority,
    decrementWordPriority
} from './actions';

const now = new Date();
const _30days = 2629746000;

const WordData = ({
    id,
    getData,
    isNativeVisible,
    isForeignVisible,
    incrementWordPriority,
    decrementWordPriority
}) => {
    const data = getData(id);
    const isRevised = now - data.revisedDate < _30days;

    return (
        <Word
            data={data}
            isNativeVisible={isNativeVisible}
            isForeignVisible={isForeignVisible}
            isRevised={isRevised}
            onMinusClick={() => decrementWordPriority(id)}
            onPlusClick={() => incrementWordPriority(id)}
        />
    );
};

const mapDispatchToProps = {
    incrementWordPriority,
    decrementWordPriority
};

const mapStateToProps = (state) => ({
    getData: (id) => selectors.getWord(state, id),
    isNativeVisible: menuSelectors.getNativeVisible(state),
    isForeignVisible: menuSelectors.getForeignVisible(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(WordData);
