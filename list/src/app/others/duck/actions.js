import types from './types';

const add = item => ({
    type: types.ADD_OTHER, item
})

const reset  = item => ({
    type: types.RESET_OTHERS, item
})

export default {
    add,
    reset
}