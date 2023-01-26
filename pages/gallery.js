import React from 'react'
import Head from 'next/head'
import Styles from '../styles/Gallery.module.css'
import PhotoGallery from '../components/Gallery/Gallery'




const Gallery = () => {
  return (
    <>
    <Head>
      <title>faq</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className={Styles.gallery_container}>
         <h1 className={Styles.h1}>
            GALÉRIA
          </h1>
        <PhotoGallery />
      </div>
    </>
  )
}

export default Gallery