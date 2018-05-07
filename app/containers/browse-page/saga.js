import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchLibraryStart,
    fetchLibrarySuccess,
    libraryUpdated
} from './actions';
import {
    FETCH_LIBRARY
} from './constants';
import { orderBy } from 'lodash';

function* fetchLibrary() {
    yield put(fetchLibraryStart());
    const { data: library } = yield call(() => axios.get('/api/library'));
    yield put(fetchLibrarySuccess(library));
    yield put(libraryUpdated({
        library,
        sorted: {
            DESC: {
                PRIORITY: orderBy(library, ['priority'], ['desc']),
                ADD_DATE: orderBy(library, ['id'], ['desc']),
                REVISED_DATE: orderBy(library, ['revisedDate'], ['desc']),
                RANDOM: orderBy(library, ['randomOrder'], ['desc']),
            },
            ASC: {
                PRIORITY: orderBy(library, ['priority'], ['asc']),
                ADD_DATE: orderBy(library, ['id'], ['asc']),
                REVISED_DATE: orderBy(library, ['revisedDate'], ['asc']),
                RANDOM: orderBy(library, ['randomOrder'], ['asc']),
            },
        }
    }));
}

export default function* () {
    yield takeLatest(FETCH_LIBRARY, fetchLibrary);
};
