import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import actions from '../duck/actions';
import SendingEmail from './SendingEmail';
import Form from '../../styles/Form';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import Button from '../../styles/Button';
import ErrorInForm from '../../styles/ErrorInForm';

const SendingEmailForm = (props) => {
    const { t } = useTranslation();

    let [sendingEmailVisability, setSendingEmailVisability] = useState(false);
    let [submitLabel, setSubmitLabel] = useState(('addRec.label'));

    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = `${t('require.validate')}`
        }
        else if (!/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i.test(values.email)) {
            errors.email = `${t('format.validate')}`
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            props.add(values.email, values.message);
            resetForm();
            setSendingEmailVisability(true);
            toast.info(`${t('add.succes')}${values.email} 
                ${values.message && t('addMessage.succes')} ${values.message}`,
                { position: toast.POSITION.TOP_CENTER });
            setSubmitLabel(
                submitLabel = t('changeRec.label'));
        }
    })

    const handleResetButton = () => {
        props.reset();
        formik.resetForm();
    }

    return (
        <Fragment>
            {props.visible &&
                <Form onSubmit={formik.handleSubmit}>
                    <Label form htmlFor='email'>{t('email.label')}</Label>
                    <Input
                        id='email'
                        name='email'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    >
                    </Input>
                    {formik.touched.email && formik.errors.email ? <ErrorInForm>{formik.errors.email}</ErrorInForm> : <ErrorInForm/>}
                    <Label form htmlFor='message'>{t('message.label')}</Label>
                    <Input textarea
                        as="textarea"
                        name='message'
                        id='message'
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    >
                    </Input>
                    <Button normal type='submit'> {t(submitLabel)}</Button>
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