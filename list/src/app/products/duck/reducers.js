import types from './types';
import produce from 'immer';

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

const productsReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_PRODUCT:
        Object.values(draft).forEach(element => element.name === action.itemCategory ?
          element.list = [...element.list, action.item] : element.list = [...element.list])
        break;

      case types.RESET_PRODUCTS:
        Object.values(draft).forEach(element => element.list = [])
        break;

      case types.DELETE_PRODUCT:
        Object.values(draft).forEach(element => element.list.includes(action.item)
          &&
          { ...element.list.splice(action.id, 1) })
        break;

      case types.CHANGE_LANG:
         for (let i = 0; i < action.lang.length; i++) {
          Object.values(draft)[i].name = action.lang[i]
         }
        break;

      default:
        return draft
    }
  })

export default productsReducer;