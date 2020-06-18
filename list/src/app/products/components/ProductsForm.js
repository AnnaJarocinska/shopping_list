import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';
import ErrorsInForm from './ErrorsInForm';

const ProductsForm = (props) => {
    let [categorySelect, setCategorySelect] = useState("-");
    let [productInput, setProductInput] = useState("");
    let [isImportantCheckbox, setIsImportantCheckbox] = useState(false);

    const handleCategorySelectChange = (e) => {
        setCategorySelect(
            categorySelect = e.target.value
        )
    }
    const handleProductInputChange = (e) => {
        setProductInput(
            productInput = e.target.value
        )
    }
    const handleisImportantCheckboxChange = () => {
        setIsImportantCheckbox(
            isImportantCheckbox = !isImportantCheckbox
        )
    }
    const handleResetClick = () => {
        props.reset();
    }
    let errorsInForm = null

    const addProduct = (event) => {
        event.preventDefault();
        props.add(productInput, categorySelect, isImportantCheckbox);
        setCategorySelect(
            categorySelect = "-"
        )
        setProductInput(
            productInput = ""
        )
        errorsInForm = <ErrorsInForm category={categorySelect} />
    }
    const { t } = useTranslation();

    return (<>
        <form onSubmit={addProduct}>
            <label>{t('productInput.label')}</label>
            <input value={productInput} onChange={handleProductInputChange}></input>
            <label>{t('categorySelect.label')}</label>
            <select value={categorySelect} onChange={handleCategorySelectChange}>
                <option value="-">-</option>
                <option value="Fruits">{t('fruit.label')}</option>
                <option value="Vegetables">{t('vegetable.label')}</option>
                <option value="Dairy">{t('dairy.label')}</option>
                <option value="Meat and fish">{t('meatAndFish.label')}</option>
                <option value="Dry goods">{t('dryGoods.label')}</option>
                <option value="Household items">{t('householdItems.label')}</option>
                <option value="Others">{t('others.label')}</option>
            </select>
            <label>{t('important.label')}</label>
            <input type="checkbox" onChange={handleisImportantCheckboxChange} />
            <button type='submit'>{t('add.label')}</button>
            <button onClick={handleResetClick}>{t('resetList.label')}</button>
            <Link to="/">{t('back.label')}</Link>
            <Link to="/adding_recipent">{t('addRecipent.label')}</Link>
        </form>
        {errorsInForm}
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (product, category, importance) => dispatch(actions.add(product, category, importance)),
    reset: () => dispatch(actions.reset())
})

export default connect(null, mapDispatchToProps)(ProductsForm);

