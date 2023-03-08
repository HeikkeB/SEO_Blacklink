import React from 'react'
import './Promo.css'
import promo_pink from '../../images/promo_pink.svg'
import promo_purple from '../../images/promo_purple.svg'
import promo_blur_one from '../../images/blur_image_1.svg'
import promo_blur_two from '../../images/blur_image_2.svg'
import promo_blur_yellow from '../../images/blur_image_yellow.svg'
import promo_blur_three from '../../images/blur_image_3.svg'

export default function Promo() {
  return (
    <div className='promo'>
        <div className='promo__blobs'>
            <img className='promo__blobs-pink' src={promo_pink} alt='blobs pink' />
            <img className='promo__blobs-purple' src={promo_purple} alt='blobs purple' />
        </div>
        <div className='promo__blur-image'>
            <img className='promo__blur-image_w' src={promo_blur_one} alt='blur w' />
            <img className='promo__blur-image_c' src={promo_blur_two} alt='blur c' />
            <img className='promo__blur-image_square' src={promo_blur_three} alt='blur square' />
            <img className='promo__blur-image_yellow' src={promo_blur_yellow} alt='blur yellow' />
        </div>
    </div>
  )
}
