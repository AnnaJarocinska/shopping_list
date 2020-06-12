import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  
  fruitList: {
    name: 'Fruits',
    namePl: 'Owoce',
    list: ['apples', 'bananas', 'lemon']
  },

  vegetableList: {
    name: 'Vegetables',
    namePl: 'Warzywa',
    list: ['carrot', 'tomato']
  },

  dairyList: {
    name: 'Dairy',
    namePl: 'Nabiał',
    list: ['milk', 'eggs']
  },

  meatAndFishList: {
    name: 'Meat and fish',
    namePl: 'Mięso i ryba',
    list: ['chicken', 'sausages']
  },

  dryGoodsList: {
    name: 'Dry goods',
    namePl: 'Produkty suche',
    list: ['flour', 'rice']
  },

  householdItemsList: {
    name: 'Household items',
    namePl: 'Artykuły gospodarstwa domowego',
    list: ['paper']
  },

  othersList: {
    name: 'Others',
    namePl: 'Inne',
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
        
        if (action.lang === 'pl'){
        Object.values(draft).forEach(element => element.name = element.namePl)
      }
        break;
      default:
        return draft
    }
  })

export default productsReducer;