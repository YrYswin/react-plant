import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import plant from '../../../assets/img/plant.png';

import './Banner.scss'

type settingSlide = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean,
  autoplaySpeed: number,
};

export const Banner: React.FC = () => {

  const Carousel = () => {
    const settings: settingSlide = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="bannerItem">
            <div className="titleBanner">
              <h5>WELCOME TO GREEN DAY SHOP</h5>
              <h1>LET'S MAKE A BETTER <strong>PLANET</strong></h1>
              <p> We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!</p>
              <button type='button' className='shopNowBtn'>SHOP NOW</button>
            </div>
            <img src={plant} className='bannerImg' alt='title' />
          </div>
        </div>

        <div>
          <div className="bannerItem">
            <div className="titleBanner">
              <h5>Welcome to Green Day</h5>
              <h1>LET'S MAKE A BETTER PLANET</h1>
              <p> We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!</p>
              <button type='button' className='shopNowBtn'>SHOP NOW</button>
            </div>
            <img src={plant} className='bannerImg' alt='title' />
          </div>
        </div>

        <div>
          <div className="bannerItem">
            <div className="titleBanner">
              <h5>Welcome to Green Day</h5>
              <h1>LET'S MAKE A BETTER PLANET</h1>
              <p> We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!</p>
              <button type='button' className='shopNowBtn'>SHOP NOW</button>
            </div>
            <img src={plant} className='bannerImg' alt='title' />
          </div>
        </div>
      </Slider>
    );
  };

  return (
    <div className='banner'>
      <Carousel />
    </div>
  );
};
