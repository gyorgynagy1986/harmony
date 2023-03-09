import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/Apartments.module.css'

import icon1 from '../../public/assets/icons/1.svg'
import icon2 from '../../public/assets/icons/2.svg'
import icon3 from '../../public/assets/icons/3.svg'
import icon4 from '../../public/assets/icons/4.svg'
import icon5 from '../../public/assets/icons/5.svg'
import icon6 from '../../public/assets/icons/6.svg'
import icon7 from '../../public/assets/icons/7.svg'
import icon8 from '../../public/assets/icons/8.svg'
import icon9 from '../../public/assets/icons/towel.svg'
import icon10 from '../../public/assets/icons/camera.svg'


const CardContentPar = ( {button} ) => {

      console.log(button, 'from card content')

  return (
    <>
      <div className={Styles.icon_containers}>
            <div className={Styles.icon_container_items}><Image src={icon4}/><p>{button === '3' ? '18 m2' : '' | button === '2' ? '41 m2' : '' | button === '1' ? '32 m2' : ''}</p></div>
            <div className={Styles.icon_container_items}><Image src={icon8}/><p>Szobából nyíló fürdőszoba</p></div>
      </div>
      <div className={Styles.icon_containers}>
            <div className={Styles.icon_container_items}><Image src={icon2}/><p>Kávéfőző</p></div>
            <div className={Styles.icon_container_items}><Image src={icon7}/><p>Kertre nyíló kilátás</p></div>
      </div>
      <div className={Styles.icon_containers}>
            <div className={Styles.icon_container_items}><Image src={icon3}/><p>Saját konyha</p></div>
            <div className={Styles.icon_container_items}><Image src={icon6}/><p>Klíma</p></div>
      </div>
      <div className={Styles.icon_containers}>
            <div className={Styles.icon_container_items}><Image src={icon1}/><p>Síkképernyős TV</p></div>
            <div className={Styles.icon_container_items}><Image src={icon5}/><p>Ingyenes korlátlan WIFI</p></div>
      </div>
      
      <div className={Styles.icon_containers}>
            <div className={Styles.icon_container_items}><Image src={icon9}/><p>3db törölköző</p></div>
            <div className={Styles.icon_container_items}><Image src={icon10}/><p> kamerával őrzött parkoló</p></div>
      </div>
  </>
  )
}

export default CardContentPar