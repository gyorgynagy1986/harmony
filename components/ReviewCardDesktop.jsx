import Image from 'next/image'
import Styles from '../styles/Reviews.module.css'
import Qote from '../public/assets/icons/qote.svg'


const ReviewCard = ( {name, country, text, stars}  ) => {

0
  return (
    <div className={Styles.review_card_back}>
        <div className={Styles.review_card_front}>
            <div className={Styles.review_card_header}>
                <h2>{name}</h2>
                <p className={Styles.review_card_contry}>{country}</p>
                <Image className={Styles.review_card_stars} src={stars} alt={'review stars'}/>
            </div>
            <Image className={Styles.review_card_qt} src={Qote} alt={'review stars'}/>
            <p className={Styles.review_card_text}>{text}</p>    
        </div>
    </div>
  )
}

export default ReviewCard