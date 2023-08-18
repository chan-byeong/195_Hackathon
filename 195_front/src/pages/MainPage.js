import React,{useEffect,useState} from 'react'
import {useTranslation} from 'react-i18next'
import { Contents } from '../components/mainpage/Contents';
import Nav from '../components/elements/Nav';
import axios from 'axios';
import { baseUrl } from '../styles/common';

function MainPage() {

  const {t , i18n} = useTranslation('main');
  const [info , setInfo] = useState();


  // useEffect( () => {
  //   axios.get(baseUrl+'/api/job_postings',{
  //     headers : {
  //       'Content-Type' : 'application/json',
  //     }
  //   }).then( res => console.log(res));
  // },[])

  return (
    <div style={{width : "1920px"}}>
      <Nav main={true}/>
      <Contents/>
    </div>

  )
}

export default MainPage