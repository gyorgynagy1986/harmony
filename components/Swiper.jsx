import Image from 'next/image'
import Photo1 from '../public/assets/smallGallery/1.png'
import Photo2 from '../public/assets/smallGallery/2.jpg'
import Photo3 from '../public/assets/smallGallery/3.jpg'
import Photo4 from '../public/assets/smallGallery/4.jpg'
import Photo5 from '../public/assets/smallGallery/5.jpg'
import Photo6 from '../public/assets/smallGallery/6.jpg'



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
                src={button === '1' ? Photo1 : '' | button === '2' ?  Photo2 : '' |  button === '3' ? Photo3 : '' }
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={button === '1' ? Photo3 : '' | button === '2' ?  Photo4 : '' |  button === '3' ? Photo5 : ''}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={Photo3}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={Photo4}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={Photo5}
                alt="Harmony apartments"
                width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
        <SwiperSlide>    
            <Image
                src={Photo6}
                alt="Harmony apartments"
               width={309}
                height={245}
                style={{marginLeft: '70px', borderRadius: '4px'}}
            /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
