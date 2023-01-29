import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Headerphoto from '../public/assets/headerPhoto.png'
import Mbhome from '../public/assets/icons/mobileHome.svg'
import MobileMenu from '../components/MobileMenu'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Menu from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';



const text = {
    header1: "Harmony",
    header2: "Apartments",
    btn: "kapcsolat",
    firstItalic: 'Lorem ipsum dolor sit',
    text: "amet consectetur. Et urna tempor justo egestas diam mattis auctor.Etiam ullamcorper mi pretium at aenean in tempus dolor. Etiam ullamcorper mi pretium at aenean in tempus dolor"
}


const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuOpen = () => {
    setMobileMenu(true)
  }

  const mobileMenuClose = () => {
    setMobileMenu(false)
  }

  const router = useRouter()

  const handleClick = () => {
  router.push('/#contact')
  }

  return (
    <header className={Styles.container}>
      <div className={Styles.menu_container}>{!mobileMenu ? <Menu onClick={mobileMenuOpen} color="action" sx={{ fontSize: 40 }} /> : <MenuOpen onClick={mobileMenuClose}  color="action" sx={{ fontSize: 40 }} />}</div>
      {mobileMenu ? <MobileMenu mobileOff={setMobileMenu}  /> : '' }
        <h1 style={{display: 'none'}} className={Styles.h1mobile}>Harmony<br/>Apartments </h1>
        <div className={Styles.headerContainer}>
            <div className={Styles.leftContainer}>
               <h1 className={Styles.h1}>{text.header1}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.header2}</h1>
               <p className={Styles.txt}><span className={Styles.span}> {text.firstItalic}</span>{text.text}</p>      
               <button onClick={handleClick} className={Styles.btn}>{text.btn}</button>
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

export default Header;