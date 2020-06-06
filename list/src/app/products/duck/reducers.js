import types from './types';

const INITIAL_STATE = {

  fruitList: {
    name: 'Fruits',
    list: ['apples', 'bananas', 'lemon']
  },

  vegetableList: {
    name: 'Vegetables',
    list: ['carrot', 'tomato']
  },

  dairyList: {
    name: 'Dairy',
    list: ['milk', 'eggs']
  },

  meatAndFishList: {
    name: 'Meat and fish',
    list: ['chicken', 'sausages']
  },

  dryGoodsList: {
    name: 'Dry goods',
    list: ['flour', 'rice']
  },

  householdItemsList: {
    name: 'Household items',
    list: ['paper']
  },

  othersList: {
    name: 'Others',
    list: ['ketchup', 'juice', 'cookies']
  },
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      Object.values(state).forEach(element => element.name === action.itemCategory?
          element.list = [...element.list, action.item] : element.list = [...element.list]
      )
      return {
        ...state,
      }

    case types.RESET_PRODUCTS:
      Object.values(state).forEach(element =>
        element.list = [],
      )
      return {
        ...state,
      }

    case types.DELETE_PRODUCT:
      Object.values(state).forEach(element => element.list.includes(action.item)
          &&
          {...element.list.splice(action.id, 1 )}
      )
      return {
        ...state,
      }

    default:
      return state
  }
}

export default productsReducer;