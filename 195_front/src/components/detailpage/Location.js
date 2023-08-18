import styled from 'styled-components';
import { DARKGREEN } from '../../styles/common';


function Location({location}) {
  return ( 
    <Wrapper>
      <LocationInfo>
        <h2>근무지역</h2>
        <p>{location.addr}</p>
      </LocationInfo>

      <MapBox></MapBox>
    </Wrapper>
  )
}

export default Location

const Wrapper = styled.div`

  height : 620px;
  border-radius : 5px;
  margin-top : 20px;

  position : relative;
  //background-color : #eee;
`;

const LocationInfo = styled.div`
  
  padding-bottom : 20px;

  & > h2 {
    font-size : 48px;
    color : ${DARKGREEN};
  }

  & > p {
    font-size : 29px;
  }
`;

const MapBox = styled.div`
  width : 1600px;
  height : 430px;
  background-color : #eee;
  border-radius : 15px;

  position : absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;