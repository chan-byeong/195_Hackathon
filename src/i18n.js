import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ko , en, cn} from './locales';

//dummy
const resources = {

  en : {
    translation:{
      welcome : 'welcome',
      login : 'login',
    },
  },
  ko : {
    translation:{
      welcome :'환영합니다.',
      login : '로그인',
    }
  }
}

i18n.use(initReactI18next).init({
  resources : {ko,en,cn},
  lng : 'ko',
  interpolation :{
    escapeValue : false,
  }
});

export default i18n;