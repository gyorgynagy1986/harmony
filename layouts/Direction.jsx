import React from 'react'
import Styles from '../styles/Direction.module.css'
import Mapbox from '../components/Mapbox'
import Modal from '../components/ModalAddress'

//<Gmap/>
// <Mapbox/>
// <GoogleMapNew/>

const Direction = () => {
  return (
    <div id='map' className={Styles.container}>
        <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Találj ránk könnyen</h1>
        <div className={Styles.nav}>
            <ul>
                <li>Útvonalterv</li>
                <li>Helyi látványosságok</li>
            </ul>
           <span className={Styles.nav.modal}>< Modal/></span>
        </div>
        </div>
        <div className={Styles.map}>
        <Mapbox/>
        </div>
    </div>
  )
}

export default Direction