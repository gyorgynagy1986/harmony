import React, { useState } from 'react'
import Styles from '../styles/Contact.module.css'
import ContactGetform from '../components/ContactGetform'
import Image from 'next/image'
import Link from 'next/link'
import booking from '../public/assets/booking.svg'
import szallas from '../public/assets/szallas.svg'

const Contact = () => {
  
const [title, setTitle] = useState(false);

const textcontent = {
  title:'Kedves Érdeklődő' ,
  titleAfterSend:'Köszönjük a Megkeresését :)',
  text: 'Lorem ipsum dolor sit amet consectetur. Suscipit vestibulum eget lorem lorem lectus odio. Sed nec quis morbi commodo malesuada mauris mi sed. Hendrerit habitant interdum facilisis lectus vitae.',
  textSent: 'Levelét sikeresen továbbítottuk. A lehető leghamarabb felvesszük önnel a kapcsolatot. Kösöznjük a türelmét.'
};

  return (
    <div id='' className={Styles.container}>
        <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Lépj velünk Kapcsolatba</h1>
        <div className={Styles.infocontainer}>
            <div className ={Styles.infocontainerText}>
              <div>
                <h2>{title === false ? textcontent.title : textcontent.titleAfterSend}</h2>
                <p>{title === false ? textcontent.text : textcontent.textSent}</p>
              </div>
              
              <div className ={Styles.infocontainerTextSmall}>
                <div className ={Styles.smallCont}>
                  <p>Foglalás</p>
                  <h4>+36 70 884 0221</h4>
                </div>
                <div className ={Styles.smallCont}>
                  <p>Email cím</p>
                  <h4>email@email.hu</h4>
                </div>
                <div className ={Styles.smallCont}>
                  <p>Cím</p>
                  <h5>6782 Mórahalom, <br/>Szegedi út 20. Magyarország</h5>
                </div>
               <div className={Styles.imageContainer} >
                  <Link href="https://www.booking.com/">
                      <Image  className ={Styles.booking}  src={booking} alt={'logos, bookind and szallas.hu'} />
                  </Link>
                  <Link href="https://szallas.hu/">
                      <Image  className ={Styles.szallas} src={szallas} alt={'logos, bookind and szallas.hu'} />
                  </Link>
               </div> 
              </div>
            </div>
            <div className ={Styles.infocontainerinput}>
              <ContactGetform btnColorHandeler={title} afterSernd={setTitle} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact