import React from 'react'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Headerphoto from '../public/assets/headerPhoto.png'
import Mbhome from '../public/assets/icons/mobileHome.svg'


const text = {
    header1: "Harmony",
    header2: "Apartments",
    btn: "kapcsolat",
    firstItalic: 'Lorem ipsum dolor sit',
    text: "amet consectetur. Et urna tempor justo egestas diam mattis auctor.Etiam ullamcorper mi pretium at aenean in tempus dolor. Etiam ullamcorper mi pretium at aenean in tempus dolor"
}

const Header = () => {
  return (
    <header className={Styles.container}>
        <h1 style={{display: 'none'}} className={Styles.h1mobile}>Harmony<br/>Apartments </h1>
        <div className={Styles.headerContainer}>
            <div className={Styles.leftContainer}>
               <h1 className={Styles.h1}>{text.header1}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.header2}</h1>
               <p className={Styles.txt}><span className={Styles.span}> {text.firstItalic}</span>{text.text}</p>      
               <button className={Styles.btn}>{text.btn}</button>
            </div>
            <div className={Styles.rightContainer}>
                    <Image
                        priority={true}
                        className={Styles.image}
                        src={Headerphoto}
                        alt="Harmony apartments room"
                    />     
            </div>
        </div>
      <Image style={{display: 'none'}} className={Styles.homeIcon} src={Mbhome} alt={'mobile home icon'}/>
    </header>
  )
}

export default Header