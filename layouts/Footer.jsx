import React from 'react'
import Styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

import facebook from '../public/assets/icons/f.svg'
import szallas from '../public/assets/icons/sz.svg'
import booking from '../public/assets/icons/b.svg'
import logo from '../public/assets/icons/logoBlack.svg'



const Footer = () => {
  return (
    <footer>
      <div className={Styles.container}>

        <div className={Styles.content}>
          <h3>email@email.com</h3>
          <h4>+36 70 884 0221</h4>
          <h5>6782 Mórahalom, Szegedi út 20. <br/>Magyarország</h5>
          <div className={Styles.logoContainer} >
            <Image src={facebook} alt={'facebook'}/>
            <Image src={booking} alt={'booking'}/>
            <Image src={szallas} alt={'szallas'}/>
          </div>
        </div>

        <div className={Styles.footerContent}>
        <div>
        <Image src={logo} alt={'logo'}/>
        </div>
          <div>
            <ul className={Styles.ul}>
              <li> <Link rel="stylesheet" href="/faq" FAQ > FAQ</Link></li>
              <li> <Link rel="stylesheet" href="afesz" FAQ > ÁFÉSZ</Link></li>
              <li> <Link rel="stylesheet" href="adatkezeles" FAQ > ADATKEZELÉS</Link></li>
            </ul>
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer