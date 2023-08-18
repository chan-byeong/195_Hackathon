import React from 'react'
import styled from 'styled-components';
import { DARKGREEN } from '../../styles/common';


function ConditionDetail() {
  return (
    <Wrapper>
      <Title>상세 요강</Title>
      <ImgBox></ImgBox>
    </Wrapper>
  )
}

export default ConditionDetail;

const Wrapper = styled.div`
  //height : 400px;

  border-radius : 5px;
  margin-top : 20px;

  position : relative;
 // background-color : #eee;
`;

const Title = styled.div`
  font-size : 48px;
  color :${DARKGREEN}
`;

const ImgBox  = styled.img`
  height : 450px;
`;