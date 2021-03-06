import types from './types';
import i18n from '../../../i18n';

const add = (item, itemCategory) => ({
    type: types.ADD_PRODUCT, item, itemCategory
})

const reset = item => ({
    type: types.RESET_PRODUCTS, item
})

const deleteProduct = (item, id) => ({
    type: types.DELETE_PRODUCT, item, id
})

const translateNames = (names) => ({
    type: types.TRANSLATE_NAMES, names
})

const translate = () => dispatch => {
    let names = [
        i18n.t('fruit.label'),
        i18n.t('vegetable.label'),
        i18n.t('dairy.label'),
        i18n.t('meatAndFish.label'),
        i18n.t('dryGoods.label'),
        i18n.t('householdItems.label'),
        i18n.t('cosmetics.label'),
        i18n.t('babyItems.label'),
        i18n.t('others.label'),
    ]
    dispatch(translateNames(names))
}

export default {
    add,
    reset,
    deleteProduct,
    translate,
    translateNames,
}