import React, {Fragment} from 'react';
import { useTranslation } from 'react-i18next';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';

const MakingList = () => {
  const { t } = useTranslation();
    return (
        <Fragment>
            <p>{t('makingList.label')}</p>
            <ProductsContainer />
            <ProductsForm />
        </Fragment>
      );
}
 
export default MakingList;