import React,{useState} from 'react';
import styled from 'styled-components';
import {Link , useMatch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import headerBg from "../../images/header_bg.png"
import headerGnBg from '../../images/header_gn_bg.png'
import logo195 from "../../images/195_logo.png";

import { YELLOW , BROWN } from '../../styles/common';

const Nav = ({main}) => {

  const {t , i18n} = useTranslation('header');
  const [selectedLang , setSelectedLang] = useState(t.language);
  const handleLanguage = (e) => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <Wrapper main={main}>
      <NavContainer>

        <Link to='/'>
          <NavLogo/>
        </Link>
        

        <NavMid>
          <NavBtn>
            <Link to='/result'>{t('nav.recruitment')}</Link>
          </NavBtn>
          <NavBtn>
            <Link to='/loginDetail'>{t('nav.loginDetail')}</Link>
          </NavBtn>
          <NavBtn>
            <Link to='/adminMain'>{t('nav.admin')}</Link>
          </NavBtn>
        </NavMid>

        <NavRight>
          <Select value={selectedLang} onChange={handleLanguage}>
              <option value='ko'>한국어</option>
              <option value='en'>English</option>
              <option value='cn'>漢語</option>
          </Select>
          <LoginBtn>
            <Link to='/login'>
               {t('login')}
            </Link>
          </LoginBtn>
        </NavRight> 
      </NavContainer>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  width : 100%;
  height : 140px;
  background-image:url(${props => props.main ? headerBg: headerGnBg}) ;
  background-repeat:  no-repeat;
  background-size : cover;
  background-position-y : -115px;
`;

const NavContainer = styled.div`
  max-width : 1640px;
  height : 140px;
  display :flex;
  justify-content : space-between;
  align-items : center;
  border-bottom : 1px solid #fff;
  margin : 0 auto;
`;

const NavLogo = styled.div`
  background-image : url(${logo195});
  background-size: contain;
  background-position: center;
  width : 234px;
  height : 86px;
  //text-indent: -9999px;
`;

const NavMid = styled.div`
  width : 748px;
  height : 59px;
  display : flex;
  align-items : center;
  justify-content : space-between;
`;

const NavBtn = styled.div`
  width : 190px;
  height : 44px;
  background-color : ${YELLOW};
  border-radius : 90px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
  display : flex;
  align-items : center;
  justify-content: center;
  cursor : pointer;

  & > a{
    display : inline-flex;
    width : 100%;
    justify-content :center;
    font-size : 26px;
    font-weight : 700;
    color : ${BROWN};
  }
`;

const LoginBtn = styled(NavBtn)`
  background-color : ${BROWN};

  & > a {
    display : inline-flex;
    width : 100%;
    justify-content :center;
    color : #fff;
  }
  
`;

const NavRight = styled.div`
  position : relative;

  & > a {
    margin-right : 15px;
  }
`;

const Select = styled.select`
  border : none;
  outline : none;
  //appearance: none;
  //-webkit-appearance: none;

  width : 109px;
  height : 35px;
  font-size : 16px;
  text-align : center;
  display : block;
  cursor : pointer;
  position : absolute;
  top : -45px;
  left : 42px;

  background-color : transparent;
  border-bottom : 1px solid ${BROWN};

  &::after {
    content : ">"; 
    display : block;
    position : absolute;
    right : 10px;
  }
  &:focus {
    outline : none;
  }

  & > option {
    background-color : ${YELLOW};
    &:hover {
      background-color : #eee;
    }
  }
`; 

export default Nav;