import types from './types';

const INITIAL_STATE = {

  email: '',
  message: ''
}

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMAIL:
      return {
        ...state,
        email: action.email,
        message: action.message,
      }

      case types.RESET_EMAIL:
      return {
        ...state,
        email: '',
        message: '',
      }

    default:
      return state
  }
}

export default emailReducer;