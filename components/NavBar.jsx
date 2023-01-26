import React from 'react'
import Styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
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
          <Link href="/" style={{width: 'auto', height: '100%'}}>
          <Image
            className={Styles.logo}
            style={{ height: 'auto'}}
            src={logo}
            alt="Harmony apartments logo"
          />
          </Link>
        <div className={Styles.rightContainer}>
        <ul className={Styles.ul}>
            <li><Link style={{color: '#515151'}} href="/#map">útvonal</Link></li>
            <li><Link style={{color: '#515151'}} href="/gallery">galéria</Link></li>
            <li>FAQ</li>
        </ul>
        <button className={Styles.btn}>foglalás</button>
        </div>
      </div>
    
  )
}

export default NavBar