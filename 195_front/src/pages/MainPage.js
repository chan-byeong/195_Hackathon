import React from 'react'
import {useTranslation} from 'react-i18next'
import { Contents } from '../components/mainpage/Contents';
import Searchbar from '../components/elements/Searchbar';

function MainPage() {

  const {t , i18n} = useTranslation('main');

  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handleLanguage('ko')}>한국어</button>
      <br/>
      <button onClick={() => handleLanguage('en')}>영어</button>
      <br/>
      <button onClick={() => handleLanguage('cn')}>중국어</button>
      <div>{t('add')}</div>
      <div>{t('placeholder.login')}</div>
      <Searchbar/>
      <Contents/>
    </div>

  )
}

export default MainPage