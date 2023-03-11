import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <ul className='footer__menu'>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>COMPANY</h3>
                <li className='footer__list-link'>ABOUT</li>
                <li className='footer__list-link'>CONTACT</li>
                <li className='footer__list-link'>PRESS</li>
                <li className='footer__list-link'>TEAM</li>
                <li className='footer__list-link'>BLOG</li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>CUSTOMERS</h3>
                <li className='footer__list-link'>SERVICES</li>
                <li className='footer__list-link'>MY ACCOUNT</li>
                <li className='footer__list-link'>SUPPORT</li>
                <li className='footer__list-link'>FAQ</li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>PROVIDERS</h3>
                <li className='footer__list-link'>SERVICES</li>
                <li className='footer__list-link'>CASE STUDIES</li>
                <li className='footer__list-link'>SUPPORT</li>
                <li className='footer__list-link'>FAQ</li>
            </ul>
            <ul className='footer__list'>
                <h3 className='footer__list-title'>RECENT BLOG</h3>
                <li className='footer__list-link'>
                    <p className='footer__list-text'>UX Design</p>
                    <p className='footer__list-text'>
                    Lorem ipsum is simply dumy texts is
                    widely used in the design.
                    <Link className='footer__list-text_link' to='/'>Read More</Link></p>  
                </li>
                <li className='footer__list-link'>
                    <p className='footer__list-text'>UX Design</p>
                    <p className='footer__list-text'>
                    Lorem ipsum is simply dumy texts is
                    widely used in the design.
                    <Link className='footer__list-text_link' to='/'>Read More</Link></p>  
                </li>
            </ul>
            <ul className='footer__list'></ul>
        </ul>
    </div>
  )
}
