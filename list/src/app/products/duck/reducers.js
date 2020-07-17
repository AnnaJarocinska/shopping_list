import types from './types';
import produce from 'immer';

const INITIAL_STATE = {

  fruitList: {
    name:'Fruits',
    list: []
  },

  vegetableList: {
    name: 'Vegetables',
    list: []
  },

  dairyList: {
    name: 'Dairy',
    list: []
  },

  meatAndFishList: {
    name: 'Meat and fish',
    list: []
  },

  dryGoodsList: {
    name: 'Dry goods',
    list: []
  },

  householdItemsList: {
    name: 'Household items',
    list: []
  },

  cosmeticsList: {
    name: 'Cosmetics',
    list: []
  },

  babyItemsList: {
    name: 'Baby items',
    list: []
  },

  othersList: {
    name: 'Others',
    list: []
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