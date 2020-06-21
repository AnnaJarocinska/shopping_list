import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import Card from '../components/Card';
import TextContainer from '../components/TextContainer';
import FormContainer from '../components/FormContainer';
import FlexDiv from '../components/FlexDiv';
import Steps from '../components/Steps';
import SendingEmailForm from '../email/components/SendingEmailForm';
import Forms from '../components/Forms';

const MakingList = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <FlexDiv>
        <Steps>
          <Link to="/">{t('back.label')}</Link>
          <Link to="/adding_recipent">{t('addRecipent.label')}</Link>
        </Steps>
        <Card>
          <TextContainer>
            <p>{t('appName.label')}</p>
            <ProductsContainer />
          </TextContainer>
        </Card>
        <Forms>
          <ProductsForm />
          <SendingEmailForm/>
        </Forms>
      </FlexDiv>
    </Fragment>
  );
}

export default MakingList;