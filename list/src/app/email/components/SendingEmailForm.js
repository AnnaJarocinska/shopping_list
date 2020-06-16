import React, { Fragment } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';



const SendingEmailForm = (props) => {
    const { t } = useTranslation();

    const initialValues = {
        email: '',
        message: '',
    }

    const onSubmit = values => {
        props.add(values.email, values.message)
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
        <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}>      
            <Form>
                <label> Email:
                <Field
                        type='text'
                        name='email'
                        >
                    </Field>
                </label>
                <ErrorMessage name="email" />
                <label>
                {t('message.label')}
                <Field as="textarea"
                    name='message'>
                </Field>
                </label>
                <button type='submit' >{t('addRec.label')}</button>
            </Form>
        </Formik>
        <button 
        onClick={handleResetButton}>{t('resetForm.label')}</button>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    add: (email, message) => dispatch(actions.add(email, message)),
    reset: () => dispatch(actions.reset())
  
})
 
export default connect(null, mapDispatchToProps)(SendingEmailForm)