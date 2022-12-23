import React from 'react'
import Styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../public/assets/logoNav.svg'
import Link from 'next/link'
// import styled from 'styled-components'

// const RedLink = styled.a`
//   color: red;
// `

const NavBar = () => {
  return (
      <div className={Styles.container}>
          <div className={Styles.prefix_ul}>
            <ul className={Styles.ul}>
                <li><Link style={{color: '#515151'}} href="/about">rólunk</Link></li>
                <li><Link style={{color: '#515151'}} href="/#apartments">apartmanok</Link></li>
                <li><Link style={{color: '#515151'}} href="/#reviews">vélemények</Link></li>
            </ul>
          </div>
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