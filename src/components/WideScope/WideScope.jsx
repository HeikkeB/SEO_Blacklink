import React from 'react'
import brands from '../../images/Dashboard brends.png'
import text_img from '../../images/text_img.svg'

export default function WideScope() {
  return (
    <div className='widescope'>
        <img className='widescope__brands-img' src={brands} alt='brands img' />
        <div className='widescope__texting'>
            <img className='widescope__text-img' src={text_img} alt='img text' />
            <h2 className='widescope__title'>Wide scope deeper understanding</h2>
        </div>
    </div>
  )
}
