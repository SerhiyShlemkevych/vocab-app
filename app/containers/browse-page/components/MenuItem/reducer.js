import {
    TOGGLE_REVISE_MODE
} from './constants';

const reducer = (
    state = {
        reviseModeEnabled: false
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_REVISE_MODE:
            return {
                ...state,
                reviseModeEnabled: !state.reviseModeEnabled
            };
        default: return state;
    }
};

export default reducer;
