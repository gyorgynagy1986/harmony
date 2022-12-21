import React from 'react'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Headerphoto from '../public/assets/headerPhoto.png'

const text = {
    header1: "Harmony",
    header2: "Apartments",
    btn: "kapcsolat",
    text: "Lorem ipsum dolor sit amet consectetur.Et urna tempor justo egestas diam mattis auctor.Etiam ullamcorper mi pretium at aenean in tempus dolor"
}


const Header = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.headerContainer}>
            <div className={Styles.leftContainer}>
               <h1 className={Styles.h1}>{text.header1}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.header2}</h1>
               <button className={Styles.btn}>{text.btn}</button>
               <p className={Styles.txt}><span className={Styles.span}> Lorem ipsum dolor sit</span> amet consectetur.Et urna tempor justo egestas diam mattis auctor.Etiam ullamcorper mi pretium at aenean in tempus dolor</p>      
            </div>
            <div className={Styles.rightContainer}>
                    <Image
                        className={Styles.image}
                        src={Headerphoto}
                        alt="Harmony apartments room"
                    />     
            </div>

        </div>
    </div>
  )
}

export default Header