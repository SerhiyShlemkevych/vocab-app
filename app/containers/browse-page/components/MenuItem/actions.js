import {
    TOGGLE_REVISE_MODE,
    TOGGLE_FOREIGN_VISIBILITY,
    TOGGLE_NATIVE_VISIBILITY
} from './constants';

export const toggleReviseMode = () => ({
    type: TOGGLE_REVISE_MODE
});

export const toggleForeignVisibility = () => ({
    type: TOGGLE_FOREIGN_VISIBILITY
});

export const toggleNativeVisibility = () => ({
    type: TOGGLE_NATIVE_VISIBILITY
});
