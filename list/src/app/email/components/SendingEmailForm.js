import React, { Fragment, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';
import Formm from '../../components/Formm';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button.css';
import FormContainer from '../../components/FormContainer';
import SendingEmail from './SendingEmail';


const SendingEmailForm = (props) => {
    let [sendingEmailVisability, setSendingEmailVisability] = useState(false);

    const { t } = useTranslation();

    const initialValues = {
        email: '',
        message: '',
    }

    const onSubmit = values => {
        props.add(values.email, values.message);
        console.log('submitttttttttttttttttttttttttttttttttt')
        setSendingEmailVisability(
            sendingEmailVisability = !sendingEmailVisability
        ); 

    }

    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = 'This field is required'
        }
        else if (!/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i.test(values.email)) {
            errors.email = 'Invalid format'
        }

        return errors

    }
    const handleResetButton = () => {
        props.reset();
       
    }

    return (
        <Fragment>
            {props.visible &&
                <FormContainer>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}>
                        <Formm>
                            <Label> Email: </Label>
                            <Input
                                type='text'
                                name='email'
                            >

                            </Input>
                            <ErrorMessage name="email" />
                            <Label>
                                {t('message.label')}
                            </Label>
                            <Field
                                as="textarea"
                                name='message'
                                rows="7">
                            </Field>
                            <Button normal onClick ={onSubmit} type='submit' >{t('addRec.label')}</Button>
                            <Button normal onClick={handleResetButton}>{t('resetForm.label')}</Button>
                        </Formm>
                    </Formik>
                </FormContainer>}
            {sendingEmailVisability && <SendingEmail />}
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    add: (email, message) => dispatch(actions.add(email, message)),
    reset: () => dispatch(actions.reset())

})

export default connect(null, mapDispatchToProps)(SendingEmailForm)