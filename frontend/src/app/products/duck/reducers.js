import types from './types';
import produce from 'immer';

const INITIAL_STATE = {

  fruitList: {
    name: 'Fruits',
    category: 'fruits',
    list: []
  },

  vegetableList: {
    name: 'Vegetables',
    category: 'vegetables',
    list: []
  },

  dairyList: {
    name: 'Dairy',
    category: 'dairy',
    list: []
  },

  meatAndFishList: {
    name: 'Meat and fish',
    category: 'meatAndFish',
    list: []
  },

  dryGoodsList: {
    name: 'Dry goods',
    category: 'dryGoods',
    list: []
  },

  householdItemsList: {
    name: 'Household items',
    category: 'householdItems',
    list: []
  },

  cosmeticsList: {
    name: 'Cosmetics',
    category: 'cosmetics',
    list: []
  },

  babyItemsList: {
    name: 'Baby items',
    category: 'babyItems',
    list: []
  },

  othersList: {
    name: 'Others',
    category: 'others',
    list: []
  },
}

const productsReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_PRODUCT:
        Object.values(draft).forEach(element => element.category === action.itemCategory ?
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

      case types.TRANSLATE_NAMES:
        for (let i = 0; i < action.names.length; i++) {
          Object.values(draft)[i].name = action.names[i]
        }
        break;

      default:
        return draft
    }
  })

export default productsReducer;