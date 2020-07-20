import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import actions from '../products/duck/actions';
import Input from '../styles/Input';
import Label from '../styles/Label';
import Container from '../styles/Container';

const LanguageSelector = (props) => {
  const { i18n } = useTranslation(['en', 'pl']);
  const changeLanguages = (e) => {
  i18n.changeLanguage(e.target.value)
  props.translate()
    }
    
  return (
    <Container end="true">
        <Container lang="true" onChange={changeLanguages}>
          <Input lang="true" type="radio" id="en" value="en" name="language" defaultChecked/>
          <Label lang="true" htmlFor="en">en</Label>
          <Input lang="true" type="radio" id="pl" value="pl" name="language"/> 
          <Label lang="true" htmlFor="pl">pl</Label>
        </Container>
      </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  translate: () => dispatch(actions.translate())
})

export default connect(null, mapDispatchToProps)(LanguageSelector);