import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SendingEmailForm from '../email/components/SendingEmailForm';

const AddingRecipent = () => {
  const { t } = useTranslation();
    return (
        <Fragment>
           <p>{t('addingRecipent.label')}</p>
           <SendingEmailForm />
           <Link to="/making_list">{t('back.label')}</Link>
           <Link to="/sending_list">{t('next.label')}</Link>
        </Fragment>
        
        
      );
}
 
export default AddingRecipent;