import Image from 'next/image'
import Styles from '../styles/Reviews.module.css'
import Stars from '../public/assets/icons/stars.svg'
import Qote from '../public/assets/icons/qote.svg'

const textContent = [
    {name: 'Bettina', counry:'Magyarország', text:'A szállásadó nagyon kedves és segítőkész volt, a szállás nagyon modernül volt felszerelve, szuperül volt berendezve, szép és lakájos volt. A szállás elhelyezkedése is tökéletes, minden közel van hozzá, gyalog is elérhető onnan minden, ami kell.'},
    {name: 'Erika', counry:'Magyarország', text:'Nagyon szép , igényes szállás. rendkívül jó felszereltség. Több, kényelmet szolgáló bekészítés. Nagyon kedves, segítőkész tulajdonos.'},
    {name: 'Vojin', counry:'Szerbia', text:'Nagyon szép és tiszta hely. Anika nagyon segítőkész volt! Közel volt a Morahalom uszodákhoz.. Köszönjük!'},
    {name: 'Dóra', counry:'Magyarország', text:'Tökéletes tisztaság, nagyon szép szoba! Mindennel fel van szerelve, a kávétól a mosókapszuláig mindenre gondoltak! A fürdő pedig szemben található,így tökéletes helyen van az apartman! A szállásadó nagyon kedves! Tökéletes választás, ha valaki Mórahalomon keres szállást!'},    
]

const ReviewCard = ( {changeReview} ) => {

0
  return (
    <div className={Styles.review_card_back}>
        <div className={Styles.review_card_front}>
            <div className={Styles.review_card_header}>
                <h2>{textContent[changeReview].name}</h2>
                <Image src={Stars} alt={'review stars'}/>
            </div>
             <p className={Styles.review_card_contry}>{textContent[changeReview].counry}</p>
            <Image src={Qote} alt={'review stars'}/>
            <p className={Styles.review_card_text}>{textContent[changeReview].text}</p>    
        </div>
    </div>
  )
}

export default ReviewCard