import React from 'react'
import Styles from '../styles/Apartments.module.css'
import Apartmancard from '../components/Aparman_card/Aparmentcard'

const Apartments = () => {
  return (
    <div id='apartments' className={Styles.container}>
      <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Apartmanjaink</h1>
        <Apartmancard />
      </div>
    </div>
  )
}

export default Apartments