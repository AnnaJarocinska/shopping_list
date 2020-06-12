import React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import actions from '../../products/duck/actions';

const LanguageSelector = (props) => {
  const { t, i18n } = useTranslation()
  const changeLanguages = (event) => {
    i18n.changeLanguage(event.target.value)
    props.changeLang(event.target.value)
  }

  return (
    <div onChange={changeLanguages}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="pl" name="language"/> Polski
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeLang:(lang) => dispatch(actions.changeLang(lang))
})

export default connect(null, mapDispatchToProps)(LanguageSelector);