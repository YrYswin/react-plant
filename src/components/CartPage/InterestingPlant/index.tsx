import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

import InteresItem from './InteresItem';

import styles from './InterestingPlant.module.scss'
import axios from 'axios';

type settingSlide = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean,
  autoplaySpeed: number,
};

export const InterestingPlant: React.FC = () => {
  const [items, setItems] = React.useState([])

  const getItems = async () => {
    try {
      const { data } = await axios.get('https://660bc28eccda4cbc75dda413.mockapi.io/plants')
      setItems(data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getItems()
  }, [])

  const Carousel = () => {
    const settings: settingSlide = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 10000,
    };
    return (
      <Slider {...settings}>

        {items.slice(0, 10).map((item: any) => (
          <InteresItem key={item.id} {...item} />
        ))}

      </Slider>
    );
  };

  return (
    <div className={styles.interesting__page}>

      <h1>You may be interested in</h1>

      <div className={styles.carusel}>
        <Carousel />
      </div>
    </div>
  )
}