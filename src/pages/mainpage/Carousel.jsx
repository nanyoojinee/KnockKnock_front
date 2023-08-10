import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { MOBILE_BREAK_POINT } from "../../components/layout/breakpoint";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    // autoplay:true,
    autoplaySpeed: 1500,
    rtl: false,
    // arrows: false,
  };


  return (
    <div>
      <StyledSlider {...settings}>
        <ImageContainer >
          {/* <Link to="/ai"> */}
            <Image src="/beauty.png" />
          {/* </Link> */}
          
        </ImageContainer>
        <ImageContainer>
          {/* <Link to="/todayknock"> */}
            <Image src="/hihi.png" />
          {/* </Link> */}
        </ImageContainer>
        {/* <ImageContainer> */}
          {/* <Link to="/play"> */}
            {/* <Image src="/hihi.png" /> */}
          {/* </Link> */}
        {/* </ImageContainer> */}
        <ImageContainer>
          <Image src="/011.png" />
        </ImageContainer>
      </StyledSlider>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;  
  margin: 30px 0 40px 0;
  position: relative;
  
  .slick-dots li button::before {
    color: #F48FB1
  }
  .slick-slide {
    margin: 30px 0 30px 0;
  }
  .slick-prev::before, .slick-next::before {
    font-size: 20px;
    color: #F48FB1
    // display: none;
  }
  @media (max-width: ${MOBILE_BREAK_POINT}) {
    .slick-prev::before, .slick-next::before {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  display: row;
  margin: auto;
  z-index: -10;
  justify-content: center;
`;

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  width: 18rem;
  height: 25rem;
  max-width: 100%;
  max-height: 100%;
  background-color: #F7F6F0; 
  z-index: -10;

  @media (max-width: ${MOBILE_BREAK_POINT}) {
    width: 9rem;
    height: 12rem;
  }
`;

export default Carousel;