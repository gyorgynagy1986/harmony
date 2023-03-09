import React, { useRef, useState } from 'react';
import Style from '../styles/MobileMenu.module.css'
import Styles from '../styles/MobileMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logomain.png'
import Modal from '../components/ModalBookingMobile'


const MobileMenu = ({mobileOff}) => {

const slideHandeler = () => {
  mobileOff(false)
}

  return (
    <div className={Style.container}>
       <div className={Styles.menu_container}>
            <ul className={Styles.ulDrop}>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/">főoldal</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/about">rólunk</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/gallery">galéria</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/">élmények</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/#apartments">apartmanok</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/">ajándék</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/#reviews">vélemények</Link></li>
                <li><Link onClick={slideHandeler} style={{color: '#515151'}} href="/">díjak</Link></li>
            </ul>
          <Modal />
        </div>
      </div>
  )
}

export default MobileMenu