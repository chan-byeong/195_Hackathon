import React from 'react'
import "../../styles/mainpage/ContentsStyle.css"
import { useTranslation } from 'react-i18next';


export const Contents = () => {

  const {t} = useTranslation('main');

  return (
<div className="wrapper">
  <div className="main-contianer">
        <h1 className='title'>{t('tips')}</h1>

        <div className="grid-container">
          <div className="item item-1">
            <a href='/#'></a>
          </div>
          <div className="item item-2">
            <a href='/#'></a>
          </div>
          <div className="item item-3">
            <a href='/#'></a>
          </div>
          <div className="item item-4">
            <a href='/#'></a>
          </div>
        </div>
      </div>
</div>


  );
}