import React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import actions from '../../products/duck/actions';
import ChangeLangDiv from '../../components/ChangeLangDiv';
import ChangeLangInput from '../../components/ChangeLangInput';
import ChangeLangLabel from '../../components/ChangeLangLabel';
import FlexDiv from '../../components/FlexDiv';

const LanguageSelector = (props) => {
  const { i18n } = useTranslation(['en', 'pl']);
  const changeLanguages = (e) => {
  i18n.changeLanguage(e.target.value)
  props.translate()
    }
    
  return (
    <FlexDiv>
        <ChangeLangDiv onChange={changeLanguages}>
          < ChangeLangInput type="radio" id="en" value="en" name="language" defaultChecked/>
          <ChangeLangLabel for="en">en</ChangeLangLabel>
          <ChangeLangInput type="radio" id="pl" value="pl" name="language"/> 
          <ChangeLangLabel for="pl">pl</ChangeLangLabel>
        </ChangeLangDiv>
      </FlexDiv>
  )
}

const mapDispatchToProps = dispatch => ({
  translate: () => dispatch(actions.translate())
})

export default connect(null, mapDispatchToProps)(LanguageSelector);