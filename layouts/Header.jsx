import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Headerphoto from '../public/assets/headerPhoto.png'
import Mbhome from '../public/assets/icons/mobileHome.svg'
import { useRouter } from 'next/router'



const text = {
    header1: "Harmony",
    header2: "Apartments",
    btn: "kapcsolat",
    firstItalic: "A harmony apartments kiváló hely",
    text: ", ahol a kényelem, az otthonosság és a nyugodt pihenés találkozik. Egy csodás kis helyszín Mórahalom központjában , a belváros szívében."
}


const Header = () => {

  const router = useRouter()

  const handleClick = () => {
  router.push('/#contact')
  }

  return (
    <header className={Styles.container}>
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