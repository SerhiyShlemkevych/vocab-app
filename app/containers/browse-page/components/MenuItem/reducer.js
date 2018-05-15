import {
    TOGGLE_REVISE_MODE,
    TOGGLE_FOREIGN_VISIBILITY,
    TOGGLE_NATIVE_VISIBILITY
} from './constants';

const reducer = (
    state = {
        reviseModeEnabled: false,
        nativeVisible: true,
        foreignVisible: true
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_REVISE_MODE:
            return {
                ...state,
                reviseModeEnabled: !state.reviseModeEnabled
            };
        case TOGGLE_FOREIGN_VISIBILITY:
            return {
                ...state,
                foreignVisible: !state.foreignVisible
            };
        case TOGGLE_NATIVE_VISIBILITY:
            return {
                ...state,
                nativeVisible: !state.nativeVisible
            };
        default: return state;
    }
};

export default reducer;
