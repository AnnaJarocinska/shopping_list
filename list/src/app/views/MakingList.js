import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import Card from '../components/Card';
import TextContainer from '../components/TextContainer';
import FormContainer from '../components/FormContainer';
import FlexDiv from '../components/FlexDiv';

const MakingList = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <FlexDiv>
        <Card>
          <TextContainer>
            <p>{t('appName.label')}</p>
            <ProductsContainer />
          </TextContainer>
        </Card>
        <FormContainer>
          <ProductsForm />
        </FormContainer>
      </FlexDiv>
    </Fragment>
  );
}

export default MakingList;