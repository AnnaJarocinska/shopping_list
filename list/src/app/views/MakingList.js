import React, {Fragment, Suspense} from 'react';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import LanguageSelector from '../components/translation/LanguageSelector';

const MakingList = () => {
    return (
        <Fragment>
          <Suspense fallback={null}>
            <p>Making list</p>
            <LanguageSelector/>
            <ProductsContainer />
            <ProductsForm />
          </Suspense>
        </Fragment>
      );
}
 
export default MakingList;