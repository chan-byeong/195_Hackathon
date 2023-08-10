import styled from 'styled-components';


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
  width : 800px;
  height : 400px;

  border-radius : 5px;
  margin-top : 20px;

  position : relative;
  background-color : #eee;
`;

const LocationInfo = styled.div`
  
  padding-bottom : 20px;

  & > h2 {
    font-size : 25px;
    font-weight : 700;
  }

  & > p {
    font-size : 16px;
  }
`;

const MapBox = styled.div`
  width : 780px;
  height : 250px;
  background-color : #fff;
  border-radius : 5px;

  position : absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;