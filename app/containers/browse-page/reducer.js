import { combineReducers } from 'redux';
import { orderBy, zipObject } from 'lodash';
import {
    FETCH_LIBRARY_SUCCESS,
    SET_PAGE,
    CHANGE_CRITERION,
    CHANGE_DIRECTION,
    MARK_WORDS_REVISED
} from './constants';

const sortMap = {
    ADD_DATE: 'id',
    REV_DATE: 'revisedDate',
    PRIORITY: 'priority',
    RANDOM: 'randomPosition'
};

const updateLibrary = (raw) => {
    const res = {
        byId: zipObject(raw.map(i => i.id), raw),
        sorted: {
            ADD_DATE: {
                asc: orderBy(raw, [sortMap.ADD_DATE], ['asc']).map(i => i.id)
            },
            REV_DATE: {
                asc: orderBy(raw, [sortMap.REV_DATE], ['asc']).map(i => i.id)
            },
            PRIORITY: {
                asc: orderBy(raw, [sortMap.PRIORITY], ['asc']).map(i => i.id)
            },
            RANDOM: {
                asc: orderBy(raw, [sortMap.RANDOM], ['asc']).map(i => i.id)
            },
        }
    };
    res.sorted.ADD_DATE.desc = res.sorted.ADD_DATE.asc.slice(0).reverse();
    res.sorted.REV_DATE.desc = res.sorted.REV_DATE.asc.slice(0).reverse();
    res.sorted.PRIORITY.desc = res.sorted.PRIORITY.asc.slice(0).reverse();
    res.sorted.RANDOM.desc = res.sorted.RANDOM.asc.slice(0).reverse();
    return res;
};

const library = (state = updateLibrary([]), action) => {
    switch (action.type) {
        case FETCH_LIBRARY_SUCCESS:
            return updateLibrary(action.library);
        case MARK_WORDS_REVISED: {
            const now = new Date();
            const updated = {};
            action.ids.forEach(id => {
                updated[id] = {
                    ...state.byId[id],
                    revisedDate: now
                };
            });

            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...updated
                }
            };
        }
        default:
            return state;
    }
};

const pagination = (state = {
    currentPage: 1,
    maxPage: 1,
    sortCriterion: 'ADD_DATE',
    sortDirection: 'desc',
}, action) => {
    switch (action.type) {
        case CHANGE_DIRECTION:
            return {
                ...state,
                sortDirection: action.direction
            };
        case CHANGE_CRITERION:
            return {
                ...state,
                sortCriterion: action.criterion
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        default: return state;
    }
};

export default combineReducers({
    library,
    pagination
});
