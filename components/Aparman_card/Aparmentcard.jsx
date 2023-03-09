import React, { useState } from 'react'
import Styles from '../../styles/Apartments.module.css'
import Modal from '../Modal'
import CardContent from './CardContent'
import Swiper from '../Swiper'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ApButtons from './Buttons'

const Aparmentcard = ( ) => {
const [button, setButton] = useState('1');   

  
  return (
    <div className={Styles.cardContainer}>
        <div className={Styles.apCardNav}>

            <div className={Styles.apCardNav_text}>
                <h2 className={Styles.h2}>Árak</h2>
                <Modal button={button}  />
            </div>
            <div className={Styles.apCardNav_btnContainer}>
                <ApButtons setButton={setButton} button={button}  />
            </div>
        </div>

        <div className={Styles.card}>
            <div className={Styles.card_container}>
                <div className={Styles.card_gallery_container} >
                    <div className={Styles.icon_left}><Icon disabled size='big' color='brown' name='arrow alternate circle left' /></div>
                    <Swiper button={button}/>  
                    <div className={Styles.icon_right}><Icon disabled  size='big' color='brown' name='arrow alternate circle right' /></div>
                 </div>
                <div className={Styles.card_content}>
                    <CardContent button={button}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aparmentcard