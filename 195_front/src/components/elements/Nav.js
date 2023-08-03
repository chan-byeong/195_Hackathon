import React,{useState} from 'react';
import styled from 'styled-components';
import {Link , useMatch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Nav = () => {

  const {t , i18n} = useTranslation('header');
  const [selectedLang , setSelectedLang] = useState(t.language);
  const handleLanguage = (e) => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  
  return (
    <div style={{width : "100%" , borderBottom : "1px solid #eee"}}>
      <NavContainer>
        <NavLeft>
          <NavLogo>
            195_logo
          </NavLogo>
          <ul>
            <LinkTo to='/'>{t('nav.recruitment')}</LinkTo>
            <LinkTo to='/community'>{t('nav.community')}</LinkTo>
            <LinkTo to='/membership'>{t('nav.membership')}</LinkTo>
          </ul>
        </NavLeft>

        <NavRight>
          <Link to='/login'>{t('login')}</Link>
          <Select value={selectedLang} onChange={handleLanguage}>
            <option value='ko'>한국어</option>
            <option value='en'>English</option>
            <option value='cn'>漢語</option>
          </Select>
        </NavRight> 
      </NavContainer>
    </div>

  );
}

const NavContainer = styled.div`
  width : 1120px;
  height : 50px;
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
  width : 144px;
  height : 20px;
  //text-indent: -9999px;
`;

const LinkTo = ({to ,children})=>{
  const match = useMatch(to);
  return (
    <li className={match ? "active":""}>
      <Link to={to} >{children}</Link>
    </li>
  );
}

const NavLeft = styled.div`
  display : flex;
  align-items : center;

  & > ul {
    display : flex;

    & > li { //LinkTo 태그
      margin-left : 20px;

      background-color : ${props => props.className === "active" ? "#eee" : ""};
    }
  }
`;

const NavRight = styled.div`


& > a {

  margin-right : 15px;
}
`;

const Select = styled.select`
  width : 100px;
  height : 25px;
  padding : 3px 12px;
  outline : none;

  & > option {
    background-color : #fff;
  }
`; 

export default Nav;