import React from 'react'
import { useTranslation } from 'react-i18next'

const Test = () => {
  
  const { t, i18n } = useTranslation();
  return (<>
  <p>{t('fruit.label')}</p>
  <p>{t('vegetable.label')}</p>
  <p>{t('dairy.label')}</p>
  <p>{t('meatAndFish.label')}</p>
  <p>{t('dryGoods.label')}</p>
  <p>{t('householdItems.label')}</p>
  <p>{t('others.label')}</p>
  </>
  )
}

export default Test