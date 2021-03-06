/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './carousel.module.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + ' ' + s.arrowRight}
      role='navigation'
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + ' ' + s.arrowLeft}
      role='navigation'
      onClick={onClick}
      onKeyDown={onClick}
    />
  );
}

export default function CarouselBlock() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };

  return (
    <Slider {...settings}>
      <div className={s.slide + ' ' + s.slide3}>
        <h3 className={s.title}>Школа иностранных языков</h3>
      </div>
      <div className={s.slide + ' ' + s.slide2}>
        <h3 className={s.title}>Возможность учиться онлайн или оффлайн</h3>
      </div>
      <div className={s.slide + ' ' + s.slide1}>
        <h3 className={s.title}>Авторская методика обучения</h3>
      </div>
      <div className={s.slide + ' ' + s.slide4}>
        <h3 className={s.title}>Группы 1-4 человека</h3>
      </div>
    </Slider>
  );
}
