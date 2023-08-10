import {useState} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from 'styled-components';

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
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
  
  }

  return (  
    <SliderContainer>
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
  width : 800px;
  height : 240px;
  display : flex;
  align-items : center;
  margin-top : 20px;

  background-color : #eee;
`;

const StyledSlide = styled(Slider)`
  width : 800px;
  height : 250px;
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
  width: 290px;
  height: 190px;
`;

const ImgBox = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 290px;
  height: 190px;
  border : 1px solid black; 
  border-radius: 20px;
`;