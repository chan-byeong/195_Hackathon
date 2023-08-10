import React from 'react'
import "../../styles/mainpage/ContentsStyle.css"
import { useTranslation } from 'react-i18next';


export const Contents = () => {

  const {t} = useTranslation('main');

  return (

    <div className="main-contianer">
      <h1 className='title'>{t('tips')}</h1>

      <div className="grid-container">
        <div className="item item-1">
          <a href='/#'>1</a>
          <p className='item-text'>안녕하세요</p>
          <p className='item-desc'>설명추가하기</p>
        </div>
        <div className="item item-2">
          <a href='/#'>2</a>
        </div>
        <div className="item item-3">
          <a href='/#'>3</a>
        </div>
        <div className="item item-4">
          <a href='/#'>4</a>
        </div>
      </div>

    </div>

  );
}