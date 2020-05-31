import React, {Fragment} from 'react';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';

const MakingList = () => {
    return (
        <Fragment>
        <p>Making list</p>
        <ProductsContainer />
        <ProductsForm />
        </Fragment>
      );
}
 
export default MakingList;