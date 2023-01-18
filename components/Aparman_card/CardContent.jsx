import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/Apartments.module.css'
import CardContentPar from './CardContentPar'


import couple from '../../public/assets/icons/couple.svg'
import couples from '../../public/assets/icons/couples.svg'
import family from '../../public/assets/icons/family.svg'
import sofa from '../../public/assets/icons/sofa.svg'

import icon9 from '../../public/assets/icons/9.svg'

const apartmentsTitle = {
  a1: 'Egy hálószobás apartman',
  a2: 'Két hálószobás apartman',
  a3: 'Egy hálószobás apartman'
}

const beds = {
  b1:'1 kétszemélyes ágy',
  b2: '1 kanapé-ágy'
}

const CardContent = ( {button} ) => {

  let setTitle = '';
  let memberIcon = '';

  if(button === '1') {
    setTitle = apartmentsTitle.a1
    memberIcon = family;
  } else if (button === '2') {
    setTitle = apartmentsTitle.a2
    memberIcon = couples;
  } else  {
    setTitle = apartmentsTitle.a3
    memberIcon = couple;
  }


  <Image src={couple} alt={'szoba egy pár részére'}/>

  return (
   <>
      <div className={Styles.h2Cardcontent_container}>
        <div className={Styles.h2Cardcontent}> <h2 className={Styles.h2title}>{setTitle}</h2> </div>
        <Image className={Styles.image_members} src={memberIcon} alt={'szoba család részére'}/>
      </div>
      <div className={Styles.icon_containers_separate}>
        <div className={Styles.icon_container_items}><Image src={icon9}/><p>{beds.b1}</p></div>
        <div className={Styles.icon_container_items}>
            {button === '1' ? <Image src={sofa}/> : '' }
            {button === '1' ?  <p>{beds.b2}</p> : '' }
            {button === '2' ? <Image src={icon9}/> : '' }
            {button === '2' ? <p>{beds.b1}</p> : '' }
            {button === '3' ? '' : '' }
          </div>
      </div>
      <div className={Styles.h3Cardcontent_container}>
      <h3 className={Styles.h3Cardcontent}>Főbb paraméterek :</h3>
      </div>
      <div>
       <CardContentPar />
      </div>
   </>
  )
}

export default CardContent