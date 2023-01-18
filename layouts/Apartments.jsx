import React from 'react'
import Styles from '../styles/Apartments.module.css'
import Apartmancard from '../components/Aparman_card/Aparmentcard'
import Image from 'next/image'
import Review from '../public/assets/icons/review.svg'



const Apartments = () => {
  return (
    <div id='apartments' className={Styles.container}>
      <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Apartmanjaink</h1>
        <Apartmancard />
      </div>
      <Image style={{display: 'none'}} className={Styles.homeIcon} src={Review} alt={'mobile home icon'}/>
    </div>
  )
}

export default Apartments