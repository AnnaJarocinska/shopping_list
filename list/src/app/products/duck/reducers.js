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

      Object.values(state).forEach(element =>
        element.name === action.itemCategory
          ?
          element.list = [...element.list, action.item]
          :
          element.list = [...element.list]
      )
      return {
        ...state,

        // fruitList:
        //   action.itemCategory === "fruit" ?
        //     {
        //       ...state.fruitList,
        //       list: [...state.fruitList.list, action.item]
        //     } :
        //     { ...state.fruitList },
      }

    case types.RESET_PRODUCTS:

      Object.values(state).forEach(element =>
        element.list = [],
      )
      return {
        ...state,
      }

    case types.DELETE_PRODUCT:

      Object.values(state).forEach(element =>
        
        element.list.includes(action.item)
          ?
          console.log('ZAWIERAAAAAAAAAAAAAAAAAAAAAAAAAA')
        //   element.list = [...element.list.splice(action.id, 1)]
          :
          element.list = [...element.list]
      )

      // for (let value of Object.values(state)) {
      
      //  console.log('vvvvvvvvvvvalue',value.list)
      
      //   value.list.forEach(element => {
      //     console.log('element', element)
      //     console.log('acionnnnItem', action.item)
      //     element === action.item

        
      //   })
      // }
          // element.list.includes(action.item)
          //   &&
          //   state[key].list.splice(action.id, 1)
        // });
      // }
      return {
        ...state,
      }

      // for (let list of Object.keys(state)) {
      //   state[list].forEach(element => {
      //     element.includes(action.item)
      //     &&
      //     state[list].splice(action.id, 1)
      //   });
      // }
      // return {
      //   ...state,
      // }
        
    default:
      return state
  }
}

export default productsReducer;