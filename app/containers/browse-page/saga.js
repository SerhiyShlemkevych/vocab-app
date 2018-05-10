import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchLibraryStart,
    fetchLibrarySuccess
} from './actions';
import {
    FETCH_LIBRARY
} from './constants';

function* fetchLibrary() {
    yield put(fetchLibraryStart());
    const { data: library } = yield call(() => axios.get('/api/library'));
    yield put(fetchLibrarySuccess(library));
}

export default function* () {
    yield takeLatest(FETCH_LIBRARY, fetchLibrary);
};
