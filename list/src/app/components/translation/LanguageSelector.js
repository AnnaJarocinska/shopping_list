import React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import actions from '../../products/duck/actions';

const LanguageSelector = (props) => {

  const { i18n } = useTranslation(['en', 'pl']);

  const changeLanguages = (e) => {
  i18n.changeLanguage(e.target.value)
  props.translate(e.target.value)
    }
    
  return (
    <div onChange={changeLanguages}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="pl" name="language" /> Polski
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  translate: (lang) => dispatch(actions.translate(lang))
})

export default connect(null, mapDispatchToProps)(LanguageSelector);