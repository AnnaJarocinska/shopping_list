import React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import actions from '../../products/duck/actions';
import ChangeLangDiv from '../../components/ChangeLangDiv';
import ChangeLangInput from '../../components/ChangeLangInput';
import ChangeLangLabel from '../../components/ChangeLangLabel';

const LanguageSelector = (props) => {

  const { i18n } = useTranslation(['en', 'pl']);

  const changeLanguages = (e) => {
  i18n.changeLanguage(e.target.value)
  props.translate()
    }
    
  return (
    <ChangeLangDiv onChange={changeLanguages}>
    
      
      {/* <ChangeLangLabel> */}
        {/* <label> */}
        {/* en */}
        < ChangeLangInput type="radio" id="id1" value="en" name="language" defaultChecked/>
        {/* </label> */}
        <ChangeLangLabel for="id1"/>en
     
     
      {/* <ChangeLangLabel> */}
      {/* <label> */}
        {/* pl */}
        <ChangeLangInput type="radio" id="id2" value="pl" name="language"/> 
        {/* </label> */}
        {/* </ChangeLangLabel> */}
        <ChangeLangLabel for="id2"/>pl
      </ChangeLangDiv>
    


  )
}

const mapDispatchToProps = dispatch => ({
  translate: () => dispatch(actions.translate())
})

export default connect(null, mapDispatchToProps)(LanguageSelector);