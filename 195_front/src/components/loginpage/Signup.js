import React,{useState} from 'react'
import Nav from '../elements/Nav'
import styled from 'styled-components';

import googleSign from "../../images/googleSign.png";
import {baseUrl} from '../../styles/common'

function Signup() {

  const [iscompany, setIsCompany] = useState(true);

  const handleMember = (e) => {
    e.target.innerText === "개인회원" ?
      setIsCompany(false) : setIsCompany(true);
  }

  const googleLogin = () => {
     window.open(baseUrl+"/oauth2/authorization/google" , "_self");
  }

  return (
    <Wrapper>
      <Nav main={true}/>
      <Container>
        <p>195 회원가입을 환영합니다.</p>
        <Member>
          <MemberItem iscompany={iscompany} onClick={handleMember}>개인회원</MemberItem>
          <MemberItem2 iscompany={iscompany} onClick={handleMember}>기업회원</MemberItem2>
        </Member>
        {
          iscompany ? 
            <Text1>공고를 등록하고<br/> 근로자를 찾아보세요</Text1> 
            : 
            <Text1>이력서를 등록하고<br/> 채용공고를 확인하세요</Text1>
        }
        <Text2>Google 계정으로 간편 회원가입</Text2>
        
        <GoogleSignBtn onClick={googleLogin}/>
        

      </Container>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
  width :100%;
  height : 100vh;
  background-color : #FFFEF6;
  
  position : relative;
`;

const Container = styled.div`
  max-width : 1640px;
  margin : 0 auto;
  padding-top : 56px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;

  & > p {
    color : #574E26;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Member = styled.div`
  width : 500px;
  height : 77px;
  border-radius : 56px;
  background-color: #FDF5D1;
  box-shadow: 4px 4px 8px 0px rgba(87, 78, 38, 0.04);

  display : flex;

  margin-top : 10px;

`;

const MemberItem = styled.div`
  width: 278px;
  height: 77px;
  border-radius : 56px;
  
  font-size : 32px;
  font-weight : 600;
  
  display : flex;
  align-items : center;
  justify-content : center;

  background-color : ${(props) => (props.iscompany ? "#FDF5D1" : "#F8E06C")};
  color : ${(props) => (props.iscompany ? "#706531" : "#3A3418")};
  
  cursor : pointer;

  transition : 0.5s;
`;

const MemberItem2 = styled(MemberItem)`

  background-color : ${(props) => (props.iscompany ? "#F8E06C" : "#FDF5D1")};
  color : ${(props) => (props.iscompany ? "#3A3418" : "#706531")};
  
`;

const Text1 = styled.div`
  margin-top : 72px;
  color: #706531;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  line-height : normal;
`;

const Text2 = styled.div`
  margin-top : 111px;
  color: #574E26;
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
`;

const GoogleSignBtn = styled.button`
  margin-top : 64px;
  width: 440px;
  height: 106px;
  background: url(${googleSign}), lightgray 50% / cover no-repeat;
  background-color : transparent;
`;