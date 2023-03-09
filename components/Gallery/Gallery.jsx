import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Photo1 from '../../public/assets/photoGallery/assets/1.jpg'
import Photo2 from '../../public/assets/photoGallery/assets/2.jpg'
import Photo3 from '../../public/assets/photoGallery/assets/3.jpg'
import Photo4 from '../../public/assets/photoGallery/assets/4.jpg'
import Photo5 from '../../public/assets/photoGallery/assets/5.jpg'
import Photo6 from '../../public/assets/photoGallery/assets/6.jpg'
import Photo7 from '../../public/assets/photoGallery/assets/7.jpg'
import Photo8 from '../../public/assets/photoGallery/assets/8.jpg'
import Photo9 from '../../public/assets/photoGallery/assets/9.jpg'
import Photo10 from '../../public/assets/photoGallery/assets/10.jpg'
import Photo11 from '../../public/assets/photoGallery/assets/11.jpg'
import Photo12 from '../../public/assets/photoGallery/assets/12.jpg'
import Photo13 from '../../public/assets/photoGallery/assets/13.jpg'
import Photo14 from '../../public/assets/photoGallery/assets/14.jpg'
import Photo15 from '../../public/assets/photoGallery/assets/15.jpg'


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
           delay: 3000,
           disableOnInteraction: false,
         }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        lazy={true}
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
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo3}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo4}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo5}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo6}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo7}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo8}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo9}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo10}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo11}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo12}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo13}
                alt="Harmony apartments"
                lazy={true}

            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo14}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
        <SwiperSlide className="swSlide"> 
            <Image
                src={Photo15}
                alt="Harmony apartments"
                lazy={true}
            /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
