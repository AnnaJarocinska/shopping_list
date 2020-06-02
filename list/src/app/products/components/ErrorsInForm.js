import React from 'react';

const ErrorsInForm = (props) => {
    return (  
        props.category === "-" && <p>Select a category</p>
      
    );
}
 
export default ErrorsInForm;