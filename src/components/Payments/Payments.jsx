import React from 'react'
import { Link } from 'react-router-dom'
import './Payments.css'
import decor_1 from '../../images/decor_1.svg'
import decor_2 from '../../images/decor_2.svg'

export default function Payments() {
  return (
    <div className='payments'>
        <div className='payments__info'>
            <h2 className='payments__title'>Not satisfied? No payment necessary.</h2>
            <p className='payments__text'>We let you test our complete suite of features - with zero zero risk.</p>
            <p className='payments__text_two'>60 Day SERP rist guarantee. <br></br>Receive a full refund if we dont perform.</p>
            <Link className='link__button'>TRY OUR SERVICE</Link>
        </div>
        <div className='payments__down'>
            <h3 className='payments__decor-title'>Your first booking - with a discount</h3>
            <p className='payments__decor-text'>Well help you out with your first booking /// $10 to get started.</p>
            <Link className='link__button payments__down_link'>TRY OUT SWIFTBOOK</Link>
        </div>
            <div className='payments__decor'>
                <img className='payments__decor-wave_one' src={decor_1} alt='decor' />
                <img className='payments__decor-wave_two' src={decor_2} alt='decor' />
            </div>
    </div>
  )
}
