import React from 'react'
import Styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import facebook from '../public/assets/icons/f.svg'
import szallas from '../public/assets/icons/sz.svg'
import booking from '../public/assets/icons/b.svg'
import logo from '../public/assets/logoBlack.png'



const Footer = () => {
  return (
    <footer>
      <div className={Styles.container}>

        <div className={Styles.content}>
          <h3>email@email.com</h3>
          <h4>+36 70 884 0221</h4>
          <h5>6782 Mórahalom, Szegedi út 20. <br/>Magyarország</h5>
          <div className={Styles.socialContainer} >
          <Link rel="stylesheet" href="https://www.facebook.com/harmonyapartmentsmorahalom"><Image src={facebook} alt={'facebook'}/></Link> 
          <Link rel="stylesheet" href="https://www.booking.com/Share-c6ODDK"> <Image src={booking} alt={'booking'}/></Link> 
          <Link rel="stylesheet" href="https://szallas.hu/harmony-apartments-morahalom?gclid=Cj0KCQiAz9ieBhCIARIsACB0oGJTjxpl3sh3C1NqB7aviswXP18yktaFereEIDgoPI8SW8eiw0V71MIaAok5EALw_wcB&utm_source=clipboard&utm_medium=site&utm_campaign=share"> <Image src={szallas} alt={'szallas'}/></Link> 
          </div>
        </div>

        <div className={Styles.footerContent}>
        <div>
        <Link href="/" style={{width: 'auto', height: '100%'}}>
           <Image className={Styles.logo} src={logo} alt={'logo'}/>  
        </Link>
        </div>
          <div>
            <ul className={Styles.ul}>
              <li> <Link rel="stylesheet" href="/faq"  > FAQ</Link></li>
              <li> <Link rel="stylesheet" href="afesz"  > ÁFÉSZ</Link></li>
              <li> <Link rel="stylesheet" href="adatkezeles"  > ADATKEZELÉS</Link></li>
            </ul>
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer