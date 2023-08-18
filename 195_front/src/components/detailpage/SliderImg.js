import {useState} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from 'styled-components';
import { DARKGREEN } from '../../styles/common';

function SliderImg({images}) {


  const NextArrow = ({onClick}) => {
    return(
      <Next onClick={onClick}/>
    );
  }

  const PrevArrow = ({onClick}) => {
    return(
      <Prev onClick={onClick}/>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
  
  }

  return (  
    <SliderContainer>
      <Title>기업 이미지</Title>
      <StyledSlide {...settings}>
        {images.map((e,i)=>(
          <SlideContents key={i} >
            <ImgBox src={e}/>
          </SlideContents>
        ))}
      </StyledSlide>
    </SliderContainer>
  )
}

export default SliderImg

const SliderContainer = styled.div`
  height : 450px;
  //display : flex;
  //align-items : center;
  margin-top : 40px;

`;

const Title = styled.h2`
  font-size : 48px;
  color : ${DARKGREEN};
`;

const StyledSlide = styled(Slider)`
  width : 100%;
  height : 380px;
  display : flex;
  align-items : center;

  .slick-track {
    display : flex;
    justify-content : center;
    align-items: center;
  }
  .slick-slide {
    display : flex;
    justify-content : center;
    align-items: center;
  }

`;

const Next = styled.div`
  font-size : 25px;
  position : absolute;
  right : 10px;
  z-index : 10;
  cursor: pointer;
  &::before {
    content : " > ";
  }
`;

const Prev = styled.div`
  font-size : 25px;
  position : absolute;
  left : 10px;
  z-index : 10;
  cursor: pointer;
  &::before {
    content : " < ";
  }
`;

const SlideContents = styled.div`
  width: 527px;
  height: 300px;
`;

const ImgBox = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  width: 517px;
  height: 300px;
  border : 1px solid black; 
  border-radius: 20px;
`;