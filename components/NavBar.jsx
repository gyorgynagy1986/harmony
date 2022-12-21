import React from 'react'
import Styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../public/assets/logoNav.svg'



const NavBar = () => {
  return (
      <div className={Styles.container}>
          <ul className={Styles.ul}>
            <li>rólunk</li>
            <li>apartmanok</li>
            <li>vélemények</li>
            <li></li>
          </ul>
          <Image
            src={logo}
            alt="Harmony apartments logo"
          />
        <div className={Styles.rightContainer}>
        <ul className={Styles.ul}>
            <li>útvonal</li>
            <li>galéria</li>
            <li>FAQ</li>
        </ul>
        <button className={Styles.btn}>foglalás</button>
        </div>
      </div>
    
  )
}

export default NavBar