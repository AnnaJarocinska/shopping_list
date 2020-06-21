import React, { Fragment } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import actions from '../duck/actions';
import Formm from '../../components/Formm';
import Label from '../../components/Label';
import Input from '../../components/Input';
import ButtonN from '../../components/ButtonN';
import FormContainer from '../../components/FormContainer';



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
                    {/* </Field> */}
                    </Input>
               
                <ErrorMessage name="email" />
                <Label>
                {t('message.label')}
                </Label>
                {/* <Input */}
                 <Field 
                 as="textarea"
                    name='message'
                    rows = "7">
                 </Field> 
                {/* </Input> */}
                
                <ButtonN type='submit' >{t('addRec.label')}</ButtonN>
                <ButtonN onClick={handleResetButton}>{t('resetForm.label')}</ButtonN>
            </Formm>
        </Formik>
        </FormContainer>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    add: (email, message) => dispatch(actions.add(email, message)),
    reset: () => dispatch(actions.reset())
  
})
 
export default connect(null, mapDispatchToProps)(SendingEmailForm)