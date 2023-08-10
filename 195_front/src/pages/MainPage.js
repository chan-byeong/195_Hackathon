import React from 'react'
import {useTranslation} from 'react-i18next'
import { Contents } from '../components/mainpage/Contents';
import Header from '../components/Header';

function MainPage() {

  const {t , i18n} = useTranslation('main');


  return (
    <div style={{width : "1920px"}}>
      <Header/>
      <Contents/>
    </div>

  )
}

export default MainPage