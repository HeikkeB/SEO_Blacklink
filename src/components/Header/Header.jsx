import {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [navi, setNavi] = useState(true);
  return (
    
        <>
          {
            (navi) ? (<Navigation />) : (
              <div className='header'>
                <nav>
                <div className='navigation__register'>
                  <Link className='navigation__link' to='/'>Login</Link>
                  <Link className='navigation__button' to='/'>Sign up</Link>
                </div>
                </nav>
              </div>
            )
          }
        </>
  )
}
