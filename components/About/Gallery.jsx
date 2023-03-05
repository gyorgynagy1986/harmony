import React, { useState } from 'react'
import Styles from '../../styles/About.module.css'
import { useRouter } from 'next/router'


import Image from 'next/image'
import Photo1 from '../../public/assets/aboutGallery/1.png'
import Photo2 from '../../public/assets/aboutGallery/2.png'
import Photo3 from '../../public/assets/aboutGallery/3.png'
import Photo4 from '../../public/assets/aboutGallery/4.png'
import Photo5 from '../../public/assets/aboutGallery/5.png'

const Gallery = () => {


      const router = useRouter()

      const handleClick = () => {
      router.push('/gallery')
      }


  return (
   <>
   <div onClick={handleClick} className={Styles.gallery_container}>
    <Image
          src={Photo1}
          alt="Harmony apartments"
          className={Styles.gallery_img1}  
    /> 
     <Image
          src={Photo2}
          alt="Harmony apartments"
          className={Styles.gallery_img2}  

    /> 
     <Image
          src={Photo3}
          alt="Harmony apartments"
          className={Styles.gallery_img3}  
    /> 
     <Image
          src={Photo4}
          alt="Harmony apartments"
          className={Styles.gallery_img4}  

    /> 
     <Image
          src={Photo5}
          alt="Harmony apartments"
          className={Styles.gallery_img5}  
    /> 
  </div>
  </>
  )
}

export default Gallery