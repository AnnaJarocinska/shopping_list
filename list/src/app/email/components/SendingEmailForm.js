import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';
import Form from '../../components/Form';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button.css';
import SendingEmail from './SendingEmail';


const SendingEmailForm = (props) => {
    let [sendingEmailVisability, setSendingEmailVisability] = useState(false);

    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = 'This field is required'
        }
        else if (!/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i.test(values.email)) {
            errors.email = 'Invalid format'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues : {
            email: '',
            message: '',
        },
        validate, 
        onSubmit: (values, {resetForm}) => {
            props.add(values.email, values.message);
            resetForm();
            setSendingEmailVisability(
                sendingEmailVisability = !sendingEmailVisability);
            }
    })

    const { t } = useTranslation();

    const handleResetButton = () => {
        props.reset(); 
        formik.resetForm();   
    }

    return (
        <Fragment>
            {props.visible &&
                    <Form onSubmit={formik.handleSubmit}>
                        <Label htmlFor='email'> Email: </Label>
                        <Input
                            id='email'
                            name='email'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        >
                        </Input>
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <Label htmlFor='message'>{t('message.label')}</Label>
                        <Input
                            as="textarea"
                            name='message'
                            rows="7"
                            id='message'
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        >
                        </Input>
                        <Button normal type='submit'> {t('addRec.label')}</Button>
                        <Button normal type='button' onClick={handleResetButton}> {t('resetForm.label')} </Button>
                    </Form>
            } 
            {sendingEmailVisability && <SendingEmail />} 
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    add: (email, message) => dispatch(actions.add(email, message)),
    reset: () => dispatch(actions.reset()),
})

export default connect(null, mapDispatchToProps)(SendingEmailForm);