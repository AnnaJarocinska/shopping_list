import types from './types';

const add = (email, message) => ({
    type: types.ADD_EMAIL, email, message
})

const reset = () => ({
    type: types.RESET_EMAIL 
})

export default {
    add,
    reset
}