"use client";
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const CoverSwiper = () => {
    const swiperElRef = useRef(null);


  useEffect(() => {

      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
    }, []);

    return(
        <swiper-container>
            <swiper-slide>Slide1</swiper-slide>
            <swiper-slide>Slide2</swiper-slide>
            <swiper-slide>Slide3</swiper-slide>
            <swiper-slide>Slide4</swiper-slide>
            <swiper-slide>Slide5</swiper-slide>
        </swiper-container>
    )
}

export default CoverSwiper;