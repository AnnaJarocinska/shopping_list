import types from './types';

const INITIAL_STATE = {
    listName: 'others',
    list: [
      'post office'
    ]
  }
  
  
  
  const othersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_OTHER:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_OTHERS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  }

  export default othersReducer;