import Styles from '../styles/Nav.module.css'
import NavBar from './NavBar'
import Menu from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';
import { useState } from 'react'
import MobileMenu from '../components/MobileMenu'


const Nav = () => {

  const [mobileMenu, setMobileMenu] = useState(false);


  const mobileMenuOpen = () => {
    setMobileMenu(true)
  }

  const mobileMenuClose = () => {
    setMobileMenu(false)
  }


  return (
    <>
      <nav className={Styles.nav}>
      <div className={Styles.menu_container}>{!mobileMenu ? <Menu onClick={mobileMenuOpen} color="action" sx={{ fontSize: 40 }} /> : <MenuOpen onClick={mobileMenuClose}  color="action" sx={{ fontSize: 40 }} />}</div>
      {mobileMenu ? <MobileMenu mobileOff={setMobileMenu} /> : '' }
          <NavBar />
      </nav>
    </>
  )
}

export default Nav