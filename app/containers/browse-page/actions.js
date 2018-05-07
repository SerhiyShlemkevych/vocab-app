import {
    FETCH_LIBRARY,
    FETCH_LIBRARY_START,
    FETCH_LIBRARY_SUCCESS,
    SET_PAGE,
    CHANGE_CRITERION,
    CHANGE_DIRECTION,
    LIBRARY_UPDATED
} from './constants';

export const fetchLibrary = () => ({
    type: FETCH_LIBRARY
});

export const fetchLibraryStart = () => ({
    type: FETCH_LIBRARY_START
});

export const fetchLibrarySuccess = (library) => ({
    type: FETCH_LIBRARY_SUCCESS,
    library
});

export const setPage = (page) => ({
    type: SET_PAGE,
    page
});

export const changeCriterion  = (event) => ({
    type: CHANGE_CRITERION,
    criterion: event.target.value
});

export const changeDirection  = (event) => ({
    type: CHANGE_DIRECTION,
    direction: event.target.value
});

export const libraryUpdated = (payload) => ({
    type: LIBRARY_UPDATED,
    payload
});