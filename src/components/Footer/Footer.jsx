import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import insta from '../../images/insta.svg'
import linkid from '../../images/linkid.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <ul className='footer__menu'>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>COMPANY</h3>
                <div className='footer__list-title_line'></div>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>ABOUT</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>CONTACT</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>PRESS</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>TEAM</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>BLOG</Link>
                </li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>CUSTOMERS</h3>
                <div className='footer__list-title_line'></div>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>SERVICE</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>MY ACCOUNT</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>SUPPORT</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>FAQ</Link>
                </li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>PROVIDERS</h3>
                <div className='footer__list-title_line'></div>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>SERVICES</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>CASE STUDIES</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>SUPPORT</Link>
                </li>
                <li className='footer__list-item'>
                    <Link className='footer__list-link' to='/'>FAQ</Link>
                </li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>RECENT BLOG</h3>
                <div className='footer__list-title_line'></div>
                <li className='footer__list-item'>
                    <p className='footer__list-text'>UX Design</p>
                    <p className='footer__list-text'>
                    Lorem ipsum is simply dumy texts is
                    widely used in the design.
                    <Link className='footer__list-text_link' to='/'>Read More</Link></p>  
                </li>
                <li className='footer__list-item'>
                    <p className='footer__list-text'>UX Design</p>
                    <p className='footer__list-text'>
                    Lorem ipsum is simply dumy texts is
                    widely used in the design.
                    <Link className='footer__list-text_link' to='/'>Read More</Link></p>  
                </li>
            </ul>
            <ul className='footer__list'>
            <h3 className='footer__list-title'>CUSTOMERS</h3>
            <div className='footer__list-title_line'></div>
            <li className='footer__list-item'>
                <div className='footer__list-social'>
                    <img className='footer__list-social-img' src={facebook} alt='social icon' />
                    <h3 className='footer__list-social-title'>Facebook</h3>
                </div>
            </li>
            <li className='footer__list-item'>
                <div className='footer__list-social'>
                    <img className='footer__list-social-img' src={twitter} alt='social icon' />
                    <h3 className='footer__list-social-title'>Twitter</h3>
                </div>
            </li>
            <li className='footer__list-item'>
                <div className='footer__list-social'>
                    <img className='footer__list-social-img' src={insta} alt='social icon' />
                    <h3 className='footer__list-social-title'>Instagram</h3>
                </div>
            </li>
            <li className='footer__list-item'>
                <div className='footer__list-social'>
                    <img className='footer__list-social-img' src={linkid} alt='social icon' />
                    <h3 className='footer__list-social-title'>LinkedIn</h3>
                </div>
            </li>
            </ul>
        </ul>
    </div>
  )
}
