import types from './types';

const add = (item, itemCategory, isImportant) => ({
    type: types.ADD_PRODUCT, item,  itemCategory, isImportant
})

const reset = item => ({
    type: types.RESET_PRODUCTS, item
})

const deleteProduct = (item, id) => ({
    type: types.DELETE_PRODUCT, item, id
})

const changeLang = (lang) => ({
    type: types.CHANGE_LANG, lang
})

export default {
    add,
    reset,
    deleteProduct,
    changeLang,
}