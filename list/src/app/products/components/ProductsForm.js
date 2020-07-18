import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import actions from '../duck/actions';
import Form from '../../styles/Form';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import Button from '../../styles/Button';
import Select from '../../styles/Select';
import ErrorInForm from '../../styles/ErrorInForm';

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
            console.log(values.category, 'values.category')
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
            {formik.touched.product && formik.errors.product ? <ErrorInForm>{formik.errors.product}</ErrorInForm> : <ErrorInForm/>}
            <Label form htmlFor='category'>{t('categorySelect.label')}</Label>
            <Select 
                value={formik.values.category}
                name='category' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                    <option value='-'>-</option>
                    <option value='fruits'>{t('fruit.label')}</option>
                    <option value='vegetables'>{t('vegetable.label')}</option>
                    <option value='dairy'>{t('dairy.label')}</option>
                    <option value='meatAndFish'>{t('meatAndFish.label')}</option>
                    <option value='dryGoods'>{t('dryGoods.label')}</option>
                    <option value='householdItems'>{t('householdItems.label')}</option>
                    <option value='cosmetics'>{t('cosmetics.label')}</option>
                    <option value='babyItems'>{t('babyItems.label')}</option>
                    <option value='others'>{t('others.label')}</option>
            </Select>
            {formik.touched.category && formik.errors.category ? <ErrorInForm> {formik.errors.category}</ErrorInForm> : <ErrorInForm second/>}
            <div>
                <Label form htmlFor='importance'>{t('important.label')}</Label>
                <Input 
                type='checkbox'
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

