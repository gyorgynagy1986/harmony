import React from 'react'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Headerphoto from '../public/assets/headerPhoto.png'

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
        <div className={Styles.headerContainer}>
            <div className={Styles.leftContainer}>
               <h1 className={Styles.h1}>{text.header1}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.header2}</h1>
               <button className={Styles.btn}>{text.btn}</button>
               <p className={Styles.txt}><span className={Styles.span}> {text.firstItalic}</span>{text.text}</p>      
            </div>
            <div className={Styles.rightContainer}>
                    <Image
                        className={Styles.image}
                        src={Headerphoto}
                        alt="Harmony apartments room"
                    />     
            </div>

        </div>
    </header>
  )
}

export default Header