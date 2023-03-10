import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeContent.css'
import square_green from '../../images/Menu img.svg'
import search_img from '../../images/search_img.svg'
import pc_image from '../../images/Pc_image.png'
import welcome_img_one from '../../images/welcome_img_1.svg'
import welcome_img_two from '../../images/welcome_img_2.svg'
import welcome_img_eclipse from '../../images/welcome_img_eclipse.svg'
import welcome_img_house from '../../images/welcome_img_house.svg'
import welcome_img_heands from '../../images/welcome_img_heands.svg'

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
            <Link to='/' className='welcome__share-button'><p className='welcome__share-button-text'>EXPLORE OUR SERVICES</p></Link>
            </div>
            <div className='welcome__images'>
              <img className='welcome__images-square' src={square_green} alt='square green' />
              <img className='welcome__images-search' src={search_img} alt='search img' />
              <img className='welcome__images-pc' src={pc_image} alt='pc img' />
            </div>
        </div>
        <div className='welcome__bottom-block'>
          <ul className='welcome__lists'>
            <li className='welcome__item'>
              <div className='weclome__item-container-img'>
                <img className='welcome__item-img_one' src={welcome_img_one} alt='img one' />
                <img className='welcome__item-img_two' src={welcome_img_two} alt='img two' />
                <img className='welcome__item-img_eclipse' src={welcome_img_eclipse} alt='img eclipse' />
              </div>
              <div className='welcome__item-container-text'>
                <h3 className='welcome__item-title'>1. Choose a Service</h3>
                <p className='welcome__item-text'>
                Find anything youre looking
                for. Home cleaning, laundry, or a fitness trainer.
                Save time - get more done.
                </p>
              </div>
            </li>
            <li className='welcome__item'>
              <div className='weclome__item-container-img'>
                <img className='welcome__item-img_one_1' src={welcome_img_one} alt='img one' />
                <img className='welcome__item-img_two_1' src={welcome_img_two} alt='img two' />
                <img className='welcome__item-img_eclipse_1' src={welcome_img_house} alt='img eclipse' />
              </div>
              <div className='welcome__item-container-text'>
                <h3 className='welcome__item-title'>2. Compare Businesses</h3>
                <p className='welcome__item-text'>
                Find the provider fits you best.
                Never settle with the
                top 10% of local business.
                No fly-by-night providers.
                </p>
              </div>
            </li>
            <li className='welcome__item'>
              <div className='weclome__item-container-img'>
                <img className='welcome__item-img_one_2' src={welcome_img_one} alt='img one' />
                <img className='welcome__item-img_two_2' src={welcome_img_two} alt='img two' />
                <img className='welcome__item-img_eclipse' src={welcome_img_heands} alt='img eclipse' />
              </div>
              <div className='welcome__item-container-text'>
                <h3 className='welcome__item-title'>3. Book your provider</h3>
                <p className='welcome__item-text'>
                Easy payments with simple booking.
                Never leave the SwiftBook
                platform.Book same day or for the future.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}
