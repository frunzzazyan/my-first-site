import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Sliders.css'


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const Sliders = () => {
  return (
    <div className='items-slider'>
        <Slider {...settings}>
          <div>
            <h3>img 1</h3>
          </div>
          <div>
            <h3>img 2</h3>
          </div>
          <div>
            <h3>img 3</h3>
          </div>
          <div>
            <h3>img 4</h3>
          </div>
          <div>
            <h3>img 5</h3>
          </div>
          <div>
            <h3>img 6</h3>
          </div>
        </Slider>
      </div>
  )
}

export default Sliders