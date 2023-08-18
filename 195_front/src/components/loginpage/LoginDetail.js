import {useEffect, useState} from 'react'
import Nav from '../elements/Nav';
import styled from 'styled-components'

import axios from 'axios';
import { baseUrl } from '../../styles/common';

///api/business-confirm

function LoginDetail() {
  const [businessData , setbusinessData] = useState({
    pNm : '',
    bNo : '',
    startDt : '',
  });

  const [validate , setValidate] = useState(false);
  const [show,setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(businessData);
    //api 통신으로 맞는지 확인하기

    const response = await axios.post(baseUrl+"/api/business-confirm" , businessData)
      .then( (res) => {
        console.log(res);
        const val = res.data === '01';
        setValidate(val);
        setShow(true);
      })
      .catch((err)=>console.log(err , '통신실패'));

  }


  const handleInput = (e) => {
    const {name , value } = e.target;
    setbusinessData((prevData)=>({
      ...prevData,
      [name] : value,
    }));
  };

  return (
    <Wrapper>
      <Nav main={true}/>
      <Container>
        <p>195 회원가입을 환영합니다.</p>
        <Member>
          <MemberItem >개인회원</MemberItem>
          <MemberItem 
             style={{  backgroundColor : "#F8E06C", color :"#3A3418"}}>
            기업회원
          </MemberItem>
        </Member>
        <Form onSubmit={handleSubmit}>

          <FormItem>
            <label>사업자명</label>
            <input 
            type="text"
            name = "pNm"
            value = {businessData.pNm}
            onChange={handleInput}
            />
          </FormItem>

          <FormItem>
            <label>등록날짜</label>
            <input 
            type="number"
            name = "startDt"
            value = {businessData.startDt}
            onChange={handleInput}
            />
          </FormItem>

          <FormItem>         
            <label>사업자 번호</label>
            <input 
            type="number"
            name = "bNo"
            value = {businessData.bNo}
            onChange={handleInput}
            />
          </FormItem>
          {
            show&&validate ? <p>확인되었습니다</p> : <p>정보를 다시 확인해주세요</p>
          }
          <div>
            <button type="submit">확인</button>
          </div>

        </Form>

      </Container>
    </Wrapper>
  )
}

export default LoginDetail;

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

  & > .company {
    background-color : "#F8E06C";
    color :"#3A3418";
  }

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

  background-color :"#FDF5D1";
  color :"#706531";
  
  cursor : pointer;

  transition : 0.5s;

  & .company {
    background-color : "#F8E06C";
    color :"#3A3418";
  }
`;

const Form = styled.form`
  margin-top : 50px;
  width: 1253px;
  height: 464px;
  border-radius: 40px;
  background: rgba(255, 242, 182, 0.80);
  box-shadow: 4px 4px 8px 0px rgba(94, 62, 40, 0.04);
  
  display :flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;

  & > div > button {
    width: 122px;
    height: 68px;

    border-radius: 16px;
    background: #F8E06C;
    box-shadow: 4px 4px 8px 0px rgba(94, 62, 40, 0.08);

    color: #372417;
    font-size: 28px;
    font-weight: 500;
  }
`;

const FormItem = styled.div`
  width : 1100px;
  display : flex;
  justify-content : space-between;
  align-items : center;
  margin-bottom : 20px;


  & > label {
    color: #372417;
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
  }

  & > input {
    width: 610px;
    height: 68px;

    border-radius: 16px;
    background: #FFFEF6;
    box-shadow: 4px 4px 8px 0px rgba(94, 62, 40, 0.08);
    
    outline : none;
    border : none;

    font-size: 28px;
  }


`;