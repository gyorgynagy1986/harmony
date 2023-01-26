import React from 'react'
import Styles from '../styles/Nav.module.css'
import NavBar from './NavBar'



const Nav = () => {
  return (
    <nav className={Styles.nav}>
        <NavBar />
    </nav>
  )
}

export default Nav