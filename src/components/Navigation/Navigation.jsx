import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className='navigation'>
    <div className='navigation__pages'>
        <Link className='navigation__link' to='/'>Pricing</Link>
        <Link className='navigation__link' to='/'>Support</Link>
        <Link className='navigation__link' to='/'>About</Link>
        <Link className='navigation__link' to='/'>Blog</Link>
    </div>
    <div className='navigation__register'>
    <Link className='navigation__link' to='/'>Login</Link>
    <Link className='navigation__button' to='/'>Sign up</Link>
    </div>
    </nav>
  )
}
