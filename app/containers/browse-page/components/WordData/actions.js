import {
    INC_WORD_PRIORITY,
    DEC_WORD_PRIORITY
} from './constants';

export const incrementWordPriority = (id) => ({
    type: INC_WORD_PRIORITY,
    id
});

export const decrementWordPriority = (id) => ({
    type: DEC_WORD_PRIORITY,
    id
});
