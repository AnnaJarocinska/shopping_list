import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import SendingEmailForm from '../email/components/SendingEmailForm';

const AddingRecipent = () => {
    return (
        <Fragment>
           <p>  AddingRecipent</p> 
           <SendingEmailForm />
           <Link to="/making_list">Back to making list</Link>
           <Link to="/sending_list">Sending list</Link>
        </Fragment>
        
        
      );
}
 
export default AddingRecipent;