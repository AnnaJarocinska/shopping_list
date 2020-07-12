import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import actions from '../duck/actions';
import Form from '../../styles/Form';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import Button from '../../styles/Button';
import Select from '../../styles/Select';

const ProductsForm = (props) => {
    const { t } = useTranslation();
    const validate = values => {
        let errors = {}
        if (!values.product) {
            errors.product = `${t('require.validate')}`
        }
        if (values.category === "-") {
            errors.category = `${t('require.validate')}`
        }
        return errors;
    }

    const formik = useFormik({
        initialValues : {
            product: '',
            category: '-',
            importance: false,
        },
        validate, 
        onSubmit: (values, {resetForm}) => {
            values.importance ?
            props.add(values.product.toUpperCase(), values.category)
            :
            props.add(values.product, values.category);
            resetForm();         
            }
    })

    const handleResetClick = () => {
        props.reset();
    }
    return (<>
        <Form onSubmit={formik.handleSubmit}>
            <Label form htmlFor='product'>{t('productInput.label')}</Label>
            <Input
                value={formik.values.product}
                name='product' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
            </Input>
            {formik.touched.product && formik.errors.product ? <div>{formik.errors.product}</div> : null}
            <Label form htmlFor='category'>{t('categorySelect.label')}</Label>
            <Select 
                value={formik.values.category}
                name='category' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                    <option value="-">-</option>
                    <option value="Fruits">{t('fruit.label')}</option>
                    <option value="Vegetables">{t('vegetable.label')}</option>
                    <option value="Dairy">{t('dairy.label')}</option>
                    <option value="Meat and fish">{t('meatAndFish.label')}</option>
                    <option value="Dry goods">{t('dryGoods.label')}</option>
                    <option value="Household items">{t('householdItems.label')}</option>
                    <option value="Others">{t('others.label')}</option>
            </Select>
            {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}
            <div>
                <Label form htmlFor='importance'>{t('important.label')}</Label>
                <Input 
                type="checkbox"
                name='importance'
                checked ={formik.values.importance}
                onChange={formik.handleChange} 
                 />
            </div>
            <Button normal type='submit'>{t('add.label')}</Button>
            <Button normal type='button' onClick={handleResetClick}>{t('resetList.label')}</Button>
        </Form>
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (product, category) => dispatch(actions.add(product, category)),
    reset: () => dispatch(actions.reset())
})

export default connect(null, mapDispatchToProps)(ProductsForm);

