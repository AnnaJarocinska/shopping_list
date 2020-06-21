import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';
import ErrorsInForm from './ErrorsInForm';
import Formm from '../../components/Formm';
import Label from '../../components/Label';
import Input from '../../components/Input';
import ButtonN from '../../components/ButtonN';
import Select from '../../components/Select';
import FormContainer from '../../components/FormContainer';

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
    <FormContainer>
        <Formm onSubmit={addProduct}>
            <Label>{t('productInput.label')}</Label>
            <Input value={productInput} onChange={handleProductInputChange}></Input>
            <Label>{t('categorySelect.label')}</Label>
            <Select value={categorySelect} onChange={handleCategorySelectChange}>
                <option value="-">-</option>
                <option value="Fruits">{t('fruit.label')}</option>
                <option value="Vegetables">{t('vegetable.label')}</option>
                <option value="Dairy">{t('dairy.label')}</option>
                <option value="Meat and fish">{t('meatAndFish.label')}</option>
                <option value="Dry goods">{t('dryGoods.label')}</option>
                <option value="Household items">{t('householdItems.label')}</option>
                <option value="Others">{t('others.label')}</option>
            </Select>
            <div>
                <Label>{t('important.label')}</Label>
                <Input type="checkbox" onChange={handleisImportantCheckboxChange} />
            </div>
            <ButtonN type='submit'>{t('add.label')}</ButtonN>
            <ButtonN onClick={handleResetClick}>{t('resetList.label')}</ButtonN>
            {/* <Link to="/">{t('back.label')}</Link>
            <Link to="/adding_recipent">{t('addRecipent.label')}</Link> */}
        </Formm>
        </FormContainer>
        {errorsInForm}
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (product, category, importance) => dispatch(actions.add(product, category, importance)),
    reset: () => dispatch(actions.reset())
})

export default connect(null, mapDispatchToProps)(ProductsForm);

