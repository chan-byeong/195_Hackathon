import React,{useEffect,useState} from 'react'
import {useTranslation} from 'react-i18next'
import { Contents } from '../components/mainpage/Contents';
import Nav from '../components/elements/Nav';
import axios from 'axios';

function MainPage() {

  const {t , i18n} = useTranslation('main');
  const [info , setInfo] = useState();

  // useEffect(()=>{
  //   const result = axios.post('https://9c95-210-106-232-238.ngrok-free.app/api/create_job_posting',
  //   {
  //     "companyName": "예시 회사",
  //     "phoneNumber": "010-1234-5678",
  //     "profileImage": [
  //     ],
  //     "sector": "IT",
  //     "region": "서울시 강남구",
  //     "companyImages": [
  //     ],
  //     "detailAddress": "강남역 1번 출구",
  //     "employmentPeriod": "정규직",
  //     "workDays": "주 5일 근무",
  //     "workHours": "09:00 ~ 18:00",
  //     "details": [
  //       "자세한 업무 내용 설명",
  //       "요구 사항"
  //     ],
  //     "salary": 50000000,
  //     "provideAccommodation": false
  //   },
  //   {
  //     headers : {
  //     'Content-Type' : 'application/json',
  //     'ngrok-skip-browser-warning': '69420',
  //     }
  //   },

  // ).then(response => console.log(response) ).catch(err => console.log(err));
  // },[]);

  useEffect( () => {
    axios.get('https://9c95-210-106-232-238.ngrok-free.app/api/job_postings',{
      headers : {
        'Content-Type' : 'application/json',
        'ngrok-skip-browser-warning': '69420',
      }
    }).then( res => console.log(res));
  },[])

  return (
    <div style={{width : "1920px"}}>
      <Nav main={true}/>
      <Contents/>
    </div>

  )
}

export default MainPage