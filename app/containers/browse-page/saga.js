import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchLibraryStart,
    fetchLibrarySuccess
} from './actions';
import {
    FETCH_LIBRARY,
    MARK_WORDS_REVISED
} from './constants';
import {
    INC_WORD_PRIORITY,
    DEC_WORD_PRIORITY
} from './components/WordData/constants';

function* fetchLibrary() {
    yield put(fetchLibraryStart());
    const { data: library } = yield call(() => axios.get('/api/library'));
    library.forEach(item => {
        item.revisedDate = new Date(item.revisedDate);
        item.date = new Date(item.date);
        item.randomPosition = Math.random();
    });
    yield put(fetchLibrarySuccess(library));
}

function* incrementWordPriority({ id }) {
    yield call(() => axios.post(`/api/library/incWordPriority/${id}`));
}

function* decrementWordPriority({ id }) {
    yield call(() => axios.post(`/api/library/decWordPriority/${id}`));
}

function* markWordsRevised({ ids }) {
    yield call(() => axios.post('/api/library/markWordsRevised', { ids }));
}

export default function* () {
    yield takeLatest(FETCH_LIBRARY, fetchLibrary);
    yield takeEvery(MARK_WORDS_REVISED, markWordsRevised);
    yield takeEvery(INC_WORD_PRIORITY, incrementWordPriority);
    yield takeEvery(DEC_WORD_PRIORITY, decrementWordPriority);
};
