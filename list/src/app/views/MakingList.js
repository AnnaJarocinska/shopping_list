import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import Card from '../styles/Card';
import Steps from '../styles/Steps';
import SendingEmailForm from '../email/components/SendingEmailForm';
import Button from '../styles/Button';
import Container from '../styles/Container';

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
      <Container>
        <Steps>
          <Link to="/">{t('back.label')}</Link>
        </Steps>
        <Card>
          <Container text>
            <p>{t('appName.label')}</p>
            <ProductsContainer />
          </Container>
        </Card>
        <Container column center>
          <ProductsForm />
          <Button
          next
          normal 
          buttonVisability = {buttonVisability}
          onClick = {changeAddingRecipentVisability}>
            Next 
          </Button>
          <SendingEmailForm visible ={addingRecipentVisability}/>
        </Container>
      </Container>
    </Fragment>
  );
}

export default MakingList;