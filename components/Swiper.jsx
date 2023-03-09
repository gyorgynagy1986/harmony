import Image from 'next/image'
import Photo1 from '../public/assets/smallGallery/1.png'
import Photo2 from '../public/assets/smallGallery/2.jpg'
import Photo3 from '../public/assets/smallGallery/3.jpg'
import Photo4 from '../public/assets/smallGallery/4.jpg'
import Photo5 from '../public/assets/smallGallery/5.jpg'
import Photo6 from '../public/assets/smallGallery/6.jpg'

// STUDIO APARTMENT
import a3P1 from '../public/assets/smallGallery/A3/1.jpg'
import a3P2 from '../public/assets/smallGallery/A3/2.jpg'
import a3P3 from '../public/assets/smallGallery/A3/3.jpg'
import a3P4 from '../public/assets/smallGallery/A3/4.jpg'
import a3P5 from '../public/assets/smallGallery/A3/5.jpg'
import a3P6 from '../public/assets/smallGallery/A3/6.jpg'
import a3P7 from '../public/assets/smallGallery/A3/7.jpg'
import a3P8 from '../public/assets/smallGallery/A3/8.jpg'
import a3P9 from '../public/assets/smallGallery/A3/9.jpg'
import a3P10 from '../public/assets/smallGallery/A3/10.jpg'
import a3P11 from '../public/assets/smallGallery/A3/11.jpg'
import a3P12 from '../public/assets/smallGallery/A3/12.jpg'

// Egyhálószoba 

import a1P1 from '../public/assets/smallGallery/A1/1.jpg'
import a1P2 from '../public/assets/smallGallery/A1/2.jpg'
import a1P3 from '../public/assets/smallGallery/A1/3.jpg'
import a1P4 from '../public/assets/smallGallery/A1/4.jpg'
import a1P5 from '../public/assets/smallGallery/A1/5.jpg'
import a1P6 from '../public/assets/smallGallery/A1/6.jpg'
import a1P7 from '../public/assets/smallGallery/A1/7.jpg'
import a1P8 from '../public/assets/smallGallery/A1/8.jpg'
import a1P9 from '../public/assets/smallGallery/A1/9.jpg'
import a1P10 from '../public/assets/smallGallery/A1/10.jpg'


// CSALÁDI

import a2P1 from '../public/assets/smallGallery/A2/1.jpg'
import a2P2 from '../public/assets/smallGallery/A2/2.jpg'
import a2P3 from '../public/assets/smallGallery/A2/3.jpg'
import a2P4 from '../public/assets/smallGallery/A2/4.jpg'
import a2P5 from '../public/assets/smallGallery/A2/5.jpg'
import a2P6 from '../public/assets/smallGallery/A2/6.jpg'
import a2P7 from '../public/assets/smallGallery/A2/7.jpg'
import a2P8 from '../public/assets/smallGallery/A2/8.jpg'
import a2P9 from '../public/assets/smallGallery/A2/9.jpg'
import a2P10 from '../public/assets/smallGallery/A2/10.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";



export default function App( {button}) {
  return (
    <>
       <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P1 : '' | button === '2' ?  a2P1 : '' |  button === '3' ? a3P1 : '' }
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P2 : '' | button === '2' ?  a2P2 : '' |  button === '3' ? a3P2 : ''}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P3 : '' | button === '2' ?  a2P3 : '' |  button === '3' ? a3P3 : ''}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P4 : '' | button === '2' ?  a2P4 : '' |  button === '3' ? a3P4 : ''}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P5 : '' | button === '2' ?  a2P5 : '' |  button === '3' ? a3P5 : ''}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P6 : '' | button === '2' ?  a2P6 : '' |  button === '3' ? a3P6 : ''}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P7 : '' | button === '2' ?  a2P7 : '' |  button === '3' ? a3P7 : ''}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P8 : '' | button === '2' ?  a2P8 : '' |  button === '3' ? a3P8 : ''}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P9 : '' | button === '2' ?  a2P9 : '' |  button === '3' ? a3P9 : ''}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? a1P10 : '' | button === '2' ?  a2P10 : '' |  button === '3' ? a3P10 : ''}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px', objectFit: 'cover'}}
            /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
