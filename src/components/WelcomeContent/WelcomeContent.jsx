import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeContent.css'
import square_green from '../../images/Menu img.svg'
import search_img from '../../images/search_img.svg'
import pc_image from '../../images/Pc_image.png'

export default function WelcomeContent() {
  return (
    <div className='welcome'>
        <div className='welcome__top-block'>
            <div className='welcome__share'>
                <h1 className='welcome__share-title'>SEO Backlink be Ranked 1</h1>
                <p className='welcome__share-text'>
                Were the top marketplace for service providers.
                Wheter you need home cleaning or a personal trainer
                we let you compare and book top local business -
                Completely free.
                </p>
            <Link to='/' className='welcome__share-button'>EXPLORE OUR SERVICES</Link>
            </div>
            <div className='welcome__images'>
              <img className='welcome__images-square' src={square_green} alt='square green' />
              <img className='welcome__images-search' src={search_img} alt='search img' />
              <img className='welcome__images-pc' src={pc_image} alt='pc img' />
            </div>
        </div>
        <div className='welcome__bottom-block'></div>
    </div>
  )
}
