import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Photo1 from '../../public/assets/photoGallery/assets/1.jpg'
import Photo2 from '../../public/assets/photoGallery/assets/2.jpg'
import Photo3 from '../../public/assets/photoGallery/assets/3.jpg'
import Photo4 from '../../public/assets/photoGallery/assets/4.jpg'
import Photo5 from '../../public/assets/photoGallery/assets/5.jpg'




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperGallery"
      >
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo1}
                alt="Harmony apartments"
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo2}
                alt="Harmony apartments"
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo3}
                alt="Harmony apartments"
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo4}
                alt="Harmony apartments"
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo5}
                alt="Harmony apartments"
            /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
