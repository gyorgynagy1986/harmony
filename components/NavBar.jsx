import React from 'react'
import Styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../public/assets/logo-nav.svg'
import Link from 'next/link'
import Modal from '../components/ModalBooking'
// import styled from 'styled-components'

// const RedLink = styled.a`
//   color: red;
// `

const NavBar = () => {
  return (
      <div className={Styles.containerNav}>
          <div className={Styles.prefix_ul}>
            <ul className={Styles.ul}>
                <li><Link style={{color: '#515151'}} href="/">főoldal</Link></li>
                <li><Link style={{color: '#515151'}} href="/about">rólunk</Link></li>
                <li><Link style={{color: '#515151'}} href="/gallery">galéria</Link></li>
                <li><Link style={{color: '#515151'}} href="/">élmények</Link></li>
                <li><Link style={{color: '#515151'}} href="/#apartments">apartmanok</Link></li>
            </ul>
          </div>
          <Link href="/" style={{width: 'auto', height: '100%'}}>
          <Image
            className={Styles.logo}
            src={logo}
            alt="Harmony apartments logo"
            priority={true}
            />
          </Link>
        <div className={Styles.rightContainer}>
        <ul className={Styles.ul}>
            <li><Link style={{color: '#515151'}} href="/">ajándék</Link></li>
            <li><Link style={{color: '#515151'}} href="/#reviews">vélemények</Link></li>
            <li><Link style={{color: '#515151'}} href="/">díjak</Link></li>
        </ul>
        <button className={Styles.btn}>< Modal/></button>
        </div>
      </div>
  )
}

export default NavBar