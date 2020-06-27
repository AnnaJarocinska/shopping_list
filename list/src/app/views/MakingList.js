import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import Card from '../components/Card';
import TextContainer from '../components/TextContainer';
import Steps from '../components/Steps';
import SendingEmailForm from '../email/components/SendingEmailForm';
import Button from '../components/Button.css';
import FlexContainer from '../components/FlexContainer';
import Form from '../components/Form';

const MakingList = () => {
  let [addingRecipentVisability, setAddingRecipentVisability] = useState(false);
  let [buttonVisability, setButtonVisability] = useState(false);

  const { t } = useTranslation();

  const changeAddingRecipentVisability = () => {  
    setAddingRecipentVisability(
    addingRecipentVisability = !addingRecipentVisability
    )   
    setButtonVisability(
    buttonVisability = !buttonVisability
    )
}
  return (
    <Fragment>
      <FlexContainer>
        <Steps>
          <Link to="/">{t('back.label')}</Link>
        </Steps>
        <Card>
          <TextContainer>
            <p>{t('appName.label')}</p>
            <ProductsContainer />
          </TextContainer>
        </Card>
        <FlexContainer column center>
          <ProductsForm />
          <Button
          next
          normal 
          buttonVisability = {buttonVisability}
          onClick = {changeAddingRecipentVisability}>
            Next 
          </Button>
          <SendingEmailForm visible ={addingRecipentVisability}/>
        </FlexContainer>
      </FlexContainer>
    </Fragment>
  );
}

export default MakingList;