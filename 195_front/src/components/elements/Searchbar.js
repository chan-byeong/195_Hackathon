import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

function Searchbar() {
  const {t} = useTranslation('main');


  return (
    <Container>
      <div>
        <form>
          <div>
            <Search placeholder={t('placeholder.comment')}></Search>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default Searchbar

const Container = styled.div`
  width: 100%;
  height : 62px;
  padding-top : 10px;
  display : flex;
  justify-content : center;  
`;

const Search = styled.input`
  width : 800px;
  height : 50px;
  border : 1px solid green;
  border-radius : 8px;
  outline : none; //입력시 테두리 없애기
  padding : 0 20px;
  font-size: 15px;
  font-weight : 600;

  &:focus{
    border-color: green !important;
  }

`;