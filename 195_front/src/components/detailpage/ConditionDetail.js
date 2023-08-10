import React from 'react'
import styled from 'styled-components';


function ConditionDetail() {
  return (
    <Wrapper>
      <Title>상세요강</Title>
    </Wrapper>
  )
}

export default ConditionDetail;

const Wrapper = styled.div`
  width : 800px;
  height : 400px;

  border-radius : 5px;
  margin-top : 20px;

  position : relative;
  background-color : #eee;
`;

const Title = styled.div`
  font-size : 30px;
  font-weight: 700;
`;