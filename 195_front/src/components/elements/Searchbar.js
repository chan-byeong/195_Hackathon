import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

function Searchbar() {
  const {t} = useTranslation('main');


  return (
    <Container>
      <form>
        <div>
          <Search placeholder={t('placeholder.comment')}></Search>
        </div>
      </form>
    </Container>
  )
}

export default Searchbar

const Container = styled.div`
  width: 100%;
  height : 62px;
  padding : 5px 0;
  display : flex;
  justify-content : center;  
`;

const Search = styled.input`
  width : 700px;
  height : 50px;
  border : 1px solid green;
  outline : none; //입력시 테두리 없애기

  &:focus{
    border-color: green !important;
  }
`;