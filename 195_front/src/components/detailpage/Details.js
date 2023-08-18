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
import { useMatch } from 'react-router-dom';

import axios from 'axios';


function Details() {
  //DB에서 데이터 받아오고 하위 컴포넌트에 데이터 전달해줘야함.
  ///api/one-job-posting/{id}
  const match= useMatch('/result/:id');
 // const [id, setid] = useState('');
 // console.log(match.params.id);
  const [cData, setcData] = useState();
  const [loading,setLoading] = useState(false);

  console.log(cData);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    await axios.get(baseUrl+`/api/one-job-posting/${match.params.id}`)
    .then(res=>
      {
      setcData(res.data)
      setLoading(true);
      console.log(res.data)
      })
    .catch(err=>console.log(err));
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

  //cData.companyImages
  //cData.detailAdress
  return (
    <>
    {loading&&(
      <Wrapper>
        <InfoBox data={cData} /> 
        <SliderImg images={cData.companyImages}/>
        <Location location={cData.detailAdress}/>
        <Condition data={cData}/>
        <ConditionDetail data={cData.details}/>
      </Wrapper>)
      }
    </>
  )
}


export default Details;

const Wrapper = styled.div`
  max-width : 1640px;
  margin : 0 auto;
  padding-top : 30px;
`;