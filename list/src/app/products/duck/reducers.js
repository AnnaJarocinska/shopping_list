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

  // dairyList: {
  //   name: 'Dairy',
  //   list: ['milk', 'eggs']
  // },

  // meatAndFishList: {
  //   name: 'Meat and fish',
  //   list: ['chicken', 'sausages']
  // },

  // dryGoodsList: {
  //   name: 'Dry goods',
  //   list: ['flour', 'rice']
  // },

  // householdItemsList: {
  //   name: 'Household items',
  //   list: ['paper']
  // },

  // othersList: {
  //   name: 'Others',
  //   list: ['ketchup', 'juice', 'cookies']
  // },
  }

const productsReducer = (state = INITIAL_STATE, action) => {
  let category = action.itemCategory
  console.log('action.itemCategory', category)
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state, 
        fruitList:
        action.itemCategory === "fruit" ?
        {...state.fruitList,
          list: [...state.fruitList.list, action.item]} :
          {...state.fruitList},

          vegetableList:
          action.itemCategory === "vegetable" ?
          {...state.vegetableList,
            list: [...state.vegetableList.list, action.item]} :
            {...state.vegetableList},
      }

    case types.RESET_PRODUCTS:
      return {
        ...state,
        fruitList: [],
        vegetableList: [],
        dairyList: [],
        meatAndFishList: [],
        dryGoodsList: [],
        householdItemsList: [],
        othersList: [],
      }

    case types.DELETE_PRODUCT:
      
      for (let list of Object.keys(state)) {
        state[list].forEach(element => {
          element.includes(action.item)
          &&
          state[list].splice(action.id, 1)
        });
      }
      return {
        ...state,
      }

    default:
      return state
  }
}

export default productsReducer;