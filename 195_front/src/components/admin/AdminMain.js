import React from 'react'
import styled from 'styled-components';
import {BROWN , YELLOW} from '../../styles/common.js';

import Nav from '../elements/Nav'
import { Contents } from '../mainpage/Contents'

import immmg from '../../images/195_logo.png'


function AdminMain() {


  return (
    <>
      <Nav main={true}/>
      <Wrapper>
        <Contents1>
          <p>근로자가 필요하다면?</p>
          <RegisterBtn><span>공고 등록하기</span></RegisterBtn>
        </Contents1>
        <Contents2>
          <Title>오늘의 근로 계약 TIP!</Title>
          <Container>
            <Item><div></div></Item>
            <Item><div></div></Item>
            <Item><div></div></Item>
          </Container>
        </Contents2>
      </Wrapper>

    </>
  )
}

export default AdminMain;

const Wrapper = styled.div`
  max-width : 1630px;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

const Contents1 = styled.div`
  height : 400px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;

  & > p {
    color: rgba(55, 36, 23, 0.50);
    width : 370px;
    text-align : center;
    font-size: 32px;
    font-weight: 600;
    margin-bottom : 20px;

    border-bottom : 3px solid rgba(55, 36, 23, 0.50);
  }
`;

const RegisterBtn = styled.button`
  width: 620px;
  height: 110px;
  background-color :#5E3E28;
  border-radius: 32px;
  box-shadow: 4px 4px 16px 0px rgba(55, 36, 23, 0.08), 16px 16px 16px 0px rgba(157, 103, 67, 0.08) inset;
  position :  relative;

  & > span {
    color: #FEFCF0;
    font-size: 56px;
    font-weight: 800;
    line-height: 58px;
    position : absolute;
    right : 131px;
    bottom : 26px;


    &::before { 
      content : "+";
      position : absolute ;
      font-size : 100px;
      font-weight : 300;
      left :-150px;
      bottom : 6px;
    }
  }

`;


const Contents2 = styled.div`
`;

const Title = styled.div`
  color: #494220;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px; /* 100% */
`;

const Container = styled.div`
  width : 1500px;
  margin-top : 30px;
  display :flex;
  justify-content : space-between;
`;

const Item = styled.a`
  width: 400px;
  height: 351px;

  & > div { 
    height: 351px;
    background-image : url(${immmg});

    border-radius : 15px;

    border : 1px solid black;

  }
`;