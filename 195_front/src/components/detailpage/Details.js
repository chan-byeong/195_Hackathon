import {useState,useEffect} from 'react'
import { baseUrl } from '../../styles/common';

import InfoBox from './InfoBox'
import styled from 'styled-components'
import SliderImg from './SliderImg';
import Location from './Location';
import Condition from './Condition';
import ConditionDetail from './ConditionDetail';
import 이미지 from '../../images/logo512.png';
import Nav from '../elements/Nav';

import axios from 'axios';


function Details() {
  //DB에서 데이터 받아오고 하위 컴포넌트에 데이터 전달해줘야함.
  ///api/one-job-posting/{id}

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    await axios.get(baseUrl+`/api/one-job-posting/1`).then(res=>console.log(res)).catch(err=>console.log(err));
  }
  

  const data = {
    title :"공고제목",
    company : "회사명",
    phone : "01044444444",
    job : "제조업",
    location : "양주시",
    accom1 : true,
    acccom2 : false,
    salary : "1,000,000",
  }
  const images = [
    이미지,
    이미지,
    이미지,
    이미지,
    이미지,
  ]

  const location = {
    addr : "경기도 성남시",
  }
  //InfoBox -> 공고명 , 회사명 , 번호 , 월급 , 직종 , 위치(00시) , 숙식
  //Slider -> 이미지

  return (
    <>
      <Wrapper>
        <InfoBox data={data} /> 
        <SliderImg images={images}/>
        <Location location={location}/>
        <Condition data={data}/>
        <ConditionDetail/>
      </Wrapper>
    </>
  )
}


export default Details;

const Wrapper = styled.div`
  max-width : 1640px;
  margin : 0 auto;
  padding-top : 30px;
`;