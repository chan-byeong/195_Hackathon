import React from 'react'
import styled from 'styled-components';
import { DARKGREEN } from '../../styles/common';

function Condition({data}) {
  return (
    <Wrapper>
      <Title>근무 조건</Title>
      <CondBox>
        <Label><div>급여</div><span>{data.salary}</span></Label>
        <Label><div>근무 기간</div><span>2,000,000</span></Label>
        <Label><div>업종</div><span>{data.job}</span></Label>
        <Label><div>근무 요일</div><span>2,000,000</span></Label>
        <Label><div>숙식</div><span>{data.accom1 ? "식사 O" : "식사 X"} / {data.acccom2? "기숙사 O": "기숙사 X"}</span></Label>
        <Label><div>근무 시간</div><span>2,000,000</span></Label>
      </CondBox>
    </Wrapper>
  )
}

export default Condition;

const Wrapper = styled.div`
  //width : 800px;
  height : 450px;

  border-radius : 5px;
  margin-top : 20px;

  position : relative;
  //background-color : #eee;
`;

const Title = styled.div`
  font-size : 48px;
  color : ${DARKGREEN};
`;

const CondBox = styled.div`
  height : 347px;
  background-color : #EEF4EB;
  border-radius : 15px;
  padding : 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  //gap: 20px;
`;

const Label = styled.div`
  //background-color: #ccc;
  padding: 20px;
  display : flex;
  text-align: center;
  align-items : center;

  & > div{
    font-size : 38px;
    font-weight : 600;
    margin-right : 70px;
    color : ${DARKGREEN}
  }
  & > span {
    font-size: 29px;
  }
`;
