import React, { useState } from 'react'
import Styles from '../styles/Reviews.module.css'
import ReviewCard from '../components/ReviewCard'



const Reviews = () => {

    const [changeReview, setChangeReview] = useState(0);


    return (
    <div id='reviews' className={Styles.container}>
        <div className={Styles.contentContainer}>
        <h1 className={Styles.h1}>Vélemények rólunk</h1>
        </div>
        <div className={Styles.review_card_container}>
         <ReviewCard changeReview={changeReview} />
        </div>
        <div className={Styles.review_card_toogle_btns}>
            <span onClick={()=>setChangeReview(0)} className={ `${Styles.underline_transition} ${changeReview === 0 ? Styles.underline : ''}` }>1</span>
            <span onClick={()=>setChangeReview(1)} className={changeReview === 1 ? Styles.underline : '' }>2</span>
            <span onClick={()=>setChangeReview(2)} className={changeReview === 2 ? Styles.underline : '' }>3</span>
            <span onClick={()=>setChangeReview(3)} className={changeReview === 3 ? Styles.underline : '' }>4</span>
        </div>
    </div>
  )
}

export default Reviews