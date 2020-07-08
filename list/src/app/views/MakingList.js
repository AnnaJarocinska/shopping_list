import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ProductsContainer from '../products/components/ProductsContainer';
import ProductsForm from '../products/components/ProductsForm';
import SendingEmailForm from '../email/components/SendingEmailForm';
import Card from '../styles/Card';
import Steps from '../styles/Steps';
import Button from '../styles/Button';
import Container from '../styles/Container';

const MakingList = (props) => {
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
  const isNotEmpty = (element) => {
    return element.list.length !== 0
}
  let listNotEmpty = Object.values(props.products).some(isNotEmpty);

  return (
    <Fragment>
      <Container list>
        <Steps>
          <Link to="/"><i class="fa fa-globe" aria-hidden="true"></i></Link>
        </Steps>
        <Card>
          <Container text>
            <p>{t('appName.label')}</p>
            <ProductsContainer />
          </Container>
        </Card>
        <Container forms>
          <ProductsForm />
          {listNotEmpty && <Button
          next
          normal 
          buttonVisability = {buttonVisability}
          onClick = {changeAddingRecipentVisability}>
          {t('next.label')}
          </Button>}
          <SendingEmailForm visible ={addingRecipentVisability}/>
        </Container>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect( mapStateToProps, null) (MakingList);