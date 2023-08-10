import React,{useState} from 'react';
import styled from 'styled-components';
import {Link , useMatch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import headerBg from "../../images/header_bg.png"

import { YELLOW , BROWN } from '../../styles/common';

const Nav = () => {

  const {t , i18n} = useTranslation('header');
  const [selectedLang , setSelectedLang] = useState(t.language);
  const handleLanguage = (e) => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <Wrapper>
      <NavContainer>

        <Link to='/'>
          <NavLogo/>
        </Link>
        

        <NavMid>
          <NavBtn>
            <Link to='/'>{t('nav.recruitment')}</Link>
          </NavBtn>
          <NavBtn>
            <Link to='/community'>{t('nav.community')}</Link>
          </NavBtn>
          <NavBtn>
            <Link to='/membership'>{t('nav.membership')}</Link>
          </NavBtn>
        </NavMid>

        <NavRight>
          <Select value={selectedLang} onChange={handleLanguage}>
              <option value='ko'>한국어</option>
              <option value='en'>English</option>
              <option value='cn'>漢語</option>
          </Select>
          <LoginBtn>
            <Link to='/login'>{t('login')}</Link>
          </LoginBtn>
        </NavRight> 
      </NavContainer>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  width : 1920px;
  height : 182px;
  background-image: url(${headerBg});
  background-repeat:  no-repeat;
  background-size : cover;
`;

const NavContainer = styled.div`
  width : 1640px;
  height : 182px;
  display :flex;
  justify-content : space-between;
  align-items : center;
  border-bottom : 1px solid #fff;
  margin : 0 auto;
`;

const NavLogo = styled.div`
  background-image : url("../../images/logo512.png");
  background-color : green;
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
    font-size : 26px;
    font-weight : 700;
    color : ${BROWN};
  }
`;

const LoginBtn = styled(NavBtn)`
  background-color : ${BROWN};

  & > a{
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