import React from 'react'
import styled from 'styled-components'

import iconaccom from '../../images/icons/icon_accom.png'
import iconjob from '../../images/icons/icon_job.png'
import iconloca from '../../images/icons/icon_loca.png'
import iconwon from '../../images/icons/icon_won.png'

import { DARKGREEN } from '../../styles/common'

function InfoBox({data}) {


  //console.log(data);
  

  return (
    <InfoContainer>
      <Info>
        <InfoContents>
          <h2>{data.title}</h2>
          <span>{data.companyName} / {data.phoneNumber}</span>
        </InfoContents>
        <InfoImgBox>
          <Img src={ data.profileImage} alt="프로필이미지"/>
        </InfoImgBox>
      </Info>

      <Info2>
        <InfoList>
          <li><span className='won'></span>{data.salary}</li>
          <li><span className='job'></span>{data.sector}</li>
          <li><span className='loca'></span>{data.city}</li>
          <li><span className='accom'></span>{data.foodProvided ? "식사 O" : "식사 X"} / {data.accommodationProvided? "기숙사 O": "기숙사 X"}</li>
        </InfoList>
      </Info2>
    </InfoContainer>
  )
}

export default InfoBox


const InfoContainer = styled.div`
  height : 516px;
  border-radius : 30px;
  padding : 30px;
  background-color: #EEF4EB;
  position: relative;
`;


const Info = styled.div`
  display: flex;
  justify-content: space-between; 
`;

const InfoContents = styled.div`
  & > h2 {
    font-size: 56px;
    font-weight: 700;
    color : ${DARKGREEN};
    margin-bottom : 20px;
  }

  & > span {
    font-size : 34px;
    color : ${DARKGREEN}
  }
`;

const InfoImgBox = styled.div`
  width : 600px;
  height : 260px;
  //background-color: antiquewhite;

`;

const Info2 = styled.div`
  position: absolute;
  bottom : 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  width : 100%;
`;

const InfoList = styled.div`
  display: flex;
  justify-content: space-around;

  & > li {
    display : flex;
    align-items : center;
    list-style : none;
    font-size : 36px;
    color : ${DARKGREEN};
    
    & > span {
      display : block;
      margin-right : 15px;
      height : 80px;
      width : 80px;
      border-radius : 50%;
      background-color : #8CB879;
      background-size: contain;
    }
    .won {
      background-image : url(${iconwon});
    }
    .job {
      background-image : url(${iconjob});
    }
    .loca {
      background-image : url(${iconloca});
    }
    .accom {
      background-image : url(${iconaccom});
    }
  }
`;


const Img = styled.img`
  width : 100%;
  height :100%;
  background-size : contain;
  background-position :center;
`;