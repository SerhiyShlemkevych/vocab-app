import { combineReducers } from 'redux';
import { orderBy } from 'lodash'
import {
    FETCH_LIBRARY_SUCCESS,
    SET_PAGE,
    CHANGE_CRITERION,
    CHANGE_DIRECTION,
    LIBRARY_UPDATED
} from './constants';

const pageSize = 16;

const sortMap = {
    ADD_DATE: 'id',
    REV_DATE: 'revisedDate',
    PRIORITY: 'priority',
    RANDOM: 'randomPosition'
};

const library = (state = [], action) => {
    switch (action.type) {
        case FETCH_LIBRARY_SUCCESS:
            return action.library;
        default:
            return state;
    }
};

const paginate = (allItems, page, pageSize) =>
    allItems.slice(page * pageSize - pageSize,
        page * pageSize);

const pagination = (state = {
    currentPage: 1,
    items: [],
    maxPage: 1,
    sortCriterion: 'ADD_DATE',
    sortDirection: 'DESC',
}, action) => {
    switch (action.type) {
        case CHANGE_DIRECTION: {
            if (!state.sorted) return state;

            return {
                ...state,
                sortDirection: action.direction,
                items: paginate(
                    state.sorted[action.direction][state.sortCriterion],
                    1,
                    pageSize)
            };
        };
        case CHANGE_CRITERION: {
            if (!state.sorted) return state;

            return {
                ...state,
                sortCriterion: action.criterion,
                items: paginate(
                    state.sorted[state.sortDirection][action.criterion],
                    1,
                    pageSize)
            };
        };
        case LIBRARY_UPDATED: {
            const { library, sorted } = action.payload;
            return {
                ...state,
                currentPage: 1,
                items: paginate(
                    sorted[state.sortDirection][state.sortCriterion],
                    state.currentPage,
                    pageSize
                ),
                maxPage: (library.length % pageSize === 0
                    ? library.length / pageSize
                    : Math.floor(library.length / pageSize) + 1),
                sorted
            };
        }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page,
                items: paginate(
                    state.sorted[state.sortDirection][state.sortCriterion],
                    action.page,
                    pageSize
                )
            };
        default: return state;
    }
};

export default combineReducers({
    library,
    pagination
});
