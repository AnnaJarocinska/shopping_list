import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import Card from '../components/Card';
import TextContainer from '../components/TextContainer';
import FlexDiv from '../components/FlexDiv';
import Steps from '../components/Steps';
import SendingEmail from '../email/components/SendingEmail';
import SendingEmailForm from '../email/components/SendingEmailForm';
import Forms from '../components/Forms';
import ButtonN from '../components/ButtonN';

const MakingList = () => {
  let [addingRecipentVisability, setAddingRecipentVisability] = useState(false);
  let [buttonVisability, setButtonVisability] = useState(false);
  const { t } = useTranslation();

  const changeAddingRecipentVisability = () => {  
    setAddingRecipentVisability(
    addingRecipentVisability = !addingRecipentVisability
);   
 setButtonVisability(
  buttonVisability = !buttonVisability
)

}
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
          <ButtonN buttonVisability = {buttonVisability}
          onClick = {changeAddingRecipentVisability}>Next</ButtonN>
          <SendingEmailForm visible ={addingRecipentVisability}/>
          
        </Forms>
      </FlexDiv>
    </Fragment>
  );
}

export default MakingList;