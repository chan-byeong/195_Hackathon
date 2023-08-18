import React from 'react'
import styled from 'styled-components'
import Nav from '../components/elements/Nav';
import Header from '../components/Header';
import googleIcon from '../images/icon-google.svg';
import loginPic from '../images/login_pic.png';
import {BROWN, GREEN, baseUrl} from "../styles/common";

import {useNavigate} from 'react-router-dom'




function LoginPage() {

  
  const googleLogin = () => {
    window.open(baseUrl+"/oauth2/authorization/google" , "_self");
  }

  const navigate = useNavigate(); 
  

  return (
    <Wrapper>
      <Nav main={true}/>
      <Container>
        <TextBox>
          <p className='sub'>Empower, Navigate, Explore</p>
          <Text>
             Find your <span>Wanna Job</span> here
          </Text>
          <p className='desc'>
          Through our platform, you can browse jobs in various locations and industries, gaining both cultural experiences and professional growth simultaneously in Korea. Embark on international recruitment opportunities here, 
          and embrace new challenges and accomplishments.
          </p>
        </TextBox>
        <ImgBox></ImgBox>
        <GoogleBtn onClick={googleLogin}>
          <div className='avatar'>
            <img src={googleIcon} alt='google-icon'/>
          </div>
          <span>Google 계정으로 간편 로그인</span>
        </GoogleBtn>
        <p className='signUp'>아직 회원이 아니세요? 
          <span onClick={()=>{navigate('/signup')}}>회원가입</span>
        </p>
      </Container>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  width :100%;
  height : 100vh;
  background-color : #FFFEF6;
  
  position : relative;
`;

const Container =  styled.div`
  width : 1630px;
  height : 80vh;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  //align-items : center;
  justify-content : center;

  & > .signUp {
    color: #958641;
    font-size: 16px;
    font-weight: 600;

    & > span {
      color : #706531;
      font-size: 20px;
      margin-left : 5px;

      cursor :pointer;
    }
  }

`;

const TextBox = styled.div`
  color : ${BROWN};

  .sub {
    font-size : 24px;
    font-weight: 400;
  }

  .desc {
    color : rgba(87, 78, 38, 0.80);
    font-size : 24px;
    font-weight : 400;
    line-height : 42px;
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 64px;
  line-height: 60px;
  margin-bottom :60px;
  color : ${BROWN};

  & > span {
    font-weight : 700;
    color : #BAA850;
  }
`;

const ImgBox = styled.div`
  width : 680px;
  height : 495px;
  background-image : url(${loginPic});

  position : absolute;
  right : -25px;
  bottom : 50px;


`;

const SocialBtn = styled.button`
  width: 641px;
  height: 88px;
  padding: 16px 0;
  border-radius: 16px;
  margin-bottom : 20px;
  cursor : pointer;
 

  & > span{
    text-align: center;
    font-size : 25px;
    font-style : normal;
    font-weight : 600;
    color : #fff;
  }
`;

const GoogleBtn = styled(SocialBtn)`
  background-color : #574E26;
  margin-top :170px;

  display : flex;
  align-items : center;
  justify-content : space-around;

  & > .avatar {
    width : 64px;
    height : 64px;
    background-color : #fff;
    border-radius : 50%;

    display : flex;
    align-items :center;
    justify-content :center;
  }

  & > img {
    /* width : 64px;
    height : 64px; */
  }

  & > span{
    color : #fff;
    position : relative;
    font-size : 40px;
    /* &::before {
      content: url(${googleIcon});
      background-color : #fff;
      position: absolute;
      width : 64px;
      height : 64px;
      border-radius : 50%;
      left : -60px;
      top : -12px;

      display : flex;
      align-items : center;
      justify-content : center;

    } */
  }
`;
