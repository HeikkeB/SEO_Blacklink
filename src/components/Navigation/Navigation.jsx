import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <div className='navigation'>
        <Link className='navigation__link' to='/'>Pricing</Link>
    </div>
  )
}
