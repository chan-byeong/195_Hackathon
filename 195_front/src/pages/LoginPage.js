import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header';
import googleIcon from '../images/icon-google.svg';
import {GREEN} from "../styles/common";

function LoginPage() {

  const BaseUrl = "https://9c95-210-106-232-238.ngrok-free.app/oauth2/authorization/google";
  
  const googleLogin = () => {
    window.open(BaseUrl , "_self");
  }
  

  return (
    <Wrapper>
      <Header/>
      <Container>
        <Text>
          195에 오신 것을 환영합니다!
        </Text>
        <GoogleBtn onClick={googleLogin}>
          <span>구글 로그인</span>
        </GoogleBtn>
      </Container>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  width :100%;
  height : 100vh;
`;

const Container =  styled.div`
  width : 1630px;
  height : 80vh;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 55px;
  line-height: 60px;
  margin-bottom :60px;
  color : ${GREEN};
`;

const SocialBtn = styled.button`
  width: 380px;
  height: 62px;
  padding: 16px 0;
  border-radius: 12px;
  margin-bottom : 20px;
  cursor : pointer;

  & > span{
    text-align: center;
    font-size : 25px;
    font-style : normal;
    font-weight : 700;
  }
`;

const GoogleBtn = styled(SocialBtn)`
  background-color :#fff;
  border : 1px solid #D1D4D8;
  & > span{
    color : #4D5359;
    position : relative;
    &::before {
      content: url(${googleIcon});
      position: absolute;
      left : -67px;
      top : 0px;
    }
  }
`;
