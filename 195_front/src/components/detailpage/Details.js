import React from 'react'
import InfoBox from './InfoBox'
import styled from 'styled-components'
import SliderImg from './SliderImg';
import Location from './Location';
import Condition from './Condition';
import ConditionDetail from './ConditionDetail';
import 이미지 from '../../images/logo512.png';


function Details() {

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

  return (
    //헤더
    <Wrapper>
      <InfoBox/>
      <SliderImg images={images}/>
      <Location location={location}/>
      <Condition/>
      <ConditionDetail/>
    </Wrapper>
  )
}


export default Details;

const Wrapper = styled.div`
  max-width : 800px;
  margin : 0 auto;
  padding-top : 30px;
`;