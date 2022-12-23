import React, { useState } from 'react'
import Styles from '../../styles/Apartments.module.css'
import Image from 'next/image'

import apartman from '../../public/assets/icons/buttons/1.svg'
import bed from '../../public/assets/icons/buttons/2.svg'
import sofa from '../../public/assets/icons/buttons/3.svg'



const Buttons = ({button, setButton }) => {
  return (
    <>
        <div onClick={()=> setButton('1')} className={`${ Styles.apCardNav_btn } ${ button === '1' ? Styles.transformActive : Styles.transformIncative}`}>
            <div className={Styles.btn_content}> <Image src={apartman} alt={'apartman icon'}/><p>Egy hálószobás apartman</p></div>
            <div className={Styles.btn_content}> <Image src={bed} alt={'bed icon'}/><p>1 kétszemélyes ágy</p></div>
            <div className={`${Styles.btn_content} ${Styles.btn_content_prefix}`}> <Image src={sofa} alt={'sofa icon'}/><p>1 kanapéágy</p></div>
        </div>
       
        <div onClick={()=> setButton('2')} className={`${ Styles.apCardNav_btn } ${ button === '2' ? Styles.transformActive : Styles.transformIncative}`}>
            <div className={Styles.btn_content}> <Image src={apartman} alt={'apartman icon'}/><p>Két hálószobás  apartman</p></div>
            <div className={Styles.btn_content}> <Image src={bed} alt={'bed icon'}/><p>1 kétszemélyes ágy</p></div>
            <div className={Styles.btn_content}> <Image src={bed} alt={'bed icon'}/><p>1 kétszemélyes ágy</p></div>
        </div>
        
        <div onClick={()=> setButton('3')} className={`${ Styles.apCardNav_btn } ${ button === '3' ? Styles.transformActive : Styles.transformIncative}`}>
            <div className={Styles.btn_content}> <Image src={apartman} alt={'apartman icon'}/><p>Egy hálószobás  apartman</p></div>
            <div className={Styles.btn_content}> <Image src={bed} alt={'bed icon'}/><p>1 kétszemélyes ágy</p></div>
        </div>
    </>
  )
}

export default Buttons