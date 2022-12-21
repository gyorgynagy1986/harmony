import React from 'react'
import Styles from '../styles/Apartments.module.css'
import Modal from './Modal'

const Aparmentcard = () => {
  return (
    <div className={Styles.cardContainer}>
        <div className={Styles.apCardNav}>

            <div className={Styles.apCardNav_text}>

                <h2 className={Styles.h2}>Árak</h2>
                < Modal />

            </div>
           
            <div className={Styles.apCardNav_btnContainer}>
                <div className={Styles.apCardNav_btn}></div>
                <div style={{transform: 'translateY(-15px)'}}className={Styles.apCardNav_btn}></div>
                <div className={Styles.apCardNav_btn}></div>
            </div>
        </div>

        <div className={Styles.card}>

        </div>
    </div>
  )
}

export default Aparmentcard