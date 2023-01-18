import Styles from '../styles/Reviews.module.css'
import ReviewCardDesktop from '../components/ReviewCardDesktop'
import Stars2 from '../public/assets/icons/starsMiddle.svg'
import Stars from '../public/assets/icons/stars.svg'


const textContent = [
    {name: 'Bettina', counry:'Magyarország', text:'A szállásadó nagyon kedves és segítőkész volt, a szállás nagyon modernül volt felszerelve, szuperül volt berendezve, szép és lakájos volt. A szállás elhelyezkedése is tökéletes, minden közel van hozzá, gyalog is elérhető onnan minden, ami kell.'},
    {name: 'Erika', counry:'Magyarország', text:'Nagyon szép , igényes szállás. rendkívül jó felszereltség. Több, kényelmet szolgáló bekészítés. Nagyon kedves, segítőkész tulajdonos.'},
    {name: 'Vojin', counry:'Szerbia', text:'Nagyon szép és tiszta hely. Anika nagyon segítőkész volt! Közel volt a Morahalom uszodákhoz.. Köszönjük!'},
    {name: 'Dóra', counry:'Magyarország', text:'Tökéletes tisztaság, nagyon szép szoba! Mindennel fel van szerelve, a kávétól a mosókapszuláig mindenre gondoltak! A fürdő pedig szemben található,így tökéletes helyen van az apartman! A szállásadó nagyon kedves! Tökéletes választás, ha valaki Mórahalomon keres szállást!'},    
]



const NewReviewModule = () => {
  return (
    <div id='reviews' className={Styles.container}>
        <div className={Styles.contentContainer}>
          <h1 className={Styles.h1}>Vélemények rólunk</h1>
        </div>
        <div className={Styles.review_card_container}>
            <ReviewCardDesktop stars={Stars} name={textContent[0].name} country={textContent[0].counry}  text={textContent[0].text}/>
            <ReviewCardDesktop stars={Stars2} name={textContent[1].name} country={textContent[1].counry}  text={textContent[1].text}/>
            <ReviewCardDesktop stars={Stars} name={textContent[3].name} country={textContent[3].counry}  text={textContent[3].text}/>
        </div>
    </div>
  )
}

export default NewReviewModule