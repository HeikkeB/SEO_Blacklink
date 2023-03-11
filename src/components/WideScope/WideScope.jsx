import React from 'react'
import { Link } from 'react-router-dom'
import './WideScope.css'
import brands from '../../images/Dashboard brends.png'
import text_img from '../../images/text_img.svg'

export default function WideScope() {
  return (
    <div className='widescope'>
        <img className='widescope__brands-img' src={brands} alt='brands img' />
        <div className='widescope__texting'>
            <img className='widescope__text-img' src={text_img} alt='img text' />
            <h2 className='widescope__title'>Wide scope<br></br> deeper understanding</h2>
            <p className='widescope__text'>Consectetur adipiscing elit.</p>
            <p className='widescope__text'>
              Tellus luctus sed habitasse quis ipsum massa cursus et. 
              Fringilla tincidunt amet, viverra a elit imperdiet bibendum leo. 
              Auctor rutrum maecenas ut risus integer velit dictum massa amet.
            </p>
            <p className='widescope__text'>
              Sed vestibulum urna pulvinar ultricies turpis hendrerit scelerisque quam. 
              Bibendum ac viverra porttitor magna. 
              Neque, ut lacus, aliquam pretium volutpat porttitor mauris neque. 
            </p>
            <p className='widescope__text'>
              Quis a sed id duis cras tellus mauris pharetra. 
            </p>
            <Link className='widescope__link' to='/'>Companies weve transformed →</Link>
        </div>
    </div>
  )
}
