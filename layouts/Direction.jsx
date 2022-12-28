import React from 'react'
import Styles from '../styles/Direction.module.css'
import Gmap from '../components/GoogleMap'

const Direction = () => {
  return (
    <div id='' className={Styles.container}>
        <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Találj ránk könnyen</h1>
        </div>
        <div className={Styles.map}><Gmap/></div>
    </div>
  )
}

export default Direction