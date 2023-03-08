import {useState} from 'react'
import Navigation from '../Navigation/Navigation'

export default function Header() {
  const [navi, setNavi] = useState(true);
  return (
    
        <>
          {
            (navi) ? (<Navigation />) : (
              <div className='header'>
                <nav>
                  
                </nav>
              </div>
            )
          }
        </>
  )
}
