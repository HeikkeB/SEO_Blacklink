import React from 'react'
import './Clients.css'
import clients from '../../images/clients_archieve.png'
import wwl from '../../images/wwl.svg'
import intuit from '../../images/intuit.svg'
import mondelez from '../../images/Mondelez.svg'
import ome from '../../images/ome.svg'
import bat from '../../images/bat.svg'


export default function Clients() {
  return (
    <div className='clients'>
        <h2 className='clients__title'>Weve helped over 600 clients achieve</h2>
        <img className='clients__clients-img' src={clients} alt='clients' />
        <ul className='clients__list'>
            <li className='clients__item'>
            <div className='clients__item-container'>
                <img className='clients__item-img' src={wwl} alt='item img' />
            </div>
            </li>
            <li className='clients__item'>
            <div className='clients__item-container'>
                <img className='clients__item-img' src={intuit} alt='item img' />
            </div>
            </li>
            <li className='clients__item'>
            <div className='clients__item-container'>
                <img className='clients__item-img' src={mondelez} alt='item img' />
            </div>
            </li>
            <li className='clients__item'>
            <div className='clients__item-container'>
                <img className='clients__item-img' src={ome} alt='item img' />
            </div>
            </li>
            <li className='clients__item'>
            <div className='clients__item-container'>
                <img className='clients__item-img' src={bat} alt='item img' />
            </div>
            </li>
        </ul>
    </div>
  )
}
